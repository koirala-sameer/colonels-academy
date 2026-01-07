import { useState, useEffect } from 'react';

export const useDeviceDPI = () => {
  const [dpi, setDpi] = useState(1);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | 'high-dpi'>('desktop');
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const calculateDPI = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const width = window.screen.width;
      const innerWidth = window.innerWidth;
      
      // Calculate zoom level
      const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
      setZoomLevel(zoom);
      
      // Detect high DPI
      let detectedDPI = 1;
      let detectedType: 'mobile' | 'tablet' | 'desktop' | 'high-dpi' = 'desktop';
      
      if (pixelRatio >= 2) {
        detectedDPI = 2;
        detectedType = 'high-dpi';
      } else if (pixelRatio >= 1.5) {
        detectedDPI = 1.5;
        detectedType = 'high-dpi';
      }
      
      // Device type detection
      if (width <= 768 || innerWidth <= 768) {
        detectedType = 'mobile';
      } else if (width <= 1024 || innerWidth <= 1024) {
        detectedType = 'tablet';
      }
      
      setDpi(detectedDPI);
      setDeviceType(detectedType);
    };

    calculateDPI();
    window.addEventListener('resize', calculateDPI);
    window.addEventListener('load', calculateDPI);
    
    return () => {
      window.removeEventListener('resize', calculateDPI);
      window.removeEventListener('load', calculateDPI);
    };
  }, []);

  return { dpi, deviceType, zoomLevel };
};