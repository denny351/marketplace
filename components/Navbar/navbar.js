import NavbarItems from './navbarItems';
import Link from 'next/link';

import { Icon } from 'antd';

const Navbar = () => {
	return <header>
			<Link href="/">
				<a>
					<Icon type="shop" className="logo" />
          {'  '}Marketplace
				</a>
			</Link>
			<NavbarItems />

			<style jsx>{`
				header {
					height: 56px;
					width: 100%;
					position: fixed;
					top: 0;
					left: 0;
					background-color: white;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 20px;
					box-sizing: border-box;
					z-index: 90;
				}
				a {
          font-size: 40px;
				}`}</style>
		</header>;
};

export default Navbar;
