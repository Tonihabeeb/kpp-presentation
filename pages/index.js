import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect to first slide after 3 seconds
    const timer = setTimeout(() => {
      router.push('/slides/1');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Kinetic Power Plant (KPP) Technology</h1>
        <h2>Technical Overview Presentation</h2>
        
        <div className="loading">
          <p>Loading presentation...</p>
          <div className="spinner"></div>
        </div>
        
        <div className="manual-nav">
          <p>Or navigate manually:</p>
          <Link href="/slides/1" className="start-button">
            Start Presentation
          </Link>
        </div>
      </div>
    </div>
  );
} 