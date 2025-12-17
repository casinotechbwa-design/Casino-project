import React from 'react';
import { Calendar, Music, Trophy, Star, Clock, X } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
  };

  const featuredEvents = [
    {
      icon: Music,
      title: 'Live Entertainment',
      category: 'Everyday',
      date: 'Daily',
      time: '5:00 PM - 12:00 AM',
      description: 'Top performers and bands take the stage in our premier entertainment venue with state-of-the-art sound and lighting.',
      image: 'Live123.jpg',
      price: 'Free with T&C'
    },
    {
      icon: Trophy,
      title: 'Lucky Draw',
      category: 'Game',
      date: 'Daily',
      time: '9 PM',
      description: 'Compete with the best players for substantial prize pools and prestige in our professional poker room.',
      image: 'gall5.JPG',
      price: 'Buy-in'
    },
    {
      icon: Star,
      title: 'Celebrity Performance',
      category: 'Exclusive',
      date: 'Quarterly Event',
      time: '9:00 PM - 3:00 AM',
      description: 'Exclusive celebration for our VIP members with premium dining, entertainment, and special gaming privileges.',
      image: 'gala.jpg',
      price: 'VIP '
    }
  ];

  const upcomingEvents = [
    {
      date: 'December',
      title: ' Pole Dance',
      time: '09:00 PM',
      status: 'Available',
      videoUrl: '',
      image: 'pole-dance.jpg',
      orientation: 'landscape'
    },
    {
      date: 'Dec 25-26-27-28',
      title: 'Fashion Show',
      time: '1:00 PM',
      status: 'Available',
      image: 'fashion.jpg',
      videoUrl: '',
      orientation: 'landscape'
    },
    {
      date: 'Dec 25-26-27-28',
      title: 'Big Bash II',
      time: '12:00 PM',
      status: 'Available',
      videoUrl: 'https://youtu.be/fIkMgyWzN2E',
      image: 'bigbash1.jpg',
      orientation: 'landscape'
    },
  ];

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Events & Entertainment
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            WORLD-CLASS
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              ENTERTAINMENT
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond gaming, we host world-class entertainment, tournaments, and exclusive events throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {event.category}
                </div>
                <div className="absolute top-4 right-4">
                  <event.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-lg text-sm font-bold">
                  {event.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-black text-white">{event.title}</h3>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">Upcoming Events</h3>
            </div>
            <button className="text-yellow-400 hover:text-yellow-300 font-medium text-sm uppercase tracking-wide">
              View All Events →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedVideo(event.videoUrl);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer bg-black/40 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 group overflow-hidden"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full transition-all duration-300 ${
                      event.orientation === 'portrait'
                        ? 'h-60 object-contain bg-black'
                        : 'h-40 object-cover'
                    }`}
                  />
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-yellow-400 font-bold text-lg">{event.date}</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      event.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                      event.status === 'Limited' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {event.status}
                    </div>
                  </div>
                  <div className="text-white font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-200">
                    {event.title}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <button
              className="absolute top-2 right-2 z-50 bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative z-40">
              {selectedVideo.endsWith('.mp4') ? (
                <video
                  src={`/${selectedVideo}`}
                  controls
                  autoPlay
                  className="w-full h-[400px] md:h-[500px] rounded-lg shadow-xl"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-[400px] md:h-[500px] rounded-lg shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
