import React, { useRef, useEffect, useState } from 'react';

const WebGL3DVisualization = ({ type = 'kpp-system', width = 800, height = 600 }) => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      // WebGL not supported, silently fallback
      return;
    }

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec3 a_position;
      attribute vec3 a_normal;
      attribute vec2 a_texCoord;
      
      uniform mat4 u_worldViewProjection;
      uniform mat4 u_world;
      uniform mat4 u_worldInverseTranspose;
      
      varying vec3 v_normal;
      varying vec2 v_texCoord;
      varying vec3 v_worldPosition;
      
      void main() {
        gl_Position = u_worldViewProjection * vec4(a_position, 1.0);
        v_normal = mat3(u_worldInverseTranspose) * a_normal;
        v_texCoord = a_texCoord;
        v_worldPosition = (u_world * vec4(a_position, 1.0)).xyz;
      }
    `;

    // Fragment shader source
    const fragmentShaderSource = `
      precision mediump float;
      
      varying vec3 v_normal;
      varying vec2 v_texCoord;
      varying vec3 v_worldPosition;
      
      uniform vec3 u_lightWorldPosition;
      uniform vec3 u_viewWorldPosition;
      uniform vec4 u_color;
      uniform float u_time;
      uniform float u_metallic;
      uniform float u_roughness;
      
      vec3 getNormal() {
        return normalize(v_normal);
      }
      
      void main() {
        vec3 normal = getNormal();
        vec3 lightDirection = normalize(u_lightWorldPosition - v_worldPosition);
        vec3 viewDirection = normalize(u_viewWorldPosition - v_worldPosition);
        vec3 halfVector = normalize(lightDirection + viewDirection);
        
        float NdotL = max(dot(normal, lightDirection), 0.0);
        float NdotH = max(dot(normal, halfVector), 0.0);
        float VdotH = max(dot(viewDirection, halfVector), 0.0);
        
        // Simple PBR lighting
        vec3 baseColor = u_color.rgb;
        
        // Energy pulse effect
        float pulse = sin(u_time * 2.0) * 0.1 + 0.9;
        
        // Fresnel effect
        float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), 3.0);
        
        // Combine lighting
        vec3 diffuse = baseColor * NdotL;
        vec3 specular = vec3(1.0) * pow(NdotH, 32.0) * (1.0 - u_roughness);
        vec3 emission = baseColor * fresnel * 0.2 * pulse;
        
        vec3 finalColor = diffuse + specular + emission;
        
        gl_FragColor = vec4(finalColor, u_color.a);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        // Shader compilation failed, cleanup and return
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        // Program linking failed, cleanup and return
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    }

    // Create shaders and program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    if (!program) return;

    // Get locations
    const locations = {
      attributes: {
        position: gl.getAttribLocation(program, 'a_position'),
        normal: gl.getAttribLocation(program, 'a_normal'),
        texCoord: gl.getAttribLocation(program, 'a_texCoord'),
      },
      uniforms: {
        worldViewProjection: gl.getUniformLocation(program, 'u_worldViewProjection'),
        world: gl.getUniformLocation(program, 'u_world'),
        worldInverseTranspose: gl.getUniformLocation(program, 'u_worldInverseTranspose'),
        lightWorldPosition: gl.getUniformLocation(program, 'u_lightWorldPosition'),
        viewWorldPosition: gl.getUniformLocation(program, 'u_viewWorldPosition'),
        color: gl.getUniformLocation(program, 'u_color'),
        time: gl.getUniformLocation(program, 'u_time'),
        metallic: gl.getUniformLocation(program, 'u_metallic'),
        roughness: gl.getUniformLocation(program, 'u_roughness'),
      }
    };

    // Create geometry based on type
    let geometry;
    if (type === 'kpp-system') {
      geometry = createKPPSystemGeometry();
    } else if (type === 'turbine') {
      geometry = createTurbineGeometry();
    } else {
      geometry = createCubeGeometry();
    }

    function createKPPSystemGeometry() {
      // Create a simplified KPP system with tower, turbine, and generator
      const positions = [];
      const normals = [];
      const texCoords = [];
      const indices = [];

      // Tower (cylinder)
      const towerHeight = 2.0;
      const towerRadius = 0.2;
      const towerSegments = 16;

      for (let i = 0; i <= towerSegments; i++) {
        const angle = (i / towerSegments) * Math.PI * 2;
        const x = Math.cos(angle) * towerRadius;
        const z = Math.sin(angle) * towerRadius;

        // Bottom
        positions.push(x, 0, z);
        normals.push(x, 0, z);
        texCoords.push(i / towerSegments, 0);

        // Top
        positions.push(x, towerHeight, z);
        normals.push(x, 0, z);
        texCoords.push(i / towerSegments, 1);
      }

      // Generate indices for tower
      for (let i = 0; i < towerSegments; i++) {
        const bottom1 = i * 2;
        const top1 = i * 2 + 1;
        const bottom2 = ((i + 1) % (towerSegments + 1)) * 2;
        const top2 = ((i + 1) % (towerSegments + 1)) * 2 + 1;

        indices.push(bottom1, bottom2, top1);
        indices.push(top1, bottom2, top2);
      }

      return { positions, normals, texCoords, indices };
    }

    function createTurbineGeometry() {
      const positions = [];
      const normals = [];
      const texCoords = [];
      const indices = [];

      // Create turbine blades
      const bladeCount = 8;
      const bladeLength = 1.5;
      const hubRadius = 0.1;

      for (let blade = 0; blade < bladeCount; blade++) {
        const angle = (blade / bladeCount) * Math.PI * 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Blade geometry (simplified as quads)
        const baseIdx = positions.length / 3;

        // Hub connection
        positions.push(cos * hubRadius, 0, sin * hubRadius);
        normals.push(0, 1, 0);
        texCoords.push(0, 0);

        // Blade tip
        positions.push(cos * bladeLength, 0, sin * bladeLength);
        normals.push(0, 1, 0);
        texCoords.push(1, 0);

        // Add blade geometry
        if (blade < bladeCount - 1) {
          indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
          indices.push(baseIdx + 1, baseIdx + 3, baseIdx + 2);
        }
      }

      return { positions, normals, texCoords, indices };
    }

    function createCubeGeometry() {
      return {
        positions: [
          -0.5, -0.5,  0.5,  0.5, -0.5,  0.5,  0.5,  0.5,  0.5, -0.5,  0.5,  0.5,
          -0.5, -0.5, -0.5, -0.5,  0.5, -0.5,  0.5,  0.5, -0.5,  0.5, -0.5, -0.5,
        ],
        normals: [
          0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
          0, 0, -1,  0, 0, -1,  0, 0, -1,  0, 0, -1,
        ],
        texCoords: [
          0, 0,  1, 0,  1, 1,  0, 1,
          0, 0,  1, 0,  1, 1,  0, 1,
        ],
        indices: [
          0, 1, 2,  0, 2, 3,
          4, 5, 6,  4, 6, 7,
        ]
      };
    }

    // Create buffers
    const buffers = {
      position: gl.createBuffer(),
      normal: gl.createBuffer(),
      texCoord: gl.createBuffer(),
      indices: gl.createBuffer(),
    };

    // Bind geometry data
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.positions), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.normals), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texCoord);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(geometry.texCoords), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(geometry.indices), gl.STATIC_DRAW);

    // Matrix utilities
    function createMatrix4() {
      return new Float32Array(16);
    }

    function identity(matrix) {
      matrix[0] = 1; matrix[1] = 0; matrix[2] = 0; matrix[3] = 0;
      matrix[4] = 0; matrix[5] = 1; matrix[6] = 0; matrix[7] = 0;
      matrix[8] = 0; matrix[9] = 0; matrix[10] = 1; matrix[11] = 0;
      matrix[12] = 0; matrix[13] = 0; matrix[14] = 0; matrix[15] = 1;
      return matrix;
    }

    function perspective(matrix, fov, aspect, near, far) {
      const f = Math.tan(Math.PI * 0.5 - 0.5 * fov);
      const rangeInv = 1.0 / (near - far);

      matrix[0] = f / aspect; matrix[1] = 0; matrix[2] = 0; matrix[3] = 0;
      matrix[4] = 0; matrix[5] = f; matrix[6] = 0; matrix[7] = 0;
      matrix[8] = 0; matrix[9] = 0; matrix[10] = (near + far) * rangeInv; matrix[11] = -1;
      matrix[12] = 0; matrix[13] = 0; matrix[14] = near * far * rangeInv * 2; matrix[15] = 0;
      return matrix;
    }

    function rotateX(matrix, angle) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const m11 = matrix[5];
      const m12 = matrix[6];
      const m13 = matrix[7];
      const m21 = matrix[9];
      const m22 = matrix[10];
      const m23 = matrix[11];

      matrix[5] = c * m11 + s * m21;
      matrix[6] = c * m12 + s * m22;
      matrix[7] = c * m13 + s * m23;
      matrix[9] = c * m21 - s * m11;
      matrix[10] = c * m22 - s * m12;
      matrix[11] = c * m23 - s * m13;
      return matrix;
    }

    function rotateY(matrix, angle) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const m00 = matrix[0];
      const m01 = matrix[1];
      const m02 = matrix[2];
      const m20 = matrix[8];
      const m21 = matrix[9];
      const m22 = matrix[10];

      matrix[0] = c * m00 - s * m20;
      matrix[1] = c * m01 - s * m21;
      matrix[2] = c * m02 - s * m22;
      matrix[8] = c * m20 + s * m00;
      matrix[9] = c * m21 + s * m01;
      matrix[10] = c * m22 + s * m02;
      return matrix;
    }

    function scale(matrix, sx, sy, sz) {
      matrix[0] *= sx; matrix[1] *= sx; matrix[2] *= sx; matrix[3] *= sx;
      matrix[4] *= sy; matrix[5] *= sy; matrix[6] *= sy; matrix[7] *= sy;
      matrix[8] *= sz; matrix[9] *= sz; matrix[10] *= sz; matrix[11] *= sz;
      return matrix;
    }

    function multiply(a, b, result) {
      const b00 = b[0 * 4 + 0];
      const b01 = b[0 * 4 + 1];
      const b02 = b[0 * 4 + 2];
      const b03 = b[0 * 4 + 3];
      const b10 = b[1 * 4 + 0];
      const b11 = b[1 * 4 + 1];
      const b12 = b[1 * 4 + 2];
      const b13 = b[1 * 4 + 3];
      const b20 = b[2 * 4 + 0];
      const b21 = b[2 * 4 + 1];
      const b22 = b[2 * 4 + 2];
      const b23 = b[2 * 4 + 3];
      const b30 = b[3 * 4 + 0];
      const b31 = b[3 * 4 + 1];
      const b32 = b[3 * 4 + 2];
      const b33 = b[3 * 4 + 3];
      const a00 = a[0 * 4 + 0];
      const a01 = a[0 * 4 + 1];
      const a02 = a[0 * 4 + 2];
      const a03 = a[0 * 4 + 3];
      const a10 = a[1 * 4 + 0];
      const a11 = a[1 * 4 + 1];
      const a12 = a[1 * 4 + 2];
      const a13 = a[1 * 4 + 3];
      const a20 = a[2 * 4 + 0];
      const a21 = a[2 * 4 + 1];
      const a22 = a[2 * 4 + 2];
      const a23 = a[2 * 4 + 3];
      const a30 = a[3 * 4 + 0];
      const a31 = a[3 * 4 + 1];
      const a32 = a[3 * 4 + 2];
      const a33 = a[3 * 4 + 3];

      result[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
      result[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
      result[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
      result[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
      result[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
      result[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
      result[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
      result[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
      result[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
      result[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
      result[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
      result[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
      result[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
      result[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
      result[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
      result[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

      return result;
    }

    // Render function
    let startTime = Date.now();
    function render() {
      const time = (Date.now() - startTime) * 0.001;

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.CULL_FACE);

      gl.useProgram(program);

      // Set up matrices
      const world = identity(createMatrix4());
      const view = identity(createMatrix4());
      const projection = createMatrix4();
      const worldViewProjection = createMatrix4();

      // Apply user rotation and zoom
      rotateX(world, rotation.x);
      rotateY(world, rotation.y + time * 0.1);
      scale(world, zoom, zoom, zoom);

      // Set up camera
      perspective(projection, Math.PI / 4, gl.canvas.width / gl.canvas.height, 0.1, 100);
      view[14] = -5; // Move camera back

      multiply(view, world, worldViewProjection);
      multiply(projection, worldViewProjection, worldViewProjection);

      // Set uniforms
      gl.uniformMatrix4fv(locations.uniforms.worldViewProjection, false, worldViewProjection);
      gl.uniformMatrix4fv(locations.uniforms.world, false, world);
      gl.uniformMatrix4fv(locations.uniforms.worldInverseTranspose, false, world);
      gl.uniform3f(locations.uniforms.lightWorldPosition, 5, 5, 5);
      gl.uniform3f(locations.uniforms.viewWorldPosition, 0, 0, 5);
      gl.uniform4f(locations.uniforms.color, 0.1, 0.4, 0.8, 1.0);
      gl.uniform1f(locations.uniforms.time, time);
      gl.uniform1f(locations.uniforms.metallic, 0.8);
      gl.uniform1f(locations.uniforms.roughness, 0.2);

      // Bind attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.enableVertexAttribArray(locations.attributes.position);
      gl.vertexAttribPointer(locations.attributes.position, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
      gl.enableVertexAttribArray(locations.attributes.normal);
      gl.vertexAttribPointer(locations.attributes.normal, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texCoord);
      gl.enableVertexAttribArray(locations.attributes.texCoord);
      gl.vertexAttribPointer(locations.attributes.texCoord, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
      gl.drawElements(gl.TRIANGLES, geometry.indices.length, gl.UNSIGNED_SHORT, 0);

      requestAnimationFrame(render);
    }

    // Set up WebGL context
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
    gl.clearColor(0.05, 0.05, 0.1, 1.0);

    setIsLoaded(true);
    render();

    return () => {
      // Cleanup
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      Object.values(buffers).forEach(buffer => gl.deleteBuffer(buffer));
    };
  }, [type, width, height, rotation, zoom]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));

    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setZoom(prev => Math.max(0.1, Math.min(3, prev + delta)));
  };

  return (
    <div className="webgl-3d-visualization">
      <div className="controls-overlay">
        <div className="control-group">
          <label>Zoom: {zoom.toFixed(2)}x</label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
        </div>
        <div className="control-group">
          <button onClick={() => setRotation({ x: 0, y: 0 })}>
            Reset View
          </button>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className="webgl-canvas"
      />

      {!isLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading 3D Visualization...</p>
        </div>
      )}

      <style jsx>{`
        .webgl-3d-visualization {
          position: relative;
          background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .webgl-canvas {
          display: block;
          cursor: grab;
          width: 100%;
          height: auto;
        }

        .webgl-canvas:active {
          cursor: grabbing;
        }

        .controls-overlay {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          color: white;
          z-index: 10;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .control-group label {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }

        .control-group input[type="range"] {
          width: 100px;
          background: transparent;
        }

        .control-group button {
          background: var(--energy-orange);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .control-group button:hover {
          background: var(--energy-orange-dark);
          transform: translateY(-1px);
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 20;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid var(--energy-orange);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: var(--space-4);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .controls-overlay {
            top: var(--space-2);
            right: var(--space-2);
            padding: var(--space-3);
          }

          .control-group input[type="range"] {
            width: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default WebGL3DVisualization;
