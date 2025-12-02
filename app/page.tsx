'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('nwestco-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple authentication (in production, this would be server-side)
    if (password === 'nwestco2025') {
      setIsAuthenticated(true);
      sessionStorage.setItem('nwestco-auth', 'true');
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  // Show loading state briefly to prevent flash
  if (isLoading) {
    return null;
  }

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
          <div className="header-logos">
            <Image
              src="/assets/nwestco_logo_flat.png"
              alt="Nwestco"
              width={150}
              height={40}
              className="nwestco-logo"
            />
            <div className="logo-divider"></div>
            <Image
              src="/assets/tandem-theory-logo.png"
              alt="Tandem Theory"
              width={150}
              height={40}
              className="tandem-logo"
            />
          </div>
        </div>
      </header>

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
                <a href="/viewer?doc=NWESTCO-THEME-PACKAGE-SUMMARY.md" className="btn btn-primary">
                  View Theme Summary
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
                <a href="/viewer?doc=FINAL-DELIVERY-PACKAGE.md" className="btn btn-primary">
                  View Delivery Package
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
