import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';

import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeContent from '../components/HomeContent/HomeContent';
import withAuth from '../hoc/withAuth';

class HomePage extends React.Component {

	render() {
		return (
			<Layout>
				<HomeHeader />
        <HomeContent />
			</Layout>
		);
	}
}

export default withRedux(makeStore, null)(HomePage);