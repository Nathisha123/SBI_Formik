import React,{useState} from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Class from './Components/Class'
import User from './Components/User'
import Query from './Components/Query'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import Batch from './Components/Batch'

function App() {
 
  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
        <Route path='/batch' element={<Batch/>}>
            <Route path='user' element={<User/>}/>
            <Route path='class' element={<Class  />}/>
            <Route path='query' element={<Query/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App