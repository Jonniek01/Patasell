import React from 'react'
import Page from './Page'
import LogIn from './LogIn'
import CreateAccount from './Pages/CreateAccount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
    const [loggedIn,SetLoggedIn]=useState(true)
    if (loggedIn===true){
        return (
            <div><Page /></div>
          )
        

    }
    else{
        return(
            <div>
                <BrowserRouter>
                <Routes>
                <Route path='/' element={<LogIn/>} exact/>
                <Route path='/createAccount' element={<CreateAccount/>} exact/>



                </Routes>
                </BrowserRouter>


            
            </div>

        )
    }
}

export default App