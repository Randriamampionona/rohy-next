import { Heads, Navbar, ScrollToTop } from "./../Common";

const Layout = ({ children }) => {
	return (
		<>
			<Heads />
			<Navbar />
			<ScrollToTop />
			{children}
		</>
	);
};

export default Layout;
