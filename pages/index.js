import Layout from '../components/Layout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import HomeContent from '../components/HomeContent/HomeContent';

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

export default HomePage;
