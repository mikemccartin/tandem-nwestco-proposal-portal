'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple authentication (in production, this would be server-side)
    if (password === 'nwestco2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="logo-container">
            <Image
              src="/assets/tandem-theory-logo.png"
              alt="Tandem Theory"
              width={150}
              height={50}
              className="tandem-logo-img"
            />
          </div>
          <h2>NWESTCO Project Portal</h2>
          <p>Secure access to project deliverables</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter portal password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Access Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <Image
            src="/assets/tandem-theory-logo.png"
            alt="Tandem Theory"
            width={150}
            height={50}
            className="tandem-logo"
          />
          <p>Strategic Marketing Partner</p>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>NWESTCO Proposal Documents</h1>
          <div className="client-logo">
            <Image
              src="/assets/nwestco_logo_flat.png"
              alt="Nwestco"
              width={300}
              height={60}
              style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section>
        <div className="container">
          <span className="section-label">Project Deliverables</span>
          <h2>WordPress Theme Package</h2>
          <p className="section-intro">Complete WordPress theme with all assets, documentation, and content ready for WP Engine deployment.</p>

          <div className="download-grid">
            {/* WordPress Theme Summary */}
            <div className="download-card">
              <div className="download-header">
                <h3>WordPress Theme Package</h3>
                <span className="badge">Ready for WP Engine</span>
              </div>
              <div className="download-body">
                <p>Complete overview of the WordPress theme package including all features, assets, installation instructions, and post-setup configuration.</p>
                <a href="/downloads/NWESTCO-THEME-PACKAGE-SUMMARY.md" download className="btn btn-primary">
                  Download Theme Summary
                </a>
              </div>
            </div>

            {/* Final Delivery Package */}
            <div className="download-card">
              <div className="download-header">
                <h3>Final Delivery Package</h3>
                <span className="badge">Complete Guide</span>
              </div>
              <div className="download-body">
                <p>Comprehensive delivery package with quick start guide, all deliverables overview, and step-by-step installation instructions.</p>
                <a href="/downloads/FINAL-DELIVERY-PACKAGE.md" download className="btn btn-primary">
                  Download Delivery Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>Confidential - For internal review and client use only</p>
        </div>
      </footer>
    </>
  );
}
