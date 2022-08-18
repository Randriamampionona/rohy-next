/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import styles from "./Apps.module.scss";

const Apps = () => {
	return (
		<div className={styles["apps"]}>
			<h1 className={styles["apps__heading"]}>
				Disponible sur tout support
			</h1>
			<p className={styles["apps__desc"]}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Reiciendis incidunt consequatur rerum placeat asperiores
				excepturi. Ad, voluptatum! Modi ab cum odit perspiciatis
				architecto, laudantium quam dolorum nemo velit hic eaque rerum
				maiores voluptatibus, labore quibusdam provident. Laborum dicta
				velit voluptates repellat totam aliquam unde mollitia tempore
				error quibusdam delectus voluptas obcaecati recusandae minima
				vero, cupiditate eaque earum sunt! Eligendi, quos! Ipsam magnam
				amet cupiditate. Nulla hic minima amet facere. Numquam autem
				consequatur maiores quae magnam!
			</p>

			<Image
				src="/assets/device.webp"
				alt="Device"
				width={"765px"}
				height={"391px"}
				loading="lazy"
				placeholder="blur"
				blurDataURL="/assets/logo-with-rose-color.webp"
				className={styles["apps__img"]}
			/>

			<button id="CTA-btn-one">
				<span>Telecharger</span>
				<FiDownload />
			</button>
		</div>
	);
};

export default Apps;
