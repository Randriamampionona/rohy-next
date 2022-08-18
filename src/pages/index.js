import styles from "../styles/Home.module.scss";
import { Apps, Intro, Prices } from "../components/Home";

const HomePage = () => {
	return (
		<main className={styles["home-page-container"]}>
			<Intro />
			<Apps />
			<Prices />
		</main>
	);
};

export default HomePage;
