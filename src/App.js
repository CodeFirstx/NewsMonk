import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>{
  
  const pageSize = 15;

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress ={setProgress}  key="General" pageSize={pageSize} country="us" category="General" />}></Route>
            <Route exact path="/Business" element={<News setProgress ={setProgress}  key="Business" pageSize={pageSize} country="us" category="Business" />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress ={setProgress}  key="Entertainment" pageSize={pageSize} country="us" category="Entertainment" />}></Route>
            <Route exact path="/Health" element={<News setProgress ={setProgress}  key="Health" pageSize={pageSize} country="us" category="Health" />}></Route>
            <Route exact path="/Science" element={<News setProgress ={setProgress}  key="Science" pageSize={pageSize} country="us" category="Science" />}></Route>
            <Route exact path="/Sports" element={<News setProgress ={setProgress}  key="Sports" pageSize={pageSize} country="us" category="Sports" />}></Route>
            <Route exact path="/Technology" element={<News setProgress ={setProgress}  key="Technology;" pageSize={pageSize} country="us" category="Technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;