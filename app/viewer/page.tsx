'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function ViewerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const doc = searchParams.get('doc');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication
    const authStatus = sessionStorage.getItem('nwestco-auth');
    if (authStatus !== 'true') {
      router.push('/');
      return;
    }

    async function loadDocument() {
      if (!doc) {
        setError('No document specified');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/downloads/${doc}`);
        if (!response.ok) throw new Error('Document not found');

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError('Failed to load document');
      } finally {
        setLoading(false);
      }
    }

    loadDocument();
  }, [doc, router]);

  return (
    <>
      {/* Header */}
      <header style={{
        background: 'var(--tandem-dark)',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            ← Back to Portal
          </Link>
          <Image
            src="/assets/tandem-theory-logo.png"
            alt="Tandem Theory"
            width={100}
            height={32}
            style={{ height: '32px', width: 'auto' }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 24px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          {loading && (
            <div style={{ textAlign: 'center', color: 'var(--tandem-gray)' }}>
              Loading document...
            </div>
          )}

          {error && (
            <div style={{
              background: '#fee',
              color: '#c33',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h2>Error</h2>
              <p>{error}</p>
              <Link href="/" style={{ color: 'var(--tandem-accent)' }}>
                Return to Portal
              </Link>
            </div>
          )}

          {!loading && !error && (
            <pre style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              fontFamily: 'Monaco, Courier, monospace',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              color: 'var(--tandem-dark)'
            }}>
              {content}
            </pre>
          )}
        </div>
      </main>
    </>
  );
}

export default function ViewerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewerContent />
    </Suspense>
  );
}
