import React, { useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

function CategoryItem() {
  const waveformRef = useRef(null);

  React.useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ddd',
      progressColor: '#4CAF50',
      responsive: true,
      height: 50,
    });

    wavesurfer.load('path-to-audio-file.mp3'); // Replace with your audio file

    return () => wavesurfer.destroy();
  }, []);

  return (
    <div className="w-full h-20 mb-4 p-2 rounded-lg">
      <hr className="opacity-30 " />
      <div className="h-1/3 text-zinc-400 mt-2">Hitting A tree</div>
      <div className="flex justify-evenly gap-2 mt-2 ">
        {/* Audio Graph */}
        <div className="h-10 w-2/3 bg-zinc-950 rounded-md" ref={waveformRef}></div>

        {/* Play Button with SVG */}
        <div
          className="h-10 w-1/6 bg-zinc-950 opacity-50 p-1 flex justify-center items-center rounded-md cursor-pointer"
          onClick={() => {
            const wavesurfer = WaveSurfer.create({
              container: waveformRef.current,
            });
            wavesurfer.playPause();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-7.166-4.065A1 1 0 006 8.065v7.87a1 1 0 001.586.832l7.166-4.066a1 1 0 000-1.664z"
            />
          </svg>
        </div>
        <div
          className="h-10 w-1/6 bg-gray-950 opacity-60 p-1 flex justify-center items-center rounded-md cursor-pointer"
          onClick={() => {
            const link = document.createElement('a');
            link.href = 'path-to-audio-file.mp3'; // Replace with your audio file
            link.download = 'audio-file.mp3'; // Replace with your desired file name
            link.click();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4 4m0 0l4-4m-4 4V4m8 4h4m-4 4h4m-4 4h4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
