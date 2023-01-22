
import { Container } from "../Styles/EntreviewsSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import img1 from "../assets/img/entreviews/elfutbolverdadero.png";
import img2 from "../assets/img/entreviews/futbolbcnnetEntrevista.png";
import img3 from "../assets/img/entreviews/pilaradiario.png";




const EntreviewsSlide = () => {
  return (
    <>
         
      <Container>
        
          <h2>Entreviews</h2>
         
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.elfutbolverdadero.com/futbolverdadero-entrevista-a-cristian-micale-el-futbol-es-un-juego-y-el-elemento-fundamental-es-la-pelota/"
            >
              <img src={img1} alt="futbol" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pilaradiario.com/laliga/2021/5/26/un-pilarense-suena-con-dirigir-en-espana-111166.html"
            >
              <img src={img2} alt="futbol" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.futbolbcn.net/entrevista-cristian-y-maira-queremos-estar-donde-los-mejores/"
            >
              <img src={img3} alt="futbol" />
            </a>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};
export default EntreviewsSlide;
