import React from 'react';
import {Routes, Route, Outlet } from 'react-router-dom'
import Home from '../testcom/Home'
import Abc from '../testcom/abc/ABC';
import Nike from '../testcom/abc/NIKE';
import Product1 from '../testcom/abc/Product1';
import Cake from '../testcom/cake/CAKE';
import Cake1 from '../testcom/cake/CAKE1';
import CakeId from '../testcom/cake/CAKEID';


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/home" element={<Home/>} />
      <Route path="/abc" element={<Abc/>} />
      <Route path="/abc/nike" element={<Nike/>} />
      <Route path="/abc/nike/product1" element={<Product1/>} />
      <Route path="/cake" element={<Cake/>} />
      <Route path="/cake/cake1" element={<Cake1/>} />
      <Route path="/cake/cake1/:productId" element={<CakeId/>} />

      {/* nested Route */}
      <Route path="/about" element={<About/>}>
        <Route path="member" element={<Member/>} />
        <Route path="location" element={<Location/>} />
      </Route>
      {/* 404 페이지 */}
      <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>} />
    </Routes>
  );
}
function About(params) {
  return(
    <div>
      <h1>about 페이지입니다.</h1>
      <Outlet></Outlet>
    </div>
  )
}
function Member(params) {
  return(
    <div>
      <h1>Member 페이지입니다.</h1>
    </div>
  )
}
function Location(params) {
  return(
    <div>
      <h1>Location 페이지입니다.</h1>
    </div>
  )
}

export default Router;
