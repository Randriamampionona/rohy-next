import { FaUserCircle } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const UserSetion = () => {
	return (
		<div className={styles["navbar__user-section"]}>
			<button id="CTA-btn-one">
				<span>S&apos; inscrir</span>
				<FaUserCircle />
			</button>
		</div>
	);
};

export default UserSetion;
