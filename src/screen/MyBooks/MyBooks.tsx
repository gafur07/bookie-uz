import { useAppSelector } from "@/hooks";
import { useGetMyBooks } from "@/services";
import { Image } from "@/services/index.interface";
import { Skeleton } from "@/shared";
import { useNavigate } from "react-router-dom";
import no_photo from "@/images/no_photo.jpg";

const MyBooks = () => {
  const { token } = useAppSelector((store) => store.auth);
  const { data, isLoading } = useGetMyBooks();
  const navigate = useNavigate();

  return (
    <>
      <section className="my-book w-full h-screen">
        <div className="container">
          {token ? (
            <>
              <h1 className="category-h1">Meniń kitaplarım</h1>
              {data?.length === 0 && (
                <h1 className="text-[1.5rem] font-bold">Sizde kitaplar joq</h1>
              )}
              <div className="my-[30px] flex gap-x-[20px] gap-y-[30px] flex-start flex-wrap">
                {isLoading ? (
                  [...Array(4)].map((_, i) => <Skeleton key={i} />)
                ) : (
                  <>
                    {data?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          navigate(`/book/${item?.slug}`, { replace: true });
                        }}
                        className="book-card"
                      >
                        <div className="book-card-img">
                          {item?.image?.map((el: Image) => (
                            <img
                              key={el.id}
                              src={`${el.image_url ? el.image_url : no_photo}`}
                              alt={el.file_name}
                            />
                          ))}
                        </div>
                        <div className="book-card-wrapper">
                          <div className="card-title">
                            <h3>{item?.title}</h3>
                          </div>
                          <div className="card-buttons">
                            <div className="card-vision">
                              <i className="bx bx-show-alt"></i>
                              <p>{item?.quantity}</p>
                            </div>
                            <button className="card-button-listening mx-auto">
                              Tıńlaw
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          ) : (
            <h1 className="flex items-center justify-center text-[2em] font-semibold h-[55vh]">
              Error 404. Page not found
            </h1>
          )}
        </div>
      </section>
    </>
  );
};

export { MyBooks };
