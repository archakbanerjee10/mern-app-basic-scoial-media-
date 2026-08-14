import React from "react";
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Create_post from './pages/create_post'
import Feed from './pages/feeds_section'
const App =()=> {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Create_post/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App