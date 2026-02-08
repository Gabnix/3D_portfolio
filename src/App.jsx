import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router basename="/3D_portfolio">
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
    </main>
  );
};

export default App;
