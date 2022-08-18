import Link from "next/link";
import styles from "./Navbar.module.scss";

const MenuLinks = ({ links }) => {
	return (
		<ul className={styles["navbar__menu-links"]}>
			{links.map((link) => (
				<li key={link.slug}>
					<Link href={link.slug} passHref>
						<a>{link.text}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

MenuLinks.defaultProps = {
	links: [
		{ text: "Nos offres", slug: "/offers" },
		{ text: "Applications", slug: "/apps" },
		{ text: "Nous Contacter", slug: "/contact" },
	],
};

export default MenuLinks;
