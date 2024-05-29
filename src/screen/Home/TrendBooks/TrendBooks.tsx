import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"

const TrendBooks = () => {
  return (
    <>
      <section className="last-book py-[40px]">
        <div className="container">
          <h2 className="mb-[30px] text-[#202020] text-[32px] font-bold">
          Trendtegi kitaplar
          </h2>

          <Swiper 
            breakpoints={{
                1300: {
                  width: 1300,
                  slidesPerView: 4,
                  spaceBetween: 100
                },
                1285: {
                    width: 1285,
                    slidesPerView: 3,
                    spaceBetween: -80
                },
                1050: {
                    width: 1050,
                    slidesPerView: 2,
                    spaceBetween: -80
                },
                600: {
                    width: 600,
                    slidesPerView: 1,
                    spaceBetween: 30
                },
              }}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-card">
                <div className="book-card-img">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <div className="book-card-wrapper">
                  <div className="card-title">
                    <h3>Tawlar qulaǵan máhál</h3>
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="card-buttons">
                    <div className="card-vision">
                      <i className="bx bx-show-alt"></i>
                      <p>777</p>
                    </div>
                    <button className="card-button-listening">Tıńlaw</button>
                    <button className="card-korzina">
                      <i className="bx bxs-cart-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TrendBooks;
