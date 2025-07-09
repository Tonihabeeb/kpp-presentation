import Head from 'next/head';
import Link from 'next/link';

export default function PresentationHome() {
  return (
    <>
      <Head>
        <title>KPP Technology Presentation - Deep Engineering</title>
        <meta name="description" content="Interactive presentation showcasing Kinetic Power Plant (KPP) technology by Deep Engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="presentation-home">
        <div className="presentation-container">
          <h1>KPP Technology Presentation</h1>
          
          <p>
            Interactive presentation showcasing the revolutionary Kinetic Power Plant technology
          </p>
          
          <Link href="/slides/1-introduction" className="start-button">
            Start Presentation →
          </Link>
          
          <div className="instructions">
            Use arrow keys for navigation • Press Tab for accessibility options
          </div>
        </div>

        <style jsx>{`
          .presentation-home {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #0066cc 0%, #004499 50%, #002266 100%);
            padding: 2rem;
          }

          .presentation-container {
            text-align: center;
            background: rgba(10, 10, 10, 0.85);
            border-radius: 24px;
            padding: 3rem;
            max-width: 600px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(20px);
          }

          h1 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }

          p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.2rem;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .start-button {
            display: inline-block;
            background: #0066cc;
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .start-button:hover {
            background: #0052a3;
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
          }

          .instructions {
            margin-top: 2rem;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
          }

          @media (max-width: 768px) {
            .presentation-container {
              padding: 2rem;
              margin: 1rem;
            }

            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1rem;
            }
          }
        `}</style>
      </main>
    </>
  );
}
