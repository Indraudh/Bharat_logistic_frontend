import { useNavigate } from "react-router-dom";
import '../resources/navbar.scss';
import { message } from "antd";
export default function Topbar({selected}) {
  const navigate=useNavigate(true);
  const logout = async ()=>{
    await localStorage.removeItem('userdetails');
    message.success('Logged Out');
    navigate('/login');
  }
  return (
    <div className="topbar">
    <div className="navbar">
        <div className="left">
              <a href="/"><h1 className="logo">LOGO</h1></a>
        </div>
        <div className="right">
              <ul className='menu'>
                 <li className={"inactive " + ((selected==="party") && "active")}><a href="/party">Party</a></li>
                 <li className={"inactive " + ((selected==="vehicle") && "active")}><a href="/vehicle-owner">Vehicle Owner</a></li>
                 <li className={"inactive " + ((selected==="account") && "active")}><a href="/account">Account</a></li>
                 <li className={"inactive " + ((selected==="bill") && "active")}><a href="/bill-master">Bill Master</a></li>
                 <button className='logout' onClick={logout}>Log Out</button>
              </ul>
        </div>
    </div>
    <hr />
    </div>
  )
}
