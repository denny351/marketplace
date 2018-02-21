import Link from 'next/link';
import Head from 'next/head';
export default ({ children }) => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link
				rel="stylesheet"
				href="https://unpkg.com/antd@3/dist/antd.min.css"
			/>
		</Head>
		<style jsx global>{`
			body {
			}
		`}</style>
		<div>
			<ul>
				<li>
					<Link href="/"><a>Home</a></Link>
				</li>
				<li>
					<Link href="/item"><a>item</a></Link>
				</li>
				<li>
					<Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
						<a>post #2</a>
					</Link>
				</li>
			</ul>
		</div>
		{children}
	</div>
);
