import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Card from './components/card';
import SearchCard from './components/searchCard';
import Footer from './components/footer';
import JobForm from './jobform/page';
import JobList from './joblist/page';
import LoginPage from './login/page'; 
import RegisterPage from './register/page';

function App() {
  // Data untuk navbar
  const navbarData = {
    logo: "jobgenie 5.png",
    logoAlt: "JobGenie Logo",
    title: "JobGenie",
    links: [
      { text: "Home", url: "/#" },
      { text: "Job Form", url: "/jobform" },
      { text: "Login", url: "/login" }, // Added Login link
      { text: "Lorem", url: "#" }
    ],
    profileName: "Person 1",
    profileIcon: "Male User.png",
    profileIconAlt: "Profile Icon"
  };
  
  // Contoh teks untuk card
  const jobGenieText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
  qui officia deserunt mollit anim id est laborum.`;
  
  // Data untuk search card
  const searchCardData = {
    title: "Cara Kerja JobGenie",
    steps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    ],
    imageUrl: "images.jpg",
    imageAlt: "Uji Sampel"
  };
  
  // Data untuk footer
  const footerText = "Link Github: https://github.com/nasywa-rps/Senpro-B3-09.git";

  return (
<Router>
  <div className="container" style={{ flex: "column" }}>
    <Routes>
      {/* Route Login */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Semua route lain */}
      <Route path="/" element={
        <>
          <Navbar {...navbarData} />
          <Card title="Apa itu JobGenie?" text={jobGenieText} />
          <Card title="Keuntungan JobGenie" text={jobGenieText} />
          <SearchCard {...searchCardData} />
          <Footer text={footerText} />
        </>
      } />
      
      <Route path="/jobform" element={
        <>
          <Navbar {...navbarData} />
          <JobForm />
          <Footer text={footerText} />
        </>
      } />
      
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/joblist" element={
        <>
          <Navbar {...navbarData} />
          <JobList />
          <Footer text={footerText} />
        </>
      } />
    </Routes>
  </div>
</Router>

  );
}

export default App;