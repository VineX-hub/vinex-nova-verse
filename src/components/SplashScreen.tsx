import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary-hover transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
          <span className="text-4xl font-bold text-white">V</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
          VineRealm
        </h1>
        <p className="text-xl text-white/80 animate-fade-in">
          Your Gateway to Premium Content
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;