import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Card from './components/card';
import SearchCard from './components/searchCard';
import Footer from './components/footer';
import JobForm from './jobform/page';
import JobList from './joblist/page';

function App() {
  // Data untuk navbar
  const navbarData = {
    logo: "jobgenie 5.png",
    logoAlt: "JobGenie Logo",
    title: "JobGenie",
    links: [
      { text: "Home", url: "/#" },
      { text: "Job Form", url: "/jobform" },
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
        <Navbar 
          logo={navbarData.logo}
          logoAlt={navbarData.logoAlt}
          title={navbarData.title}
          links={navbarData.links}
          profileName={navbarData.profileName}
          profileIcon={navbarData.profileIcon}
          profileIconAlt={navbarData.profileIconAlt}
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Card 
                title="Apa itu JobGenie?" 
                text={jobGenieText} 
              />
              
              <Card 
                title="Keuntungan JobGenie" 
                text={jobGenieText} 
              />
              
              <SearchCard 
                title={searchCardData.title}
                steps={searchCardData.steps}
                imageUrl={searchCardData.imageUrl}
                imageAlt={searchCardData.imageAlt}
              />
            </>
          } />
          <Route path="/jobform" element={<JobForm />}/>
          <Route path="/joblist" element={<JobList />} />
        </Routes>
        
        <Footer text={footerText} />
      </div>
    </Router>
  );
}

export default App;
