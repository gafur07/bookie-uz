import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./audio.book.module.scss";
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
  const { data, refetch, isLoading } = useGetBookBySlug({ slug: `${slug}` })
  const { token } = useAppSelector((store) => store.auth);
  const [currentAudio, setCurrentAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(-1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const UnlockBtn = () => {
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
    <div className="flex gap-[10px]">
      <div>Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń.</div>
      <button className="flex items-center gap-[5px]" onClick={UnlockBtn}>
        <img src={BkUnlock} alt="unlock" /> Satıp alıw
      </button>
    </div>
  );

  return (
    <Spin spinning={isLoading}>
      <div className={styles.book}>
        <div className={styles.text}>
          <img className='object-cover' src={data?.image[0] ? data.image[0].image_url : BkNoPhoto} alt="image" />
          <div className={styles.desc}>
            <h1 className="first-letter:uppercase">{data?.title}</h1>
            <h4>{data?.author[0].name}</h4>
            <p>{data?.description}</p>
            <div className={styles.genres}>
              {data?.genre?.map((item: IGenre, i: number) => (
                <span key={item.slug} style={{ backgroundColor: colors[i] }}>
                  {item.name}
                </span>
              )) ?? ""}
            </div>
            <div className={styles.narrator}>
              Oqıǵan: <span>{data?.narrator[0].name}</span>
            </div>
          </div>
        </div>
        <div className={styles.audio}>
          <div className={styles.chapters}>
            <h4>Sóz bası</h4>
            <div className={styles.chapter_wrapper}>
              {data?.audios?.map((el, index) => {
                return el.audio_url && el.audio_url.includes("http") ? (
                  <button onClick={() => clickAudio(index)} key={index}>
                    <div>{Romanize(index + 1)} bólim</div>
                    {index === selectedAudio && <img src={BkWave} alt="wave" />}
                  </button>
                ) : (
                  <Popover content={content}>
                    <button className="opacity-70" disabled key={index}>
                      {Romanize(index + 1)} bólim
                      <img className={styles.lock} src={BkLock} alt="lock" />
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
