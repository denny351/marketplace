import Link from 'next/link';

const navbarItems = props => {
	return <div>
			<ul>
				<li>
					<Link href="/post-item">
						<a>Post Item</a>
					</Link>
				</li>
				<li>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</li>
				<li>
					<Link href="/register">
						<a>Register</a>
					</Link>
				</li>
				<li>
					<Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
						<a>post #2</a>
					</Link>
				</li>
			</ul>

			<style jsx>{`
				ul {
					margin: 0;
					padding: 0;
					list-style: none;
					display: flex;
					align-items: center;
					height: 100%;
				}
				li {
					box-sizing: border-box;
					margin: 0;
					display: flex;
					height: 100%;
					width: auto;
					align-items: center;
					font-size: 20px;
				}
				a {
					color: black;
					height: 100%;
					width: 100%;
					box-sizing: border-box;
					display: block;
					padding: 12px 10px;
					transition: all 0.2s ease-in;
				}
				a:hover,
				a:active {
					background-color: #f0f0f0;
				}
				a:after {
					display: block;
					content: '';
					border-bottom: solid 3px #1890ff;
					transform: scaleX(0);
					transition: transform 0.2s ease-in-out;
				}
				a:hover:after {
					transform: scaleX(1);
				}`}</style>
		</div>;
};

export default navbarItems;
