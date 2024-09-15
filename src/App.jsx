import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Planets from "./Components/Planets";
import Explore from "./Components/Explore";
import Faq from "./Components/Faq";
function App() {
  useEffect(() => {
    // Load Botpress webchat scripts
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://mediafiles.botpress.cloud/7e743ef5-65fe-42ec-835d-002933982f46/webchat/v2.1/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up function to remove scripts when component unmounts
    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <>
      {/* Video background container */}
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/bg.mp4" type="video/mp4" autoPlay loop muted />
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-5"></div>

      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
