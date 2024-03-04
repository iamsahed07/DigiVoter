import '../App.css'; 
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ContentPaste as ContentPasteIcon,
  CheckBox as CheckBoxIcon,
  HowToVote as HowToVoteIcon,
  Assessment as AssessmentIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate, useNavigation } from 'react-router-dom';

const drawerWidth = 240;

const iconComponents = [
  <ContentPasteIcon />,
  <CheckBoxIcon />,
  <HowToVoteIcon />,
  <AssessmentIcon />,
  <LogoutIcon />,
];

export default function ClippedDrawer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Information",
              "Voter Registration",
              "Voting Area",
              "Result",
              "LogOut",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={()=>{
                  if(index === 0){
                    navigate('/')
                  }else if(index === 1){
                    navigate('/voterRegistration')
                  }else if(index === 2){
                    navigate('/votingArea')
                  }else if(index === 3){
                    navigate('/result')
                  }else{
                    navigate('/logout')
                  }               
                
                }                 
                  }>
                  <ListItemIcon>
                    {iconComponents[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
