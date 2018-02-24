import { CSSTransition } from 'react-transition-group';

import ContentHeader from './ContentHeader/contentHeader';
import FilterBar from './FilterBar/filterBar';

class HomeContent extends React.Component {
	state = {
		showFilterBar: false
	};

	handleFilterBarToggle = () => {
		this.setState(prevState => {
			return { showFilterBar: !prevState.showFilterBar };
		});
	};

	render() {
		return (
			<div style={{ marginTop: '15px' }}>
				<ContentHeader toggleFilter={this.handleFilterBarToggle} />
				<CSSTransition
					in={this.state.showFilterBar}
					timeout={1000}
					classNames="slide-filter"
				>
					<div style={{zIndex: '-99', overflow: 'hidden'}}>
						<FilterBar />
					</div>
				</CSSTransition>
        {/* <ItemsFeed /> */}
        
        
				<style jsx>{`
					.slide-filter-enter {
						opacity: 0;
						transition: all 1s ease-in;
					}
					.slide-filter-enter-active {
						opacity: 1;
					}
					.slide-filter-exit {
						opacity: 1;
					}
					.slide-filter-exit-active {
            opacity: 0;
						transition: all 1s ease-in;
					}
				`}</style>
			</div>
		);
	}
}

export default HomeContent;
