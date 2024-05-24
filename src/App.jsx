import "./App.css";
import { Routes, Route , Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Party from "./pages/Party";
import Vehicle from "./pages/Vehicle";
import BillMaster from "./pages/BillMaster";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/party" element={<ProtectedRoute><Party/></ProtectedRoute>} />
        <Route path="/vehicle-owner" element={<ProtectedRoute><Vehicle/></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
        <Route path="/bill-master" element={<ProtectedRoute><BillMaster/></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export function ProtectedRoute(props){

  if(localStorage.getItem('userdetails')){
    return props.children;
  }
  else{
    return <Navigate to='/login'/>
  }

}

export default App;
