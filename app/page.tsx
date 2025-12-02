'use client';

import { useState } from 'react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [authMethod, setAuthMethod] = useState<'password' | 'email'>('password');

  const handlePasswordAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - replace with your actual password
    if (password === 'nwestco2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (email && email.includes('@')) {
      setIsAuthenticated(true);
      setError('');
      // In production, you'd send this email to your backend/database
      console.log('Email submitted:', email);
    } else {
      setError('Please enter a valid email address');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tandem-blue to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          {/* Tandem Theory Logo/Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-tandem-blue mb-2">Tandem Theory</h1>
            <div className="h-1 w-20 bg-tandem-orange mx-auto mb-4"></div>
            <p className="text-gray-600">NWESTCO Project Portal</p>
          </div>

          {/* Auth Method Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setAuthMethod('password')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                authMethod === 'password'
                  ? 'bg-tandem-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Password
            </button>
            <button
              onClick={() => setAuthMethod('email')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                authMethod === 'email'
                  ? 'bg-tandem-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Email
            </button>
          </div>

          {/* Password Auth Form */}
          {authMethod === 'password' && (
            <form onSubmit={handlePasswordAuth} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tandem-orange focus:border-transparent"
                  placeholder="Enter portal password"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-tandem-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Access Portal
              </button>
            </form>
          )}

          {/* Email Auth Form */}
          {authMethod === 'email' && (
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tandem-orange focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-tandem-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Access Portal
              </button>
              <p className="text-xs text-gray-500 text-center">
                We'll record your email for access tracking
              </p>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Authenticated View - Portal Content
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-tandem-blue text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Tandem Theory</h1>
            <p className="text-blue-200 text-sm">NWESTCO Project Portal</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-tandem-blue mb-4">WordPress Theme Package</h2>
          <p className="text-gray-600 mb-6">
            Complete WordPress theme and content import files for your NWESTCO website. Ready to upload to WP Engine.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Created: December 1, 2025</span>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Document Card 1 - Theme Package */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-tandem-orange/10 p-3 rounded-lg">
                <svg className="w-8 h-8 text-tandem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">WordPress Theme</h3>
                <p className="text-sm text-gray-600 mb-3">nwestco-theme.zip (15 MB)</p>
                <p className="text-xs text-gray-500 mb-4">Complete WordPress theme with all CSS, JavaScript, and images from Option C prototype</p>
                <a
                  href="/downloads/nwestco-theme.zip"
                  className="inline-flex items-center gap-2 bg-tandem-blue hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Theme
                </a>
              </div>
            </div>
          </div>

          {/* Document Card 2 - Content XML */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-tandem-orange/10 p-3 rounded-lg">
                <svg className="w-8 h-8 text-tandem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Content Import</h3>
                <p className="text-sm text-gray-600 mb-3">nwestco-content.xml</p>
                <p className="text-xs text-gray-500 mb-4">19 complete pages with all content from Option C - ready to import to WordPress</p>
                <a
                  href="/downloads/nwestco-content.xml"
                  className="inline-flex items-center gap-2 bg-tandem-blue hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Content
                </a>
              </div>
            </div>
          </div>

          {/* Document Card 3 - Installation Guide */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-tandem-orange/10 p-3 rounded-lg">
                <svg className="w-8 h-8 text-tandem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Installation Guide</h3>
                <p className="text-sm text-gray-600 mb-3">FINAL-DELIVERY-PACKAGE.md</p>
                <p className="text-xs text-gray-500 mb-4">Complete step-by-step instructions for uploading theme and importing content</p>
                <a
                  href="/downloads/FINAL-DELIVERY-PACKAGE.md"
                  className="inline-flex items-center gap-2 bg-tandem-blue hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Guide
                </a>
              </div>
            </div>
          </div>

          {/* Document Card 4 - Theme Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-tandem-orange/10 p-3 rounded-lg">
                <svg className="w-8 h-8 text-tandem-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Theme Summary</h3>
                <p className="text-sm text-gray-600 mb-3">NWESTCO-THEME-PACKAGE-SUMMARY.md</p>
                <p className="text-xs text-gray-500 mb-4">Detailed overview of everything included in the theme package</p>
                <a
                  href="/downloads/NWESTCO-THEME-PACKAGE-SUMMARY.md"
                  className="inline-flex items-center gap-2 bg-tandem-blue hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Summary
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="bg-gradient-to-r from-tandem-blue to-slate-800 rounded-lg shadow-md p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Quick Start Guide</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold bg-tandem-orange rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
              <p>Upload <strong>nwestco-theme.zip</strong> to WP Engine (Appearance → Themes → Add New)</p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold bg-tandem-orange rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
              <p>Import <strong>nwestco-content.xml</strong> (Tools → Import → WordPress)</p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold bg-tandem-orange rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
              <p>Set homepage (Settings → Reading → Static Page)</p>
            </div>
            <div className="flex gap-3">
              <span className="font-bold bg-tandem-orange rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
              <p>Configure menus (Appearance → Menus)</p>
            </div>
          </div>
          <p className="mt-6 text-blue-200 text-xs">Total setup time: ~30 minutes</p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Questions? Contact <a href="mailto:hello@tandemtheory.com" className="text-tandem-orange hover:underline">hello@tandemtheory.com</a></p>
          <p className="mt-2">© 2025 Tandem Theory. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
