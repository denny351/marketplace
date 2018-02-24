import React from 'react';
import { InputNumber, Input , Select, Row, Col } from 'antd';
const Option = Select.Option;

class filterBar extends React.Component {
	state = {
		highestPrice: 50,
		lowestPrice: 1,
		category: [],
		brand: [],
		location: []
	};

	handlePriceChange = (event, name) => {
    if(name === 'highestPrice' && event.target.value < this.state.lowestPrice){
      this.setState({[name]: this.state.lowestPrice})
      event.target.value = this.state.lowestPrice;
    } else {
      this.setState({ [name]: Number(event.target.value) });
    }
	};

	handleSelectChange = (value, name) => {
		this.setState({
			[name]: value
		});
  };

	render() {
		return (
			<div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '15px'}}>
				<Row style={{lineHeight:2.5, marginBottom: '5px'}}>
					<Col span={12}>
						<div>
							<strong>Price:</strong> Lowest{' '}
							<Input
								min={1}
								size="small"
								prefix="$"
                defaultValue={this.state.lowestPrice}
								onBlur={e => this.handlePriceChange(e, 'lowestPrice')}
								style={{ width: '100px'}}
							/>{' '}
							- Highest{' '}
							<Input
								min={1}
								size="small"
								prefix="$"
                defaultValue={this.state.highestPrice}
								onBlur={e => this.handlePriceChange(e, 'highestPrice')}
								style={{ width: '100px'}}
							/>{' '}
						</div>
					</Col>
					<Col span={12}>
            <strong>Location: </strong>
						<Select
							mode="multiple"
							style={{ width: '82.5%' }}
							placeholder="Please select location"
							onChange={(e) => this.handleSelectChange(e, 'location')}
						>
							<Option value="canada">Canada</Option>
							<Option value="usa">USA</Option>
							<Option value="europe">Europe</Option>
							<Option value="asia">Asia</Option>
						</Select>
					</Col>
				</Row>
				<Row style={{marginBottom: '8px'}}>
          <Col>
          <strong>Categories:</strong>{' '}
          </Col>
          <Col>
					<Select
						mode="multiple"
						style={{ width: '100%' }}
						placeholder="Search or select your categories"
						onChange={(e) => this.handleSelectChange(e, 'category')}
					>
						<Option value="category1">category1</Option>
						<Option value="category2">category2</Option>
						<Option value="category3">category3</Option>
					</Select>
          </Col>
				</Row>
				<Row>
          <Col>
          <strong>Brands:</strong>{' '}
          </Col>
          <Col>
					<Select
						mode="multiple"
						style={{ width: '100%' }}
						placeholder="Search or select your brands"
						onChange={(e) => this.handleSelectChange(e, 'brand')}
					>
						<Option value="brand1">brand1</Option>
						<Option value="brand2">brand2</Option>
						<Option value="brand3">brand3</Option>
					</Select>
          </Col>
				</Row>
			</div>
		);
	}
}

export default filterBar;
