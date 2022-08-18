/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./Intro.module.scss";

const Intro = ({ swiperData }) => {
	return (
		<div className={styles["intro"]}>
			<Swiper
				slidesPerView={1}
				modules={[Pagination, Autoplay, EffectCoverflow]}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				effect="coverflow"
				className={styles["intro__swiper"]}>
				{swiperData.map((slider) => (
					<SwiperSlide
						key={slider}
						className={styles["intro__swiper__swiper-slide"]}>
						<img
							className={
								styles[
									"intro__swiper__swiper-slide__slider-item"
								]
							}
							src={slider}
							alt={slider}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

Intro.defaultProps = {
	swiperData: ["/assets/slider1.jpeg", "/assets/slider2.jpeg"],
};

export default Intro;
