import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const Logo = () => {
	const router = useRouter();

	const clickHandler = () => router.push("/");

	return (
		<div className={styles["navbar__logo"]}>
			<Image
				className={styles["navbar__logo__img"]}
				title="www.rohy.mg"
				src="/assets/logo-with-rose-color.webp"
				alt="Rohy logo"
				loading="lazy"
				placeholder="blur"
				blurDataURL="/assets/logo-with-rose-color.webp"
				width={95}
				height={75}
				objectFit="contain"
				onClick={clickHandler}
			/>
		</div>
	);
};

export default Logo;
