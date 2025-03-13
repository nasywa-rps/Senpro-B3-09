import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import SearchCard from './components/searchCard';
import Footer from './components/footer';

function App() {
  // Data untuk navbar
  const navbarData = {
    logo: "jobgenie 5.png",
    logoAlt: "JobGenie Logo",
    title: "JobGenie",
    links: [
      { text: "Lorem", url: "#" },
      { text: "Lorem", url: "#" },
      { text: "Lorem", url: "#" }
    ],
    profileName: "Lorem",
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
  const footerText = "Link Github: Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
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
      
      <Footer text={footerText} />
    </div>
  );
}

export default App;