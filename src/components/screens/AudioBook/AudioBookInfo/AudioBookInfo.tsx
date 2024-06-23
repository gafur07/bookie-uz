import { FC } from "react";
import { IBookSlug, IGenre } from "@/services/index.interface";

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

interface AudioBookInfoProps {
  data: IBookSlug | undefined;
}

const AudioBookInfo: FC<AudioBookInfoProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-[30px]">
      <h1
        style={{ fontSize: "calc(36px + 12 * (100vw - 320px) / 1280)" }}
        className="first-letter:uppercase leading-[130%]"
      >
        {data?.title}
      </h1>
      <h4
        style={{ fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)" }}
        className="leading-[130%]"
      >
        {data?.author[0].name}
      </h4>
      <p
        style={{ fontSize: "calc(12px + 4 * (100vw - 320px) / 1280)" }}
        className="leading-[150%]"
      >
        {data?.description}
      </p>
      <div className="flex items-center flex-wrap gap-[8px]">
        {data?.genre?.map((item: IGenre, i: number) => (
          <span
            key={item.slug}
            className="py-[5px] px-[12px] rounded-[100px] 
                    text-white font-medium leading-[130%]"
            style={{
              backgroundColor: colors[i],
              fontSize: "calc(8px + 4 * (100vw - 320px) / 1280)",
            }}
          >
            {item.name}
          </span>
        )) ?? ""}
      </div>
      <div
        style={{ fontSize: "calc(16px + 4 * (100vw - 320px) / 1280)" }}
        className="font-semibold leading-[130%]"
      >
        Oqıǵan: <span className="font-normal">{data?.narrator[0].name}</span>
      </div>
    </div>
  );
};

export { AudioBookInfo };
