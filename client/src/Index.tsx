import React from "react";
import { Box, Typography } from "@mui/material";
import ClippedDrawer from "./components/Drawer";
import Information from "./pages/Information";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import VoterRegistration from "./pages/VoterRegistration";
// import VotingArea from "./pages/VotingArea";

function Index() {
  return (
    <Box>
      <Header></Header>
      <ClippedDrawer></ClippedDrawer>
      <Footer></Footer>
      {/* <VoterRegistration></VoterRegistration> */}
      {/* <VotingArea></VotingArea> */}

    </Box>
  );
}

export default Index;
