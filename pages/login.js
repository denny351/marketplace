import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';
import { loginUser } from '../store/actions/auth';

import Layout from '../components/Layout';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.loginUser(values);
			}
		});
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.auth.isAuth) {
			Router.push('/');
		}
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Layout>
				<div className="login-container">
					<h1 style={{ textAlign: 'center' }}>Log In</h1>
					<Form onSubmit={this.handleSubmit} layout="horizontal">
						<FormItem>
							{getFieldDecorator('email', {
								validateTrigger: 'onBlur',
								rules: [
									{
										type: 'email',
										message: 'Please enter a valid email!'
									},
									{
										required: true,
										message: 'Please enter your email!'
									}
								]
							})(
								<Input
									prefix={
										<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />
									}
									type="email"
									placeholder="Your Email"
								/>
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [
									{ required: true, message: 'Please enter your password' }
								]
							})(
								<Input
									prefix={
										<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />
									}
									type="password"
									placeholder="Password"
								/>
							)}
						</FormItem>
						<FormItem>
							{!this.props.auth.isAuth && (
								<p style={{ color: 'red', margin: 0 }}>
									{this.props.auth.message}
								</p>
							)}
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button">
								Log in
							</Button>
							<a href="">Forgot password</a>
							<a className="login-form-register" href="">
								register now!
							</a>
						</FormItem>
					</Form>
				</div>
				<style jsx global>{`
					.login-container {
						max-width: 450px;
						margin: 80px auto;
					}
					.login-form-register {
						float: right;
					}
					.login-form-button {
						width: 100%;
					}
				`}</style>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth.login
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loginUser: userdata => dispatch(loginUser(userdata))
	};
};

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(
	Form.create()(Login)
);
