import React from "react"
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CreateFlashcard from "./Pages/CreateFlashcard";
import MyFlashcard from "./Pages/MyFlashcard";
import FlashcardDetails from "./Pages/FlashcardDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
   return (
    <BrowserRouter>
    <div>
    <Header/>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CreateFlashcard />}/>
        <Route path="/myflashcard" element={<MyFlashcard/>}/>
        <Route path="/flashcarddetails" element={<FlashcardDetails/>}/>
      </Routes>
      </div></div>
    </BrowserRouter>
   );
   
}

export default App;
