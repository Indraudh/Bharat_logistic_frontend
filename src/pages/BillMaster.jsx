import React from 'react'
import Defaultlayout from '../components/Defaultlayout';
import { Table } from 'antd';
import { useState , useEffect } from 'react';
import { message } from 'antd';
import "../resources/party.scss";
import Spinner from '../components/Spinner';
import Addnew from '../components/Addnew';
import moment from 'moment';
function BillMaster() {
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
      title: "Financial Year",
      dataIndex: "fin_year",
      pattern:"*",
      render: (text) => <span>{moment(text).format("YYYY")}</span>
    },
    {
      title: "Date",
      dataIndex: "date",
      pattern:"*",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Name",
      dataIndex: "name",
      pattern: "[a-zA-Z ]*"
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
      title: "Contact Number",
      dataIndex: "contact_no",
      pattern:"[0-9]{10}"
    },
    {
      title: "Loadslip NO",
      dataIndex: "loadslip_no",
      pattern:"*"
    },
    {
      title: "Lorry NO",
      dataIndex: "lorry_no",
      pattern:"*"
    },
    {
      title: "Challan NO",
      dataIndex: "challan_no",
      pattern:"*"
    },
    {
      title: "LR NO",
      dataIndex: "lr_no",
      pattern:"*"
    },
    {
      title: "LR Date",
      dataIndex: "lr_date",
      pattern:"*",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Loading Date",
      dataIndex: "loading_date",
      pattern:"*",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Unloading Date",
      dataIndex: "unloading_date",
      pattern:"*",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Source",
      dataIndex: "source",
      pattern: "[a-zA-Z ]*"
    },
    {
      title: "Destination",
      dataIndex: "destination",
      pattern: "[a-zA-Z ]*"
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
              <h1>Bill Master</h1>
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

export default BillMaster