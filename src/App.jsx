import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasAnggotaPage from "./pages/KelasAnggotaPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";
import TestimoniPage from "./pages/TestimoniPage";


function App() {
  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasAnggotaPage}/>
      <Route path="/syarat" Component={SyaratKetenPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/testimoni" Component={TestimoniPage}/>
    </Routes>

    {/* <FooterComponent /> */}
  </div>
  );
}

export default App;
