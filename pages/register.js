import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';
import { registerUser, clearAuth } from '../store/actions/auth';

import Layout from '../components/Layout';

import {
	Form,
	Input,
	Tooltip,
	Icon,
	Select,
	Row,
	Col,
	Button,
	Upload
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends React.Component {
	state = {
		confirmDirty: false
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.registerUser(values);
			}
		});
	};

	handleConfirmBlur = e => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Password does not match');
		} else {
			callback();
		}
	};

	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	redirectUser = () => {
		setTimeout(() => {
			this.props.form.resetFields();
			this.props.clearAuth();
			Router.push('/login');
		}, 1200);
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};

		return (
			<Layout>
				<div className="register-container">
					<h1 style={{ textAlign: 'center' }}>Register</h1>
					<Form onSubmit={this.handleSubmit}>
						<FormItem {...formItemLayout} label="E-mail" hasFeedback>
							{getFieldDecorator('email', {
								validateTrigger: 'onBlur',
								rules: [
									{
										type: 'email',
										message: 'The input is not valid E-mail!'
									},
									{
										required: true,
										message: 'Please input your E-mail!'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Password" hasFeedback>
							{getFieldDecorator('password', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: 'Please input your password!'
									},
									{
										min: 6,
										message: 'Must be at least 6 characters'
									},
									{
										validator: this.checkConfirm
									}
								]
							})(<Input type="password" />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
							{getFieldDecorator('confirm', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: 'Please confirm your password!'
									},
									{
										validator: this.checkPassword
									}
								]
							})(<Input type="password" onBlur={this.handleConfirmBlur} />)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							hasFeedback
							label={
								<span>
									Username&nbsp;
									<Tooltip title="This will be displayed when you post or comment">
										<Icon type="question-circle-o" />
									</Tooltip>
								</span>
							}>
							{getFieldDecorator('username', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: 'Please enter a username',
										whitespace: true
									},
									{
										max: 25,
										message: 'Must be less than 25 characters'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Location" hasFeedback>
							{getFieldDecorator('location', {
								rules: [{ required: true, message: 'Please select a location' }]
							})(
								<Select placeholder="Please select your location">
									<Option value="canada">Canada</Option>
									<Option value="usa">USA</Option>
									<Option value="mexico">Mexico</Option>
									<Option value="europe">Europe</Option>
									<Option value="asia">Asia</Option>
									<Option value="southamerica">South America</Option>
								</Select>
							)}
						</FormItem>
						<FormItem {...formItemLayout} label="First Name" hasFeedback>
							{getFieldDecorator('firstname', {
								validateTrigger: 'onBlur',
								rules: [
									{
										max: 25,
										message: 'Must be less than 25 characters'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Last Name" hasFeedback>
							{getFieldDecorator('lastname', {
								validateTrigger: 'onBlur',
								rules: [
									{
										max: 25,
										message: 'Must be less than 25 characters'
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Profile Image">
							<div>
								{/* {getFieldDecorator('userimg', {
									valuePropName: 'fileList',
									getValueFromEvent: this.normFile
								})( */}
								<Upload.Dragger name="files" action="/upload.do">
									<p className="ant-upload-drag-icon">
										<Icon type="inbox" />
									</p>
									<p className="ant-upload-text">
										Click or drag file to this area to upload
									</p>
									<p className="ant-upload-hint">
										*Image upload not implemented yet*
									</p>
								</Upload.Dragger>
								{/* )} */}
							</div>
						</FormItem>
						<FormItem {...formItemLayout} label="Bio">
							{getFieldDecorator('bio')(<TextArea rows={4} />)}
						</FormItem>

						<FormItem {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Register
							</Button>
							{this.props.registered && (
								<span style={{ color: 'green' }}>
									<strong> SUCCESSFULLY REGISTERED!</strong>{' '}
									{this.redirectUser()}
								</span>
							)}
						</FormItem>
					</Form>
				</div>

				<style jsx>{`
					.register-container {
						max-width: 600px;
						margin: 80px auto;
					}
				`}</style>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		registered: state.auth.registered
	};
};

const mapDispatchToProps = dispatch => {
	return {
		registerUser: userdata => dispatch(registerUser(userdata)),
		clearAuth: () => dispatch(clearAuth())
	};
};

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(
	Form.create()(Register)
);
