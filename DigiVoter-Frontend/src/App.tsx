import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import OuterLayout from "./components/OuterLayout";
import { InnerLayout } from "./components/InnerLayout";
import { Information } from "./pages/Information";
import { VoterRegistration } from "./pages/VoterRegistration";
import { VotingArea } from "./pages/VotingArea";
import { VotingResult } from "./pages/VotingResult";
import { SignUp } from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<OuterLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route element={<InnerLayout />}>
        <Route path="information" element={<Information />} />
        <Route path="voter-registration" element={<VoterRegistration/>} />
        <Route path="voting-area" element={<VotingArea/>} />
        <Route path="voting-result" element={<VotingResult/>} />
      </Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-[#EEEEEE]">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
