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
        className="first-letter:uppercase leading-[130%] text-5xl font-semibold"
      >
        {data?.title}
      </h1>
      <h4
        className="leading-[130%] text-lg"
      >
        {data?.author[0].name}
      </h4>
      <p
        className="leading-[150%] text-sm"
      >
        {data?.description}
      </p>
      <div className="flex items-center flex-wrap gap-[8px]">
        {data?.genre?.map((item: IGenre, i: number) => (
          <span
            key={item.slug}
            className="py-[5px] px-[12px] rounded-[100px] 
                    text-white font-medium leading-[130%] text-xs"
            style={{
              backgroundColor: colors[i],
            }}
          >
            {item.name}
          </span>
        )) ?? ""}
      </div>
      <div
        className="font-semibold leading-[130%] text-lg"
      >
        Oqıǵan: <span className="font-normal">{data?.narrator[0].name}</span>
      </div>
    </div>
  );
};

export { AudioBookInfo };
