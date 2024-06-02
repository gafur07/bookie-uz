import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./audio.book.module.scss";
import { store } from "@/store/store";
import { IGenre } from "@/store/index.interface";
import no_photo from "@/images/no_photo.jpg";
import wave from "@/images/wave.svg";
import lock from "@/images/lock.svg";
import unlock from "@/images/unlock.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookSlug } from "@/store/index.actions";
import { Romanize } from "./Romanize";
import { Popover } from "antd";
import { AudioPlayer } from "./AudioPlayer";

const AudioBook = () => {
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

  const { bookSlug, audios, genre, author, narrator, image } = useAppSelector(
    (store) => store.slug
  );
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getBookSlug({ slug: `${slug}` }));
  }, [slug]);

  const content = (
		<div className={styles.content}>
			<div>Qalǵan bólimlerdi esitiw ushın, kitaptı satıp alıń.</div>
			<button>
				<img src={unlock} alt='unlock' /> Satıp alıw
			</button>
		</div>
	)

  console.log(bookSlug);

  return (
    <div className={styles.book}>
      <div className="container">
          <div className={styles.text}>
              {/* {image?.[0]?.image_url ? (
                <img src={image[0].image_url} alt='book image' />
              ) : (
              )} */}
              <img src={no_photo} alt="book image" />
              <div className={styles.desc}>
                <h1 className="first-letter:uppercase">{bookSlug?.title}</h1>
                <h4>{author[0]?.name ?? ""}</h4>
                <p>{bookSlug?.description}</p>
                <div className={styles.genres}>
                  {genre.map((item: IGenre, i) => (
                    <span
                      key={item.slug}
                      style={{ backgroundColor: colors[i] }}
                    >
                      {item.name}
                    </span>
                  )) ?? ""}
                </div>
                <div className={styles.narrator}>
                  Oqıǵan: <span>{narrator[0]?.name}</span>
                </div>
              </div>
            </div>
            <div className={styles.audio}>
				<div className={styles.chapters}>
					<h4>Sóz bası</h4>
					<div className={styles.chapter_wrapper}>
						{audios.map((el, index) => {
							return el.audio_url && el.audio_url.includes('http') ? (
								<button key={index}>
									<div>{Romanize(index + 1)} bólim</div>
										<img src={wave} alt='wave' />
								</button>
							) : (
								<Popover content={content}>
									<button disabled key={index}>
										{Romanize(index + 1)} bólim
										<img className={styles.lock} src={lock} alt='lock' />
									</button>
								</Popover>
							)
						})}
					</div>
				</div>
				<AudioPlayer />
			</div>
      </div>
    </div>
  );
};

export { AudioBook };
