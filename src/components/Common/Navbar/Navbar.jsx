import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import UserSetion from "./UserSetion";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles["navbar"]}>
			<Logo />
			<MenuLinks />
			<UserSetion />
		</nav>
	);
};

export default Navbar;
