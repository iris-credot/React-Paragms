import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
    
        <aside className="md:w-1/4 w-full bg-gray-800 text-white p-4 flex flex-col">
          <Navbar />
        </aside>

       
        <main className="md:w-3/4 w-full p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
