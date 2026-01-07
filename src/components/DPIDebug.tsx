import { useDeviceDPI } from '../hooks/useDeviceDPI';

const DPIDebug = () => {
  const { dpi, deviceType, zoomLevel } = useDeviceDPI();

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-3 rounded-lg text-xs z-[9999] pointer-events-none border border-white/20 backdrop-blur-sm">
      <div className="font-mono font-bold">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>SYSTEM MONITOR</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
          <span className="text-gray-400">DPI:</span>
          <span className="text-yellow-400">{dpi}x</span>
          
          <span className="text-gray-400">Device:</span>
          <span className="text-blue-400">{deviceType.toUpperCase()}</span>
          
          <span className="text-gray-400">Zoom:</span>
          <span className="text-green-400">{zoomLevel}x</span>
          
          <span className="text-gray-400">Pixel Ratio:</span>
          <span className="text-purple-400">{window.devicePixelRatio.toFixed(2)}</span>
          
          <span className="text-gray-400">Screen:</span>
          <span>{window.screen.width}×{window.screen.height}</span>
          
          <span className="text-gray-400">Viewport:</span>
          <span>{window.innerWidth}×{window.innerHeight}</span>
        </div>
      </div>
    </div>
  );
};

export default DPIDebug;