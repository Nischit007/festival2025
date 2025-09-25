import React from 'react';

export const VideoSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-video bg-gray-700 rounded-lg mb-3"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
    </div>
  );
};