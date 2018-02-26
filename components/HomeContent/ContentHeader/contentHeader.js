import { Input, Button, Select } from 'antd';
const Search = Input.Search;
const Option = Select.Option;

const contentHeader = props => {
	function handleChange(value) {
		console.log(`selected ${value}`);
  }
  


	return (
		<div className="headerContainer">
			<h2>Browse Items</h2>
			<div className="headerBar">
				<Button icon="filter" onClick={props.toggleFilter}>
          {props.showFilterBar 
            ? 'Hide Filters'
            : 'Show Filters'
          }
				</Button>
				<Search
					id="search"
					placeholder="Search for a category or brand"
					onSearch={value => console.log(value)}
					style={{ width: '65%', paddingLeft: '90px' }}
				/>
				<div className="right">
					<Button
						icon="reload"
						onClick={this.enterIconLoading}
						style={{ marginRight: '2px' }}
					>
						Refresh
					</Button>
					<Select
						placeholder="Sort By"
						style={{ width: 120 }}
						onChange={handleChange}
					>
						<Option value="new">New</Option>
						<Option value="highest">Highest Price</Option>
						<Option value="lowest">Lowest Price</Option>
					</Select>
				</div>
			</div>

			<style jsx>{`
				.headerContainer {
					padding: 0 20px;
				}
				h2 {
					text-align: center;
				}
				.headerBar {
					display: flex;
					justify-content: space-between;
					white-space: nowrap;
				}
				#search {
					width: 60%;
					padding-left: 90px;
				}
			`}</style>
		</div>
	);
};

export default contentHeader;
