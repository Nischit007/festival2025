import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Play, X, Clock, Users, Globe, Star, Heart, Share2 } from 'lucide-react';
import type { NGOVideo, VideoCategory } from './NgoVideos';

const VideosCollection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<NGOVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTrailersOnly, setShowTrailersOnly] = useState(false);
  const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLDivElement>(null);

  // Enhanced sample data with exactly 5 videos
  const videoCategories: VideoCategory[] = [
    {
      name: "Activism",
      videos: [
        {
          id: "1",
          title: "Human Rights Art Festival 2024",
          description: "Experience the energy, creativity, and powerful advocacy from the Human Rights Art Festival 2024, organized by Freedom Studio with support from The Artivist Nexus. Held on December 14, 2024, at SAIM College, Kathmandu, the festival brought together over 150 participants, including artists, activists, and human rights defenders, under the theme “Our Rights, Our Future, Right Now",
          ngoName: "Freedom Studio",
          videoUrl: "https://youtu.be/jtkxgdu8HkA?si=RPEMpI-VQlz-ohgM",
          thumbnail: "https://i.ytimg.com/vi/jtkxgdu8HkA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=\u0026rs=AOn4CLCzTZeM-ds2Low0g8pVj66IL9Hzaw",
          duration: "10:25",
          category: "Environment",
          tags: ["artivism", "activism", "justice", "freedomstudio"],
          uploadDate: "2024-01-15",
          isTrailer: true,
       
        },
        {
          id: "2",
          title: "Bhaktapur Land Rights Movement",
          description: "The Deko-Miwa-Itapake Land Integration Project was initiated by Bhaktapur Municipality to create an integrated settlement with new infrastructure, affecting several communities and thousands of landowners in the Sallaghari-Dekocha area. Affected landowners and farmers claim the project has unfairly reduced their land holdings by 60-80% under the guise of a contribution requirement, which has put many at risk of becoming landless. The project has continued to face backlash due to its arbitrary land distribution methods, and lack of adherence to existing land norms",
          ngoName: "Freedom Studio",
          videoUrl: "https://youtu.be/FaPrV_iXyNc?si=WkQaW7StR0N9-v8n",
          thumbnail: "https://i.ytimg.com/vi/FaPrV_iXyNc/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYciBHKEAwDw==\u0026rs=AOn4CLACakWPesd1SQtmI26TBUUjwkJWVg",
          duration: "6:13",
          category: "Environment",
          tags: ["artivism", "activism", "justice", "freedomstudio"],
          uploadDate: "2024-01-10",
          isTrailer: false,
      
        },
        {
          id: "3",
          title: "A poetry in motion | LGBTQIA+ | Audio Drama",
          description: "A poetry in motion of an LGBTQI+ individual simply seeking to be themselves in a world that often doesn’t understand. A product of Media Artivism Fellowship, this is a heartfelt call to see beyond labels and treat everyone with the kindness and respect they inherently deserve.",
          ngoName: "Freedom Studio",
          videoUrl: "https://youtu.be/8Vm_ITh5tEU?si=QjaeJPQCSLrUvhtA",
          thumbnail: "https://i.ytimg.com/vi/8Vm_ITh5tEU/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=\u0026rs=AOn4CLC3br74BLMZgLkAYmjl7eXYVsVOTQ",
          duration: "2:45",
          category: "Environment",
          tags: ["artivism", "activism", "justice", "freedomstudio"],
          uploadDate: "2024-01-12",
          isTrailer: true,
        },
        {
          id: "4",
          title: "WSF 2024 | From the lens of Freedom Studio",
          description: "The World Social Forum (WSF) is like a big meeting where people from different backgrounds, like social movements, workers, farmers, and various community groups, come together to talk about important issues. They discuss ideas, share experiences, and come up with plans to make positive changes. The WSF started in 2001 with the idea of creating a better world, and in 2024, the focus is on making that better world a reality right now.",
          ngoName: "Freedom Studio",
          videoUrl: "https://youtu.be/1TucgC4oQ5g?si=-m3uR5IAxLxQTrXi",
          thumbnail: "https://i.ytimg.com/vi/1TucgC4oQ5g/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=\u0026rs=AOn4CLCTVXv7Fi6u-T1y7SngS2_0KX2SmQ",
          duration: "14:45",
          category: "Environment",
          tags: ["artivism", "activism", "justice", "freedomstudio"],
          uploadDate: "2024-01-18",
          isTrailer: true,
        },
        {
          id: "5",
          title: "Going through the artworks",
          description: "Walking through the artwork felt like stepping into another world. Each piece seemed to whisper its own story — bold colors, intricate textures, and subtle shadows guided my eyes from one detail to the next. The gallery’s soft lighting created a quiet intimacy, allowing every brushstroke and sculpted edge to stand out. As I moved from one artwork to another, I felt a growing connection — the emotions of the artists echoing through time and space, surrounding me with a living tapestry of creativity.",
          ngoName: "Freedom Studio",
          videoUrl: "https://youtu.be/iG_tWzHRwi8?si=yHlyiMDWHVOauAmr",
          thumbnail: "https://i.ytimg.com/vi/iG_tWzHRwi8/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYciBAKEUwDw==\u0026rs=AOn4CLAhGkhYLeb8WoCHZy5cfLXaOaiqDQ",
          duration: "20:30",
          category: "Environment",
          tags: ["artivism", "activism", "justice", "freedomstudio"],
          uploadDate: "2024-01-22",
          isTrailer: false,
        }
      ]
    },
  ];

  const filteredCategories = videoCategories.map(category => ({
    ...category,
    videos: showTrailersOnly 
      ? category.videos.filter(video => video.isTrailer)
      : category.videos
  }));

  const toggleLike = (videoId: string) => {
    const newLikedVideos = new Set(likedVideos);
    if (newLikedVideos.has(videoId)) {
      newLikedVideos.delete(videoId);
    } else {
      newLikedVideos.add(videoId);
    }
    setLikedVideos(newLikedVideos);
  };

  const openVideo = (video: NGOVideo) => {
    setSelectedVideo(video);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideo();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="h-screen bg-black overflow-auto">
      {/* Header */}
      <header className="px-8 py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-6xl font-[playfair] mb-4 text-white text-center">
            Stories in motion
          </h1>
          <p className="text-gray-300 text-2xl text-center mb-8 font-[muli]">Our video collection, Stories of Motion, captures powerful moments of change and movement — highlighting real lives, journeys, and actions that inspire impact. Through these stories, we aim to spark awareness, empathy, and positive social change.</p>
          
          {/* Filter Toggle */}
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setShowTrailersOnly(!showTrailersOnly)}
              className={`px-8 py-4 rounded-2xl transition-all font-semibold backdrop-blur-sm border-2 text-lg ${
                showTrailersOnly 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl shadow-green-500/25 border-green-400' 
                  : 'bg-gray-800/50 text-gray-200 border-gray-600 hover:bg-gray-700/50 shadow-xl'
              }`}
            >
              {showTrailersOnly ? '🎬 Showing Trailers Only' : '📺 Show All Videos'}
            </button>
            <span className="text-lg text-gray-300 bg-gray-800/50 px-6 py-3 rounded-full border-2 border-gray-600 backdrop-blur-sm">
              {filteredCategories.flatMap(c => c.videos).length} videos available
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-full mx-auto p-8">
        {filteredCategories.map((category) => (
          <section key={category.name} className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-3 h-16 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
                <h2 className="text-4xl font-bold text-white">{category.name}</h2>
              </div>
              <span className="text-lg text-gray-400 bg-gray-800/50 px-6 py-3 rounded-full border-2 border-gray-600">
                {category.videos.length} videos
              </span>
            </div>
            
            {/* 5-column Grid Layout with larger cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8">
              {category.videos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  onPlay={() => openVideo(video)}
                  isLiked={likedVideos.has(video.id)}
                  onLike={() => toggleLike(video.id)}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex items-start justify-center min-h-screen p-4">
            <div 
              ref={videoRef}
              className="relative w-full max-w-5xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-600 mt-8 mb-8"
            >
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute top-6 right-6 z-10 bg-gray-800/80 rounded-full p-4 hover:bg-gray-700/80 transition-all text-white backdrop-blur-sm border-2 border-gray-600"
              >
                <X size={24} />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-black relative">
                <ReactPlayer
                  src={selectedVideo.videoUrl}
                  playing={isPlaying}
                  controls
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                    }
                  }}
                />
              </div>
              

              {/* Video Info */}
              <div className="p-10 text-white">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <h3 className="text-4xl font-[playfair] mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center space-x-8 text-lg text-gray-300 mb-6">
                      <span className="flex items-center">
                        <Globe size={20} className="mr-3 text-green-400" />
                        {selectedVideo.ngoName}
                      </span>
                      <span className="flex items-center">
                        <Clock size={20} className="mr-3 text-blue-400" />
                        {selectedVideo.duration}
                      </span>
                      {selectedVideo.isTrailer && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          🎬 Trailer
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-xl">{selectedVideo.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {selectedVideo.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700/50 text-green-400 px-5 py-3 rounded-full text-base font-medium border-2 border-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6 pt-6 border-t-2 border-gray-700">
                  <button 
                    onClick={() => toggleLike(selectedVideo.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all text-lg ${
                      likedVideos.has(selectedVideo.id) 
                        ? 'bg-red-500/20 text-red-400 border-2 border-red-500/30' 
                        : 'bg-gray-700/50 text-gray-300 border-2 border-gray-600'
                    }`}
                  >
                    <Heart size={22} fill={likedVideos.has(selectedVideo.id) ? "currentColor" : "none"} />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-3 px-6 py-3 rounded-xl bg-gray-700/50 text-gray-300 border-2 border-gray-600 transition-all hover:bg-gray-600/50 text-lg">
                    <Share2 size={22} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Video Card Component with larger dimensions
interface VideoCardProps {
  video: NGOVideo & { views?: string; rating?: number };
  onPlay: () => void;
  isLiked: boolean;
  onLike: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay, isLiked, onLike }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-gray-700 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minWidth: '280px' }}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-700" onClick={onPlay}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-6 transform transition-transform hover:scale-110 shadow-3xl">
            <Play size={32} fill="white" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 right-4 flex flex-col space-y-3">
          <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
            {video.duration}
          </div>
          {video.isTrailer && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              🎬 Trailer
            </div>
          )}
        </div>

        {/* Hover Effect */}
        {isHovered && (
          <div className="absolute inset-0 border-4 border-green-400/50 rounded-2xl opacity-60 transition-all pointer-events-none" />
        )}
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-[playfair] text-white text-xl leading-tight line-clamp-2 flex-1 mr-3">{video.title}</h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            className="flex-shrink-0 text-gray-400 hover:text-red-400 transition-colors mt-1"
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
        </div>
        
        <p className="text-gray-400 font-[muli] text-base mb-4 line-clamp-3 leading-relaxed">{video.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center font-medium text-gray-300">
            <Users size={14} className="mr-2" />
            {video.ngoName}
          </span>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Star size={14} className="mr-1 text-yellow-400" />
              {video.rating}
            </span>
            <span className="bg-gray-700/50 px-3 py-1 rounded-lg">{video.views}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">{new Date(video.uploadDate).toLocaleDateString()}</span>
          <div className="flex space-x-2">
            {video.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-gray-700/50 text-green-400 px-3 py-1 rounded-lg text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
      )}
    </div>
  );
};

export default VideosCollection;