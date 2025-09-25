export interface NGOVideo {
    id: string;
    title: string;
    description: string;
    ngoName: string;
    videoUrl: string;
    thumbnail: string;
    duration: string;
    category: string;
    tags: string[];
    uploadDate: string;
    isTrailer?: boolean;
  }
  
  export interface VideoCategory {
    name: string;
    videos: NGOVideo[];
  }