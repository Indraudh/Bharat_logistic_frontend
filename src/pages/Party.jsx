import React from 'react'
import Defaultlayout from '../components/Defaultlayout';
import { Table } from 'antd';
import { useState , useEffect } from 'react';
import { message } from 'antd';
import "../resources/party.scss";
import { DeleteOutlined } from "@ant-design/icons";
import Spinner from '../components/Spinner';
import Addnew from '../components/Addnew';
function Party() {
  const [data , setdata]= useState([]);
  const [loading,setLoading]=useState(false);
  const [showtr ,setshowtr]= useState(false);
  const getdetails = async ()=>{
    try {
      setLoading(true);
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
      dataIndex: "branch_name",
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
      title: "Party",
      dataIndex: "party_name",
      pattern:"*"
    },
    {
      title: "Location",
      dataIndex: "location",
      pattern:"*"
    },
    {
      title: "Address",
      dataIndex: "address",
      pattern:"*"
    },
    {
      title: "GST NO",
      dataIndex: "gst_no",
      pattern:"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
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
      title: "Email ID",
      dataIndex: "email",
      pattern:"*"
    },
    {
      title: "Opening Balance",
      dataIndex: "opening_balance",
      pattern:"^\\d{1,15}(?:\\.\\d{1,2})?$"

    },
    {
      title: "Closing Balance",
      dataIndex: "closing_balance",
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
              <h1>Party</h1>
            </div>
            <div className="table">
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }}/>
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

export default Party