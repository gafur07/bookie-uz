import { FC } from "react";
import { TransformNumber } from "@/utils";
import { Popover } from "antd";
import { BkLock, BkUnlock, BkWave } from "@/assets/images";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addBuyBook, clearBuyBook } from "@/store/index.actions";
import { useNavigate } from "react-router-dom";
import { IBookSlug } from "@/services/index.interface";

interface AudioSelectProps {
  data: IBookSlug | undefined;
  clickAudio: (index: number) => void;
  selectedAudio: number;
}

const AudioSelect: FC<AudioSelectProps> = ({
  data,
  clickAudio,
  selectedAudio,
}) => {
  const { token } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const unlockBtn = () => {
    if (token) {
      dispatch(clearBuyBook());
      data && dispatch(addBuyBook(data));
      navigate("/payment");
    } else {
      navigate("/login", { replace: true });
    }
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
    <div className="w-[360px] bg-[#d7e7f8] flex flex-col gap-y-[32px] rounded-[16px] py-[16px] pr-[10px] pl-[34px] max-[600px]:w-full">
      <h4
        style={{
          fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)",
        }}
        className="font-medium leading-[130%] text-[#a1a1a1]"
      >
        Sóz bası
      </h4>
      <div className="flex flex-col relative gap-y-[32px] h-[250px] overflow-auto pr-[15px]">
        {data?.audios?.map((item, index) => {
          return item.audio_url && item.audio_url.includes("http") ? (
            <button
              className="bg-transparent cursor-pointer flex items-center justify-between"
              onClick={() => clickAudio(index)}
              key={index}
            >
              <div>{TransformNumber(index + 1)} bólim</div>
              {index === selectedAudio && <img src={BkWave} alt="wave" />}
            </button>
          ) : (
            <Popover content={content}>
              <button
                className="bg-transparent cursor-pointer flex items-center justify-between opacity-70"
                disabled
                key={index}
              >
                {TransformNumber(index + 1)} bólim
                <img src={BkLock} alt="lock" />
              </button>
            </Popover>
          );
        })}
      </div>
    </div>
  );
};

export { AudioSelect };
