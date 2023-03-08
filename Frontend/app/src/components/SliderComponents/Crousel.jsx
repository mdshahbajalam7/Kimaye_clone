import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay} from "swiper";
export default function Crousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:'550px',zIndex:'1'}}
        >
        <SwiperSlide><img src="https://scontent.fbom34-1.fna.fbcdn.net/v/t39.30808-6/310438566_476537977829985_7366352091471726010_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=P1Sf4776MDsAX_2V6H0&_nc_ht=scontent.fbom34-1.fna&oh=00_AfDxSxOPCh_S3CS8h33cczuhK5j883bSiBaLz_b714i6Wg&oe=640CE2B0" alt="crouselimages" width="100%"/></SwiperSlide>
        <SwiperSlide><img src="https://iadsb.tmgrup.com.tr/fc38dd/0/0/0/0/1100/735?u=https://idsb.tmgrup.com.tr/2017/10/29/fig-one-fruit-to-rule-them-all-1509298741501.jpg" alt="crouselimages" height="300px"  width="100%" /></SwiperSlide>
        <SwiperSlide><img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_272/http://www.dietitianshubhra.com/wp-content/uploads/2020/04/Best-Diet-Plan-For-Jaundice.jpg" alt="crouselimages" height="300px"  width="100%"/></SwiperSlide>
        <SwiperSlide><img src="https://pbs.twimg.com/media/CxO7Ti1VIAMu7Gv?format=jpg&name=medium"  alt="crouselimages" height="300px"  width="100%"/></SwiperSlide>
        
      </Swiper>
    </>
  );
}
