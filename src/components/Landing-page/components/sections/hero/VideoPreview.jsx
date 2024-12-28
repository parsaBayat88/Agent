// // import React from 'react';
// // import { Play } from 'lucide-react';

// // export function VideoPreview() {
// //   return (
// //     <div className="relative w-full max-w-[800px] mx-auto mt-2 mb-16">
// //       <div className="bg-black/40 backdrop-blur-sm h-[400px] rounded-2xl flex justify-center items-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
// //         <div className="absolute inset-0 bg-gradient-to-br from-[#8200fb]/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //         <div className="bg-white/10 backdrop-blur-sm h-20 w-20 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform duration-300">
// //           <Play className="h-8 w-8 text-white ml-1" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useRef } from 'react';
// import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
// import demo from "./1224.mp4"
// import poster from "./poster.png"
// const VideoPreview = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState(false);
//   const videoRef = useRef(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setProgress(progress);
//     }
//   };

//   const handleProgressClick = (e) => {
//     if (videoRef.current) {
//       const progressBar = e.currentTarget;
//       const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//       videoRef.current.currentTime = clickPosition * videoRef.current.duration;
//     }
//   };

//   const handleError = () => {
//     setError(true);
//     setIsPlaying(false);
//   };

//   return (
//     <div className="relative w-full max-w-[800px] mx-auto mt-2 mb-16">
//       <div className="relative bg-black/40 rounded-2xl overflow-hidden">
//         {error ? (
//           <div className="w-full h-[400px] flex items-center justify-center text-white">
//             Error loading video. Please check the video URL.
//           </div>
//         ) : (
//           <video
//             ref={videoRef}
//             className="w-full h-[400px] object-cover"
//             onTimeUpdate={handleTimeUpdate}
//             onError={handleError}
//             src={demo}
//             poster={poster}
//             controlsList="nodownload nofullscreen"
//           >
//             Your browser does not support the video tag.
//           </video>
//         )}
        
//         <div className="absolute bottom-0 left-0 right-0  p-4">
//           <div 
//             className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer"
//             onClick={handleProgressClick}
//           >
//             <div 
//               className="h-full bg-purple-600 rounded-full"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
          
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={togglePlay}
//               className="p-2 hover:bg-white/10 rounded-full transition-colors"
//               disabled={error}
//             >
//               {isPlaying ? (
//                 <Pause className="h-6 w-6 text-white" />
//               ) : (
//                 <Play className="h-6 w-6 text-white ml-1" />
//               )}
//             </button>
            
//             <button 
//               onClick={toggleMute}
//               className="p-2 hover:bg-white/10 rounded-full transition-colors"
//               disabled={error}
//             >
//               {isMuted ? (
//                 <VolumeX className="h-6 w-6 text-white" />
//               ) : (
//                 <Volume2 className="h-6 w-6 text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPreview;

import React, { useEffect } from 'react';

const VideoPreview = () => {
  useEffect(() => {
    // Append the Wistia script dynamically
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.body.appendChild(playerScript);

    const moduleScript = document.createElement('script');
    moduleScript.src = 'https://fast.wistia.com/embed/r0pma69zca.js';
    moduleScript.async = true;
    moduleScript.type = 'module';
    document.body.appendChild(moduleScript);

    // Clean up the scripts on component unmount
    return () => {
      document.body.removeChild(playerScript);
      document.body.removeChild(moduleScript);
    };
  }, []);

  return (
    <>
      <style>{`
        wistia-player[media-id='r0pma69zca']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/r0pma69zca/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player media-id="r0pma69zca"></wistia-player>
    </>
  );
};

export default VideoPreview;
