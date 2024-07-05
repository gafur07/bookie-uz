import { FC, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slider } from "antd";
import { HiPause } from "react-icons/hi";
import {
  BkCommentAudio,
  BkNextAudio,
  BkPlayAudio,
  BkPrevAudio,
} from "@/assets/images";
import { formatTime } from "@/utils";

interface AudioPlayerProps {
  currentAudio: string;
  onPrev: () => void;
  onNext: () => void;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ currentAudio, onNext, onPrev,}) => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const { slug } = useParams();
  const audio = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  const timeLineChange = (value: number) => {
    if (audio.current) {
      audio.current.currentTime = value;
    }
  };
  const volumeChange = (value: number) => {
    setVolume(value);
    if (audio.current) {
      audio.current.volume = value / 100;
    }
  };

  const playAudio = () => {
    if (audio.current && currentAudio) {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audio.current) {
      audio.current.pause();
      setIsPlaying(false);
    }
  };

  const clickBookInfo = () => navigate(`/book/${slug}`);
  
  const nextAudio = () => onNext();
  const prevAudio = () => onPrev();
  return (
    <div className="bg-[#d7e7f8] py-[30px] rounded-[16px] px-[40px] flex items-center justify-center w-full h-[166px] max-[820px]:p-[20px] max-[600px]:p-[10px">
      <div className="flex items-center flex-col w-[560px]">
        <div className="flex items-center justify-center gap-[36px] w-full">
          <img
            className="cursor-pointer"
            onClick={clickBookInfo}
            src={BkCommentAudio}
            alt="prev"
          />
          <img
            className="cursor-pointer"
            onClick={prevAudio}
            src={BkPrevAudio}
            alt="prev"
          />
          {isPlaying ? (
            <HiPause
              className="cursor-pointer text-[#2d71ae] text-[57.5px]"
              onClick={pauseAudio}
            />
          ) : (
            <img
              className="cursor-pointer"
              onClick={playAudio}
              src={BkPlayAudio}
              alt="play"
            />
          )}
          <img
            className="cursor-pointer"
            onClick={nextAudio}
            src={BkNextAudio}
            alt="next"
          />
        </div>
        <div className="flex flex-col w-full gap-y-[10px]">
          <div className="w-full flex items-center justify-between">
            <div className="text-[#2d71ae]">{formatTime(time)}</div>
            <div className="text-[#2d71ae]">
              {formatTime(audio?.current?.duration || 0)}
            </div>
          </div>
          <div>
            <Slider
              tooltip={{ open: false }}
              value={time}
              onChange={timeLineChange}
              max={audio.current?.duration}
            />
          </div>
        </div>
      </div>
      <div className="ml-[10%] h-[70px] max-[500px]:ml-0">
        <Slider vertical value={volume} onChange={volumeChange} />
      </div>
      <audio
        src={currentAudio}
        ref={audio}
        onTimeUpdate={() => setTime(audio.current?.currentTime || 0)}
        onEnded={pauseAudio}
      />
    </div>
  );
};

export { AudioPlayer };
