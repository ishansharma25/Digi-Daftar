import { Button } from "./components/ui/button";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./addcomponents/Navbar";
import { useEffect, useState } from "react";
import Footer from "./addcomponents/Footer";
import Cardani from "./addcomponents/Cardani";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <>
     
     <Navbar theme={theme} setTheme={setTheme} />
     
     <Routes>
      <Route path="/" element={ (<div><Home  theme={theme}/>
     <Cardani></Cardani>
      
      </div>
      
      )} ></Route>
      <Route path="/login" element={ <Login theme={theme} />} /> {/* Add routes as needed */}
      </Routes>
      <Footer theme={theme} />
      <div className={`container ${theme}`}>
     
      </div>
    </>
  );
}

export default App;
