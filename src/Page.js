import './Page.scss';
import {Container} from 'react-bootstrap'
import NavigationBar from './components/NavigationBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopFeed from './Pages/ShopFeed';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { User } from './data/User';
import MyProfileSeller from './Pages/MyProfileSeller';
import MyProfileBuyer from './Pages/MyProfileBuyer';
import { useState } from 'react';
import SellerProfileView from './Pages/SellerProfileView';import { Link } from 'react-router-dom'



function App() {
  const[clat,setClat]=useState('');
  const[clong,setClong]=useState('');

  navigator.geolocation.watchPosition(function(position) {
     setClat(position.coords.latitude) 
    setClong(position.coords.longitude) 
  });
    return (
    <Container className="Page" fluid>    
      <BrowserRouter >
      <NavigationBar/>
      <div className='navcover'></div>
      <div className='mobilecover'></div>


      <div className='mobile-head'><p>Patasell</p></div>



    <Routes>
    <Route path='/' element={<ShopFeed/>} exact/>
    <Route path='/profile' element= {User.isSeller===true?<MyProfileSeller userId={User.userId} clat={clat} clong={clong}/>:<MyProfileBuyer userId={User.userId} clat={clat} clong={clong}/>} />


    <Route path='/about' element={<About/>} exact/>
    <Route path='/seller' element={<SellerProfileView/>} exact/>




    <Route path="*" element={<NotFound/>} exact/>




    </Routes>
    </BrowserRouter>

    <div className='navmobilecover'></div>



    </Container>
  );
}

export default App;
