import styles from "./Prices.module.scss";

const Prices = () => {
	return (
		<div className={styles["prices"]}>
			<h1 className={styles["prices__heading"]}>
				Tout vos <br />
				<span>FILM, SERIES et DOCUMENTAIRES</span>
			</h1>

			<div className={styles["prices__amount"]}>
				<h2>POUR SEULEMENT</h2>
				<h1>19.000</h1>
				<span>AR/MOIS</span>
			</div>
		</div>
	);
};

export default Prices;
