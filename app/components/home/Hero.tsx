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
    <div className="pt-3 mb-[7.5rem]">
      <div className="bg-slate-500 lg:rounded-[3rem] h-full max-lg:min-h-phone relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full max-lg:object-cover max-lg:min-h-phone"
          loop
        >
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="p-4 absolute bottom-0 w-full max-lg:min-h-80 max-lg:flex max-lg:flex-col max-lg:gap-4">
          {/* Custom Play/Pause Button */}
          <div className=" lg:absolute right-[3rem] bottom-[2rem] flex gap-5 items-center text-white max-lg:self-end">
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
    </div>
  );
};

export default Hero;
