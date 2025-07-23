import React, { useEffect, useState, useRef } from 'react';
import { Play, Star, Trophy, Users, Video } from 'lucide-react';

const mediaList = [
  { type: 'image', url: 'back1.jpg' },
  { type: 'image', url: 'table2.jpg' },
  { type: 'image', url: 'table1.jpg' },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showTourVideo, setShowTourVideo] = useState(false);

  const currentMedia = mediaList[currentIndex];

  useEffect(() => {
    if (currentMedia.type === 'image') {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaList.length);
      }, 5000);
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {currentMedia.type === 'video' ? (
          <video
            key={currentMedia.url}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src={currentMedia.url} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url("${currentMedia.url}")` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4 sm:mb-6 mx-auto lg:mx-0">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
                  Premium Gaming Experience
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                <span className="text-white block">WELCOME TO</span>
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block">
                  TIGER PALACE
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience the ultimate luxury gaming destination where fortune meets elegance.
                Join thousands of winners at Asia's most prestigious casino.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#games"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wide text-center"
              >
                Start Playing Now
              </a>

              <button
                onClick={() => setShowTourVideo(true)}
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wide"
              >
                <Play className="h-5 w-5 mr-2" />
                Virtual Tour
              </button>

              <button
                onClick={() => window.open('https://www.instagram.com/tigerpalacecasino?igsh=MXRpZnJjMGpzZHA4cA==', '_blank')}
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wide"
              >
                <Video className="h-5 w-5 mr-2" />
                Reels
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
              {[
                ['150+', 'Slot Machines'],
                ['50+', 'Table Games'],
                ['24/7', 'Gaming Action'],
              ].map(([count, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">{count}</div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <img
              src="/logo_for_red.png"
              alt="Tiger Palace Casino"
              className="h-32 sm:h-48 w-auto mb-6 animate-pulse"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              {[
                [Trophy, 'VIP Rewards', 'Exclusive benefits and personalized service'],
                [Users, 'Live Events', 'World-class entertainment and tournaments'],
              ].map(([Icon, title, desc], idx) => (
                <div
                  key={idx}
                  className="bg-black/60 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-5 sm:p-6 hover:border-yellow-500/40 transition-all duration-300 text-center"
                >
                  <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold sm:font-bold mb-1 sm:mb-2 uppercase tracking-wide text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      {showTourVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              onClick={() => setShowTourVideo(false)}
              className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-red-600 text-white rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src="virtual.mp4"
              title="Virtual Tour"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
