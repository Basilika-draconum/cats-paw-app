import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import Voting from "../Voting/Voting";
import Breeds from "../Breeds/Breeds";
import Gallery from "../Gallery/Gallery";
import Start from "../Start/Start";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Start />} />
        <Route path="voting" element={<Voting />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
      <Route path="*" element={<Start />} />
    </Routes>
    // <div className=" container text-center mx-auto text-3xl font-bold underline">
    //   Cats Paw
    // </div>
  );
}

export default App;
