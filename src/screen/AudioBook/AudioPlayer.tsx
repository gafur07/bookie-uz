import { Slider } from "antd";
import styles from "./audio.book.module.scss";
import comment from "@/images/comment.svg";
import prev from "@/images/prevaudio.svg";
import next from "@/images/nextaudio.svg";
import play from "@/images/playaudio.svg";
import { FC, useRef, useState } from "react";
import { HiPause } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

interface AudioPlayerProps {
  currentAudio: string;
  onPrev: () => void;
  onNext: () => void;
}

const AudioPlayer: FC<AudioPlayerProps> = ({
  currentAudio,
  onNext,
  onPrev,
}) => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const { slug } = useParams();
  const audio = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const timeLineChange = (value: number) => {
    if (audio.current) {
      audio.current.currentTime = value;
    }
  };
  const volumeChange = (value: number) => {
    setVolume(value);
    if (audio.current) {
      audio.current.currentTime = value;
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

  const nextAudio = () => onNext;
  const prevAudio = () => onPrev;
  const clickBookInfo = () => navigate(`/book/${slug}`, { replace: true });
  return (
    <div className={styles.player}>
      <div className={styles.controls}>
        <div className={styles.play}>
          <img onClick={clickBookInfo} src={comment} alt="prev" />
          <img onClick={prevAudio} src={prev} alt="prev" />
          {isPlaying ? (
            <HiPause onClick={pauseAudio} />
          ) : (
            <img onClick={playAudio} src={play} alt="play" />
          )}
          <img onClick={nextAudio} src={next} alt="next" />
        </div>
        <div className={styles.times}>
          <div className={styles.time}>
            <div>{formatTime(time)}</div>
            <div>{formatTime(audio?.current?.duration || 0)}</div>
          </div>
          <div className={styles.timeline}>
            <Slider
              tooltip={{ open: false }}
              value={time}
              onChange={timeLineChange}
              max={audio.current?.duration}
            />
          </div>
        </div>
      </div>
      <div className={styles.volume}>
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
