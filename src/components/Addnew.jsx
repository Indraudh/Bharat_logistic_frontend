import React from "react";
import { Form, message, Modal, Input } from "antd";
import { DatePicker} from "antd";
import "../resources/party.scss";
function Addnew({ setshowtr, showtr, getdetails, setLoading, column }) {
  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      localStorage.setItem("party", JSON.stringify({ values: values }));
      getdetails();
      message.success("Party added successfully");
      setshowtr(false);
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  const modalcontrol = () => {
    setshowtr(false);
  };
  return (
    <Modal
      title="Add New"
      visible={showtr}
      onCancel={() => modalcontrol()}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish}>
        {column.map((item) => {
          if (item.dataIndex === "email") {
            return (
              <Form.Item name={item.dataIndex} label={item.title}>
                <Input type="email" className="input" required></Input>
              </Form.Item>
            );
          } else if(item.dataIndex === "lr_date" || item.dataIndex === "loading_date" || item.dataIndex === "unloading_date" || item.dataIndex === "date") {
            return (
              <Form.Item name={item.dataIndex} label={item.title}>
                <DatePicker required style={{width:"100%"}}/>
              </Form.Item>
            );
          } else if(item.dataIndex === "fin_year") {
            return (
              <Form.Item name={item.dataIndex} label={item.title}>
                <DatePicker picker="year" required style={{width:"100%"}}/>
              </Form.Item>
            );
          } else if(item.dataIndex !== "actions") {
            return (
              <Form.Item name={item.dataIndex} label={item.title}>
                <Input type="text" className="input" pattern={item.pattern} required></Input>
              </Form.Item>
            );
          }
        })}
        <div className="submit">
          <button className="save" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default Addnew;
