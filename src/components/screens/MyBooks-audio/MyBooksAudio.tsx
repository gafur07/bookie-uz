import { FC, useEffect, useRef, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { BkNoPhoto } from "@/assets/images";
import { useGetMyBooksQuery } from "@/services";
import { AudioPlayer } from "./AudioPlayer";
import { MyBookAudioBookInfo } from "./audio-info/MyBookAudioInfo";
import { MyBookAudioSelect } from "./audio-select/MyBookAudiSelect";
import { Container } from "@/components/shared";

const MyBooksAudio: FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetMyBooksQuery();
  const [currentAudio, setCurrentAudio] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(-1);

  const myBook = data?.data.find((item) => item.slug == slug);

  const bookRef = useRef<HTMLDivElement>(null);
  console.log(myBook);

  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.scrollIntoView();
    }
  }, []);

  const clickAudio = (index: number) => {
    setSelectedAudio(index);
    myBook && setCurrentAudio(myBook.audios[index]?.audio_url);
  };

  const onPrev = () => {
    if (!myBook) return;
    if (selectedAudio < 1 || selectedAudio >= myBook.audios.length) return;
    if (!myBook.audios[selectedAudio - 1].audio_url) return;
    setSelectedAudio((index) => index - 1);
    setCurrentAudio("");
    setCurrentAudio(myBook?.audios[selectedAudio - 1]?.audio_url ?? "");
  };

  const onNext = () => {
    if (!myBook) return;
    if (selectedAudio < 1 || selectedAudio >= myBook.audios.length) return;
    if (!myBook.audios[selectedAudio + 1].audio_url) return;
    setSelectedAudio((index: number) => index + 1);
    setCurrentAudio("");
    setCurrentAudio(myBook?.audios[selectedAudio + 1]?.audio_url ?? "");
  };

  return (
    <div ref={bookRef} className="min-h-screen py-[60px]">
      <Spin spinning={isLoading}>
        <Container>
          <div
            className="grid mb-[30px] gap-10 grid-cols-30-70
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
              src={myBook?.image[0] ? myBook.image[0].image_url : BkNoPhoto}
              alt="image"
            />
            <MyBookAudioBookInfo data={myBook} />
          </div>
          <div className="flex items-center gap-[5%] max-[1220px]:flex-wrap max-[1220px]:gap-y-[30px]">
            {myBook && (
              <MyBookAudioSelect
                clickAudio={clickAudio}
                data={myBook}
                selectedAudio={selectedAudio}
              />
            )}
            <AudioPlayer
              currentAudio={currentAudio}
              onNext={onNext}
              onPrev={onPrev}
            />
          </div>
        </Container>
      </Spin>
    </div>
  );
};

export { MyBooksAudio };
