import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetUsers from "./Pages/GetUsers"
import Addusers from "./Pages/Addusers"
import Updateusers from "./Pages/Updateusers"
import "./style.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetUsers/>}/>
        <Route path="/add" element={<Addusers/>}/>
        <Route path="/edit/:id" element={<Updateusers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;