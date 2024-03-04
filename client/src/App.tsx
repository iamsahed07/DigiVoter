import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import VoterRegistration from "./views/VoterRegistration";
import Information from "./views/Information";
import VotingArea from "./views/VotingArea";
import Result from "./views/Result";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/information" element={<Information/>}></Route>
        <Route path="/" element={<Information/>}></Route>
        <Route path="/voterRegistration" element={<VoterRegistration></VoterRegistration>}></Route> 
         <Route path="/votingArea" element={<VotingArea></VotingArea>}></Route> 
          <Route path="/Result" element={<Result/>}></Route> 
          {/* <Route path="/" element={<Index></Index>}></Route> */}

      </Routes>
    </Router>
      
      
    </>
  );
}

export default App;