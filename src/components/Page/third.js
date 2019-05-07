import React, {Component} from "react";
import {
  Row,
  Col,
  Form,
  Checkbox,
  Radio,
  Icon,
  Button,
  Select,
  Input,
  Alert,
  Spin,
  Modal
} from "antd";
import axios from "axios";

const {Option} = Select;
const FormItem = Form.Item;
const {TextArea} = Input;
class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      fullName: "",
      contactNumber: "",
      email: "",
      message: "",
      submitMessage: "",
      loading: false
    };
  }

  handleSelectChange = value => {
    this.props.form.setFieldsValue({title: value});
    this.setState({title: value});
  };
  handleChange = (e, name) => {
    let value = e.target.value;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({loading: true});
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post("https://morning-bastion-85123.herokuapp.com/api/form/send", values)
          .then(res => {
            this.setState({
              submitMessage: (
                <Alert
                  message={res.data.message}
                  className="submit-message"
                  type="success"
                  showIcon
                />
            ),
            loading: false
            });
          })
          .catch(err => {
            this.setState({
              submitMessage: (
                <Alert
                  message="Something Went Wrong.."
                  className="submit-message"
                  type="error"
                  showIcon
                />
            ),
            loading: false
            });
          });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {activeThird} = this.props;
    return (
      <div className="third-container">
        {this.state.submitMessage}
        <div className="second-container">
          <Form onSubmit={this.handleSubmit}>
            <Row
              gutter={48}
              className={
                activeThird
                  ? "form-container form-container-active"
                  : "form-container"
              }
            >
              <div className="form-text">
                <span className="header-form-text">
                  Hi!! You can contact me by just filling up this form. <br />
                  Lets Start make difference
                </span>
              </div>
              <Input
                name="fullName"
                placeholder="Last Name"
                value={`${this.state.title} ${this.state.firstName} ${
                  this.state.middleName
                } ${this.state.lastName}`}
                disabled
                style={{
                  marginBottom: "3%",
                  background: "#b5b4b4",
                  color: "#ffff"
                }}
              />
              <Row gutter={24}>
                <Col span={8}>
                  <FormItem hasFeedback>
                    {getFieldDecorator("title", {
                      rules: [
                        {required: true, message: "Please select you title"}
                      ]
                    })(
                      <Select
                        placeholder="Title"
                        onChange={this.handleSelectChange}
                      >
                        <Option value="MR.">MR</Option>
                        <Option value="MS.">MS</Option>
                        <Option value="MRS.">MRS</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={16}>
                  <FormItem hasFeedback>
                    {getFieldDecorator("firstName", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your First Name"
                        }
                      ],
                      initialValue: this.state.firstName
                    })(
                      <Input
                        onChange={e => this.handleChange(e, "firstName")}
                        name="firstName"
                        placeholder="First Name"
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <FormItem hasFeedback>
                {getFieldDecorator("middleName", {
                  rules: [
                    {
                      required: false,
                      message: "Please input your Middle Name"
                    }
                  ],
                  initialValue: this.state.middleName
                })(
                  <Input
                    onChange={e => this.handleChange(e, "middleName")}
                    name="middleName"
                    placeholder="Middle Name"
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator("lastName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Last Name"
                    }
                  ],
                  initialValue: this.state.lastName
                })(
                  <Input
                    onChange={e => this.handleChange(e, "lastName")}
                    name="lastName"
                    placeholder="Last Name"
                  />
                )}
              </FormItem>

              <FormItem hasFeedback>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Email"
                    }
                  ],
                  initialValue: this.state.email
                })(
                  <Input
                    onChange={e => this.handleChange(e, "email")}
                    name="email"
                    placeholder="Email"
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator("message", {
                  rules: [
                    {
                      required: true,
                      message: "Please input Message"
                    }
                  ],
                  initialValue: this.state.message
                })(
                  <TextArea
                    onChange={e => this.handleChange(e, "message")}
                    name="message"
                    placeholder="Message"
                  />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" className="next">
              SUBMIT
              </Button>

              <Modal
                width="300"
                visible={this.state.loading ? true : false}
              >
                <Spin size="large" indicator={<Icon type="loading" style={{ fontSize: 100, color: "#E31B6D" }} spin />} />
              </Modal>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default (Third = Form.create({})(Third));
