"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";
import WelcomeNote from "./WelcomeNote";
import { PiSpeakerSimpleNone, PiSpeakerSimpleSlash } from "react-icons/pi";

const Hero = () => {
  const [videoController, setVideoController] = useState<boolean>(true);
  const [videoMute, setVideoMute] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay video on page load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;

      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error);
        setVideoController(true);
      });
    }
  }, []);

  const handleVideoController = () => {
    if (videoRef.current) {
      if (videoController) {
        videoRef.current.pause();
        setVideoController(false);
      } else {
        videoRef.current.play();
        setVideoController(true);
      }
    }
  };

  const handleVideoMute = () => {
    if (videoRef.current) {
      if (videoMute) {
        videoRef.current.muted = false;
        setVideoMute(false);
      } else {
        videoRef.current.muted = true;
        setVideoMute(true);
      }
    }
  };

  return (
    <div className="px-6">
      <div className="bg-slate-500 rounded-lg sm:rounded-[3rem] h-full relative group overflow-hidden container mx-auto">
        <video ref={videoRef} className="w-full" loop>
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Custom Play/Pause Button */}
        <div className=" absolute right-[3rem] bottom-[2rem] flex gap-5 items-center text-white">
          <div
            onClick={handleVideoController}
            className="flex justify-center items-center cursor-pointer w-fit h-fit"
          >
            {videoController ? <LuPause size={30} /> : <LuPlay size={30} />}
          </div>
          <div
            onClick={handleVideoMute}
            className="flex justify-center items-center cursor-pointer w-fit h-fit"
          >
            {videoMute ? (
              <PiSpeakerSimpleNone size={30} />
            ) : (
              <PiSpeakerSimpleSlash size={30} />
            )}
          </div>
        </div>

        <WelcomeNote />
      </div>
    </div>
  );
};

export default Hero;
