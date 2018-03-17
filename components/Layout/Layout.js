import Head from 'next/head';
import Navbar from '../Navbar/navbar';

const Layout = ({ children }) => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				href="https://fonts.googleapis.com/css?family=Raleway:300,400,700"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://unpkg.com/antd@3/dist/antd.min.css"
			/>
		</Head>
		<style jsx global>{`
			body {
				font-family: 'Raleway', sans-serif;
			}
			a {
				text-decoration: none;
			}
		`}</style>

		<Navbar />
    <div style={{marginTop: '56px'}}>
		  {children}
    </div>
	</div>
);

export default Layout;