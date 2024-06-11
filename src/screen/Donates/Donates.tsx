import { useGetDonates } from "@/services/donates/donates.api";
import no_photo from "@/images/no_photo.jpg";
import "./donates.scss";
import { Progress } from "antd";
const Donates = () => {
  const { data } = useGetDonates();
  console.log(data?.data);

  return (
    <div className="donates">
      <div className="donates_wrapper">
        {data?.data.map((item) => (
          <div className="donates_box" key={item.id}>
            <div className="donates_img">
              {item.book.image[0] ? (
                <img
                  className="object-cover h-[150px] w-[100px] rounded-md"
                  src={`https://test.booky.uz/storage/images/${item.book.image[0].file_name}`}
                  alt=""
                />
              ) : (
                <img
                  className="object-cover h-[150px] w-[100px] rounded-md"
                  src={no_photo}
                  alt=""
                />
              )}
              <h1>{item.book.title}</h1>
            </div>
            <div className="donates_price">
              <h4 className="text-[18px] font-semibold opacity-70">
                {item.deadline}
              </h4>
              <p className="primary-p">{item.price} som</p>
              <Progress type="circle" percent={30} size={40} />
              <button className="rounded-[16px] bg-[#2d71ae] text-wrap px-[24px] py-[6px] text-white flex items-center gap-[10px] hover:opacity-80 duration-200">
                <i className="bx bx-donate-heart bx-flashing"></i>
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Donates };
