import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SignIn from "./components/models/SignIn";
import Footer from "./components/Footer/Footer";
import Support from "./components/models/Support";
import MsFlats from "./pages/navigation/fabricationSteel/MsFlats";
import { ModalContainer } from "./hooks/ModalCotext";
import MsRound from "./pages/navigation/fabricationSteel/MsRound";
import GetQuote from "./pages/navigation/GetQuote";
import Cart from "./cart/Cart";
import BindindWires from "./pages/navigation/ConstructionSteel/BindingWires";
import TmtBars from "./pages/navigation/ConstructionSteel/tmtBars";
import MsChannels from "./pages/navigation/fabricationSteel/MsChannels";
import MsAngles from "./pages/navigation/fabricationSteel/MsAngles";
import MsSquares from "./pages/navigation/fabricationSteel/MsSquares";
import MsPlates from "./pages/navigation/fabricationSteel/MsPlates";
import StainlessSteel from "./pages/navigation/SpaicialSteel/StainlessSteel";






const App = () => {
  return (
    <Router>
    <ModalContainer>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/getquote" element={<GetQuote />} />
        <Route exact path="/ms-flates" element={<MsFlats />} />
        <Route exact path="/ms-round" element={<MsRound />} />
        <Route exact path="/binding-wires" element={<BindindWires />} />
        <Route exact path="/tmt-bars" element={<TmtBars />} />
        <Route exact path="/ms-angles" element={<MsAngles />} />
        <Route exact path="/ms-squares" element={<MsSquares />} />
        <Route exact path="/ms-channels" element={<MsChannels />} />
        <Route exact path="/ms-plates" element={<MsPlates />} />
        <Route exact path="/stainless-steel" element={<StainlessSteel />} />
        
        <Route exact path="/cart" element={<Cart />} />
        
      </Routes>
      <Footer />
    </ModalContainer>
     
    </Router>
  );
};

export default App;
