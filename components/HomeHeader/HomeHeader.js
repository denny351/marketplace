import Carousel from './Carousel/carousel';

const HomeHeader = () => {
	return <div id="header-box">
			<div className="big-box">
				<Carousel />
			</div>
			<div id="header-box-nested">
				<div className="small-box">
					<img src="/static/images/example1.jpg" alt="example1" />
				</div>
				<div className="small-box">
					<img src="/static/images/example2.jpg" alt="example2" />
				</div>
			</div>

			<style jsx>{`
				div#header-box {
					display: flex;
					justify-content: center;
					margin-top: 80px;
					padding: 0 50px;
				}
				div#header-box-nested {
					display: flex;
					flex-direction: column;
				}
				div.big-box {
					width: 700px;
					border: 2px solid white;
				}
				div.small-box {
					width: 300px;
					border: 2px solid white;
				}
				img {
					width: 100%;
					height: 100%;
				}
				* {
					box-sizing: border-box;
					min-height: 0;
					min-width: 0;
				}`}</style>
		</div>;
};

export default HomeHeader;
