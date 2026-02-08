import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import { Footer, Navbar } from "./components";
import { About, Contact, Home } from "./pages";
import HomeContext from "./contexts/HomeContext";

const App = () => {
  const [resetHomeTrigger, setResetHomeTrigger] = useState(0);

  const resetHome = () => {
    setResetHomeTrigger(prev => prev + 1);
  };

  return (
    <main className='bg-slate-300/20'>
      <HomeContext.Provider value={{ resetHome, resetHomeTrigger }}>
        <Router>
          <Navbar />
          <div className='page-transition'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/*'
                element={
                  <>
                    <Routes>
                      <Route path='/about' element={<About />} />
                      {/* Projects route temporarily disabled until projects are ready */}
                      {/* <Route path='/projects' element={<Projects />} /> */}
                      <Route path='/contact' element={<Contact />} />
                    </Routes>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </HomeContext.Provider>
    </main>
  );
};

export default App;
