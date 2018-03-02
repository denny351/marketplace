import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../store/actions/auth';

// import { Spin } from 'antd';

export default function(ComposedClass) {
	class AuthenticationCheck extends Component {
		state = {
			loading: true
		};

		componentWillMount = () => {
			this.props.dispatch(auth());
		};

		componentWillReceiveProps = nextProps => {
      console.log('here', this.state.loading)
			this.setState({ loading: false });
		};

		render() {
			if (this.state.loading) {
				return <div>LOADING</div>
			}
			return <ComposedClass {...this.props} user={this.props.user} />;
		}
	}

	function mapStateToProps(state) {
		return {
			user: state.auth.user
		};
	}

	return connect(mapStateToProps)(AuthenticationCheck);
}
