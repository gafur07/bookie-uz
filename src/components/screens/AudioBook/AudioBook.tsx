import { FC, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { BkNoPhoto } from "@/assets/images";
import { useGetBookBySlug } from "@/services";
import { AudioPlayer } from "./AudioPlayer";
import { AudioBookInfo } from "./AudioBookInfo/AudioBookInfo";
import { AudioSelect } from "./AudioSelect/AudioSelect";

const AudioBook: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetBookBySlug(slug);
  const [currentAudio, setCurrentAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(-1);

  const clickAudio = (index: number) => {
    setSelectedAudio(index);
    data && setCurrentAudio(data.audios[index]?.audio_url);
  };

  const onPrev = () => {
    setSelectedAudio((index: number) => index - 1);
    setCurrentAudio("");
    setCurrentAudio(data?.audios[selectedAudio - 1]?.audio_url ?? "");
  };

  const onNext = () => {
    setSelectedAudio((index: number) => index + 1);
    setCurrentAudio("");
    setCurrentAudio(data?.audios[selectedAudio + 1]?.audio_url ?? "");
  };

  return (
    <Spin spinning={isLoading}>
      <div className="w-full min-h-screen py-[60px] px-[5%]">
        <div
          className="grid mb-[30px] grid-cols-30-70
            max-[1400px]:grid-cols-40-60 
            max-[1400px]:gap-[30px] 
            max-[1000px]:grid-cols-[100%] 
            max-[850px]:gap-[40px] 
            max-[600px]:gap-[20px]"
        >
          <img
            className="object-cover w-[360px] 
          shadow-md rounded-[16px] 
          max-[1000px]:w-[80%] 
          max-[1000px]:mx-auto"
            src={data?.image[0] ? data.image[0].image_url : BkNoPhoto}
            alt="image"
          />
          <AudioBookInfo data={data} />
        </div>
        <div className="flex items-center gap-[5%] max-[1220px]:flex-wrap max-[1220px]:gap-y-[30px]">
          {data && (
            <AudioSelect
              clickAudio={clickAudio}
              data={data}
              selectedAudio={selectedAudio}
            />
          )}
          <AudioPlayer
            currentAudio={currentAudio}
            onNext={onNext}
            onPrev={onPrev}
          />
        </div>
      </div>
    </Spin>
  );
};

export { AudioBook };
