import { Card, Col, Row } from 'antd';
const { Meta } = Card;

class ItemsFeed extends React.Component {
	render() {
		return (
			<div id="itemsFeedContainer">
				<Card
					hoverable={true}
					style={{ width: 240 }}
					cover={<img alt="example" src="/static/images/item1.jpg" />}
				>
					<Meta
						title="Example Product1"
						description="Awesome snowboard, Brand New"
					>
						<p>$4</p>
					</Meta>
				</Card>

				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src="/static/images/item1.jpg" />}
				>
					<Meta
						title="Example Product2"
						description="Awesome snowboard, Brand New"
					>
						<p>$4</p>
					</Meta>
				</Card>
				<Card
					hoverable={true}
					style={{ width: 240 }}
					cover={<img alt="example" src="/static/images/item1.jpg" />}
				>
					<Meta
						title="Example Product3"
						description="Awesome snowboard, Brand New"
					>
						<p>$4</p>
					</Meta>
				</Card>
				<Card
					hoverable={true}
					style={{ width: 240 }}
					cover={<img alt="example" src="/static/images/item1.jpg" />}
				>
					<Meta
						title="Example Product4"
						description="Awesome snowboard, Brand New"
					>
						<p>$4</p>
					</Meta>
				</Card>

				<style jsx>{`
					#itemsFeedContainer {
						margin: 40px;
						display: flex;
						flexdirection: row;
						justify-content: space-around;
						flex-wrap: wrap;
					}
					:global(div.ant-card-cover > img) {
						object-fit: cover;
						height: 300px;
					}
				`}</style>
			</div>
		);
	}
}

export default ItemsFeed;
