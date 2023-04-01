import React from 'react'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Inventory from "../../Pages/Inventory/Inventory"
import Orders from "../../Pages/Orders/Orders"
import Customers from "../../Pages/Customers/Customers"
import { Routes,Route } from 'react-router-dom'

function AppRoutes() {
  return (
    
    <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path="/inventory" element={<Inventory/>}/>
    <Route path='/Orders' element={<Orders />}/>
    <Route path='customers' element={<Customers/>}/>
    </Routes>
    
  )
}

export default AppRoutes