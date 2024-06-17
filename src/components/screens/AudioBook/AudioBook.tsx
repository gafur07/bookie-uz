import { useAppDispatch, useAppSelector } from "@/hooks";
import { IGenre } from "@/services/index.interface";
// import { getBookSlug } from "@/store/index.actions";
import { Romanize } from "./Romanize";
import { Popover, Spin } from "antd";
import { AudioPlayer } from "./AudioPlayer";
import { useGetBookBySlug } from "@/services";
import { useNavigate, useParams } from "react-router-dom";
import { FC, useState } from "react";
import { addBuyBook, clearBuyBook } from "@/store/index.actions";
import { BkLock, BkNoPhoto, BkUnlock, BkWave } from "@/assets/images";

const colors = [
  "rgba(244, 103, 103, 0.70)",
  "rgba(254, 133, 95, 0.70)",
  "rgba(255, 106, 159, 0.70)",
  "rgba(101, 27, 147, 0.70)",
  "rgba(110, 68, 229, 0.70)",
  "rgba(133, 100, 227, 0.70)",
  "rgba(139, 117, 201, 0.70)",
  "rgba(22, 180, 132, 0.70)",
  "rgba(80, 151, 117, 0.70)",
  "rgba(69, 189, 110, 0.70)",
];

const AudioBook: FC = () => {

  const { slug } = useParams();
  const { data, refetch, isLoading } = useGetBookBySlug(slug)
  const { token } = useAppSelector((store) => store.auth);
  const [currentAudio, setCurrentAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(-1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const unlockBtn = () => {
    if (token) {
      dispatch(clearBuyBook());
      data && dispatch(addBuyBook(data));
      navigate("/payment", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  const clickAudio = (index: number) => {
    setSelectedAudio(index);
    data && setCurrentAudio(data.audios[index]?.audio_url);
  };

  const onPrev = () => {
    setSelectedAudio((index: number) => index - 1);
    setCurrentAudio("");
    setCurrentAudio(data?.audios[selectedAudio - 1]?.audio_url ?? "");
    refetch();
  };

  const onNext = () => {
    setSelectedAudio((index: number) => index + 1);
    setCurrentAudio("");
    setCurrentAudio(data?.audios[selectedAudio + 1]?.audio_url ?? "");
    refetch();
  };

  const content = (
    <div className="flex items-center gap-[10px]">
      <div>Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń.</div>
      <button className="flex items-center gap-[5px]" onClick={unlockBtn}>
        <img src={BkUnlock} alt="unlock" /> Satıp alıw
      </button>
    </div>
  );

  return (
    <Spin spinning={isLoading}>
      <div className='w-full min-h-screen py-[60px] px-[5%]'>
        <div 
          className='grid mb-[30px] grid-cols-30-70 
            max-[1400px]:grid-cols-40-60 
            max-[1400px]:gap-[30px] 
            max-[1000px]:grid-cols-[100%] 
            max-[850px]:gap-[40px] 
            max-[600px]:gap-[20px]'
            >
          <img 
            className='object-cover w-[360px] 
            shadow-md rounded-[16px] 
            max-[1000px]:w-[80%] 
            max-[1000px]:mx-auto' 
            src={data?.image[0] ? data.image[0].image_url : BkNoPhoto} alt="image" />
          <div className='flex flex-col gap-y-[30px]'>
            <h1 
              style={{fontSize: 'calc(36px + 12 * (100vw - 320px) / 1280)'}} 
              className="first-letter:uppercase leading-[130%]">
                {data?.title}
              </h1>
            <h4 
              style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}}
              className="leading-[130%]"
              >
                {data?.author[0].name}
              </h4>
            <p 
              style={{fontSize: 'calc(12px + 4 * (100vw - 320px) / 1280)'}} 
              className="leading-[150%]">
                {data?.description}
              </p>
            <div className='flex items-center flex-wrap gap-[8px]'>
              {data?.genre?.map((item: IGenre, i: number) => (
                <span 
                  key={item.slug} 
                  className="py-[5px] px-[12px] rounded-[100px] 
                    text-white font-medium leading-[130%]" 
                  style={{ 
                    backgroundColor: colors[i],
                    fontSize: 'calc(8px + 4 * (100vw - 320px) / 1280)'
                    }}
                    >
                  {item.name}
                </span>
              )) ?? ""}
            </div>
            <div 
              style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}}
              className='font-semibold leading-[130%]'>
              Oqıǵan: <span className="font-normal">{data?.narrator[0].name}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-[5%] max-[1220px]:flex-wrap max-[1220px]:gap-y-[30px]'>
          <div className='w-[360px] bg-[#d7e7f8] flex flex-col gap-y-[32px] rounded-[16px] py-[16px] pr-[10px] pl-[34px] max-[600px]:w-full'>
            <h4 style={{fontSize: 'calc(16px + 4 * (100vw - 320px) / 1280)'}} className="font-medium leading-[130%] text-[#a1a1a1]">Sóz bası</h4>
            <div className='flex flex-col relative gap-y-[32px] h-[250px] overflow-auto pr-[15px]'>
              {data?.audios?.map((el, index) => {
                return el.audio_url && el.audio_url.includes("http") ? (
                  <button className="bg-transparent cursor-pointer flex items-center justify-between" onClick={() => clickAudio(index)} key={index}>
                    <div>{Romanize(index + 1)} bólim</div>
                    {index === selectedAudio && <img src={BkWave} alt="wave" />}
                  </button>
                ) : (
                  <Popover content={content}>
                    <button className="bg-transparent cursor-pointer flex items-center justify-between opacity-70" disabled key={index}>
                      {Romanize(index + 1)} bólim
                      <img src={BkLock} alt="lock" />
                    </button>
                  </Popover>
                );
              })}
            </div>
          </div>
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
