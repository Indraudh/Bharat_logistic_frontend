import React from "react";
import { Form, Input, Checkbox ,message} from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect ,useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from "@mui/icons-material/Lock";
import "../resources/login.scss";
import Spinner from "../components/Spinner";
function Login() {
     const [loading,setLoading]=useState(false);
     const navigate=useNavigate(true);
     const onFinish=async(values)=>{
          try {
              if(values.remember === undefined){
                    values.remember = false;
               }
              console.log(values);
              localStorage.setItem('userdetails',JSON.stringify({values:values}));
              message.success('Login successful');
              setLoading(false);
              navigate('/');
          } catch (error) {
              setLoading(false);
              message.error('Login failed');
          }
      }
      useEffect(()=>{
          if(localStorage.getItem('userdetails')){
              navigate('/');
          }
      },[])
  return (
    <div className="login">
     <div className="left">
          <div className="header">
               <h1 className="name x">Logo</h1>
               <h1 className="name">Company Name</h1>
          </div>
          <div className="details">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi delectus nisi sunt accusamus iure, doloribus possimus? Magni dicta, nam inventore odit labore corporis accusantium distinctio reprehenderit perspiciatis voluptatum laborum.</p>
          </div>
     </div>
     <div className="right">
     <div className="form-box">
        <div className="form-value">
          <Form layout="vertical" onFinish={onFinish}>
            <h2>Login</h2>
            <div className="input-box">
              <PersonIcon />
              <Form.Item label="Username" name="user_name" className="form-input">
                <Input type="text" required></Input>
              </Form.Item>
            </div>
            <div className="input-box">
              <LockIcon />
              <Form.Item
                label="Password"
                name="password"
                className="form-input"
              >
                <Input type="password" required></Input>
              </Form.Item>
            </div>
            <div className="forget">
              <Form.Item name="remember" valuePropName="checked" className="checkbox">
                <Checkbox className="check">Remember Me</Checkbox>
              </Form.Item>
              <a href="#">Forget Password</a>
            </div>
            <button type="submit" className="Log" onClick={()=> setLoading(true)}>Log In</button>
          </Form>
        </div>
      </div>
     </div>
     {loading && <Spinner/>}
    </div>
  );
}

export default Login;
