import { AppBar, Toolbar, Typography } from "@mui/material";
import "../App.css";
export const Header = () => {
  return (
    <div
      style={{ position: "absolute", top: "0px", left: "0px", zIndex: 10000,display: "flex", justifyContent: "space-between" ,width:'100vw', borderBottom:2}}
    >
        <Toolbar>
          <div>
            <img src="../public/icon.svg" height={"40px"} width={"40px"}></img>
            <span> &nbsp; &nbsp;</span>
            <Typography
              variant="h4"
              noWrap
              component="div"
              color={"#4C3EDA"}
              sx={{ fontWeight: "bold", marginTop: 0.8 }}
              fontFamily={"arial"}
            >
              DigiVoter
            </Typography>
          </div>
        </Toolbar>
        <div>
          <div>
            <Typography>English</Typography>
          </div>
        </div>
      </div>
  );
};

export default Header;
