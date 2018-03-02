// import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';
import { addItem } from '../store/actions/item';

import withAuth from '../hoc/withAuth';

import Layout from '../components/Layout';

import {
	Form,
	Input,
	InputNumber,
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

class NewPost extends React.Component {
	state = {
		confirmDirty: false
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.props.addItem({
					...values,
					ownerId: this.props.userId
				});
			}
		});
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

	render() {
		console.log(this.props);
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
				<div className="new-item-container">
					<h1 style={{ textAlign: 'center' }}>Post a new item</h1>
					<Form onSubmit={this.handleSubmit}>
						<FormItem {...formItemLayout} label="Name">
							{getFieldDecorator('name', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: "Please enter the product's name"
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Company">
							{getFieldDecorator('company', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: "Please enter the product's manufacturer"
									}
								]
							})(<Input />)}
						</FormItem>
						<FormItem {...formItemLayout} label="Category">
							{getFieldDecorator('category', {
								rules: [{ required: true, message: 'Please select a category' }]
							})(
								<Select placeholder="Please select your location">
									<Option value="snowboard">Snowboard</Option>
									<Option value="bindings">Bindings</Option>
									<Option value="boots">Boots</Option>
									<Option value="clothing">Clothing</Option>
									<Option value="accessories">Accessories</Option>
								</Select>
							)}
						</FormItem>

						<FormItem {...formItemLayout} label="Price">
							{getFieldDecorator('price', {
								rules: [
									{
										required: true,
										message: 'Please enter a price'
									}
								]
							})(
								<InputNumber
									formatter={value =>
										`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
									}
									parser={value => value.replace(/\$\s?|(,*)/g, '')}
								/>
							)}
						</FormItem>

						<FormItem
							{...formItemLayout}
							label={
								<span>
									Description&nbsp;
									<Tooltip title="Provide information such as measurements, condition of the product, and also payment and shipping preferences">
										<Icon type="question-circle-o" />
									</Tooltip>
								</span>
							}>
							{getFieldDecorator('description', {
								validateTrigger: 'onBlur',
								rules: [
									{
										required: true,
										message: 'Please enter a description'
									}
								]
							})(<TextArea autosize={{ minRows: 5 }} />)}
						</FormItem>

						<FormItem {...formItemLayout} label="Images">
							<div>
								{/* {getFieldDecorator('userimg', {
									valuePropName: 'fileList',
									getValueFromEvent: this.normFile
								})( */}
								<Upload.Dragger name="images" action="/upload.do">
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

						<FormItem {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</FormItem>
					</Form>
				</div>
				<style jsx>{`
					.new-item-container {
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
		userId: state.auth.login.id
	};
};

const mapDispatchToProps = dispatch => {
	return { addItem: itemdata => dispatch(addItem(itemdata)) };
};

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(
	withAuth(Form.create()(NewPost))
);
