import React from 'react'
import Defaultlayout from '../components/Defaultlayout';
import { Table } from 'antd';
import { useState , useEffect } from 'react';
import { message } from 'antd';
import "../resources/party.scss";
import { DeleteOutlined } from "@ant-design/icons";
import Spinner from '../components/Spinner';
import Addnew from '../components/Addnew';
function Vehicle() {
  const [data , setdata]= useState([]);
  const [loading,setLoading]=useState(false);
  const [showtr ,setshowtr]= useState(false);
  const getdetails = async ()=>{
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('userdetails'));
      console.log(user);
      setdata([]);
      setLoading(false);
  } catch (error) {
      setLoading(false);
      message.error('Something went wrong');
  }
  }
  const deletedetails = async (record) => {
    try {
      setLoading(true);
      console.log(record);
      message.success("Details deleted successfully");
      getdetails();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };
  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      pattern: "[a-zA-Z ]*"
    },
    {
      title: "Branch Name",
      dataIndex: "branc_hname",
      pattern: "[a-zA-Z ]*"
    },
    {
      title: "Code",
      dataIndex: "code",
      pattern:"*"
    },
    {
      title: "Group",
      dataIndex: "group_name",
      pattern:"*"
    },
    {
      title: "Subgroup",
      dataIndex: "subgroup_name",
      pattern:"*"
    },
    {
      title: "Address",
      dataIndex: "address",
      pattern:"*"
    },
    {
      title: "Name",
      dataIndex: "name",
      pattern:"[a-zA-Z ]*"
    },
    {
      title: "Owner Name",
      dataIndex: "owner_name",
      pattern:"[a-zA-Z ]*"
    },
    {
      title: "Updated Name",
      dataIndex: "updated_name",
      pattern:"*"
    },
    {
      title: "GST NO",
      dataIndex: "gst_no",
      pattern:"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
    },
    {
      title: "PAN NO",
      dataIndex: "pan_no",
      pattern:"[A-Z]{5}[0-9]{4}[A-Z]{1}"
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      pattern: "[a-zA-Z ]*"
    },
    {
      title: "Contact Number",
      dataIndex: "contact_number",
      pattern:"[0-9]{10}"
    },
    {
      title: "Opening Balance",
      dataIndex: "opening_bal",
      pattern:"^\\d{1,15}(?:\\.\\d{1,2})?$"
    },
    {
      title: "Closing Balance",
      dataIndex: "closing_bal",
      pattern:"^\\d{1,15}(?:\\.\\d{1,2})?$"
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div>
            <DeleteOutlined onClick={()=>deletedetails(record)}/>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    getdetails();
 }, []);
  return (
    <Defaultlayout>
      {loading && <Spinner/>}
        <div className="party">
            <div className="partyheader">
              <h1>Vehicle Owners</h1>
            </div>
            <div className="table">
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} style={{boxShadow:"black 4px"}}/>
            </div>
            <div className="addnew">
              <button className='add' onClick={()=>setshowtr(true)}>Add New</button>
            </div>
        </div>
        <Addnew setshowtr={setshowtr} showtr={showtr} getdetails={getdetails} setLoading={setLoading} column={columns}/> 
        {loading && <Spinner/>}
    </Defaultlayout>
  )
}

export default Vehicle