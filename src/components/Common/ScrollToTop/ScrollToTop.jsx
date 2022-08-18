import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
	const [isLoad, setIsLoad] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setIsLoad(true);
	}, []);

	isLoad &&
		window.addEventListener("scroll", () => {
			window.scrollY >= 100 ? setShow(true) : setShow(false);
		});

	const scrollHandler = () =>
		isLoad &&
		document.body.scrollIntoView({ behavior: "smooth", block: "start" });

	return (
		<>
			{show && (
				<div
					className={styles["scroll-to-top"]}
					onClick={scrollHandler}>
					<FaArrowUp />
				</div>
			)}
		</>
	);
};

export default ScrollToTop;
