import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Cards from './Dashboard/Cards';
import Basketball from './Venues/Basketball';
import Football from './Venues/Football';
import Seminar from './Venues/Seminar';
import Landing from './Registration/Landing';
import Logins from './Registration/Logins';
import Student from './Registration/Student';
import Faculty from './Registration/Faculty';
import Customer from './Registration/Customer';
import Signup from './Registration/Signup';
import Footer from './Components/Footer';
import About from './Dashboard/About';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Dashboard from './Dashboard/Dashboard';
import Grounds from './Venues/Grounds';
import Halls from './Venues/Halls';
import Mondini from './Venues/Mondini';
import TopCourt from './Venues/TopCourt';



function App() {
  const location = useLocation();

  // Define an array of paths where Navbar should not be rendered
  const excludedPaths = ['/landing', '/logins', '/student', '/faculty','/signup', '/customer', '/football-ground', '/basketball-court','/seminar-hall','/mondini-hall','/top-court' ]; // Add more paths as needed
  const excludePaths = ['/landing', '/logins', '/student', '/faculty','/signup', '/customer', '/football-ground', '/basketball-court','/seminar-hall','/aboutus','/contactus','/mondini-hall','/top-court']; // Add more paths as needed
  const excludesPaths = ['/landing', '/logins', '/student', '/faculty','/signup', '/customer', '/basketball-court' , '/football-ground' ,'/seminar-hall','/aboutus','/contactus','/cards', '/grounds','/halls','/mondini-hall','/top-court']; // Add more paths as needed
  const excludingPaths = ['/landing', '/logins', '/student', '/faculty','/signup', '/customer', '/football-ground','/basketball-court','/seminar-hall','/aboutus','/contactus' ,'/mondini-hall','/top-court']; // Add more paths as needed

  // Conditionally render the Navbar based on whether the current path is in the excludedPaths array
  const renderNavbar = !excludedPaths.includes(location.pathname);
  // Conditionally render the Footer based on whether the current path is in the excludedPaths array
  const renderFooter = !excludePaths.includes(location.pathname);
  // Conditionally render the hr based on whether the current path is in the excludedPaths array
  const renderAbout = !excludesPaths.includes(location.pathname);
  // Conditionally render the About based on whether the current path is in the excludedPaths array
  const renderhr = !excludingPaths.includes(location.pathname);

  return (
    <div className="App">
      {renderNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/grounds" element={<Grounds />} />
        <Route path="/halls" element={<Halls />} />
        
        <Route path="/landing" element={<Landing />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basketball-court" element={<Basketball />} />
        <Route path="/football-ground" element={<Football />} />
        <Route path="/seminar-hall" element={<Seminar />} />
        <Route path="/mondini-hall" element={<Mondini />} />
        <Route path="/top-court" element={<TopCourt />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/hr" element={<hr />} />

        {/* Add more routes as needed */}
      </Routes>
      {renderhr && <hr />}
      {renderAbout && <About />}
      {renderhr && <hr />}
      
      {renderFooter && <Footer />}
      
    </div>
  );
}

export default App;
