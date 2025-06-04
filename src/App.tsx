import React, { useEffect, useState } from 'react';
import DesktopApp from './desktop/App';
import MobileApp from './mobile/App';

function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has a saved preference
    const savedPreference = localStorage.getItem('portfolioVersion');
    
    if (savedPreference) {
      setIsMobile(savedPreference === 'mobile');
      setIsLoading(false);
      return;
    }

    // Auto-detect device
    const checkDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      // Mobile if screen is small OR mobile device detected
      setIsMobile(width < 1024 || isMobileDevice);
      setIsLoading(false);
    };

    checkDevice();
  }, []);

  // Loading screen while detecting
  if (isLoading || isMobile === null) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#141522',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8BADD3'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            border: '3px solid rgba(139, 173, 211, 0.3)',
            borderRadius: '50%',
            borderTop: '3px solid #8BADD3',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <p>Loading portfolio...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <VersionSwitcher currentVersion={isMobile ? 'mobile' : 'desktop'} />
    </>
  );
}

// Version Switcher Component (included in same file for simplicity)
const VersionSwitcher: React.FC<{ currentVersion: 'mobile' | 'desktop' }> = ({ currentVersion }) => {
  const switchVersion = () => {
    const newVersion = currentVersion === 'mobile' ? 'desktop' : 'mobile';
    localStorage.setItem('portfolioVersion', newVersion);
    window.location.reload(); // Simple reload to apply changes
  };

  return (
    <button
      onClick={switchVersion}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#8BADD3',
        color: '#141522',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {currentVersion === 'mobile' ? '💻' : '📱'} 
      Switch to {currentVersion === 'mobile' ? 'Desktop' : 'Mobile'} Version
    </button>
  );
};

export default App;
