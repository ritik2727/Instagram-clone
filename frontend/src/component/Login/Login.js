import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingH: 5,
        paddingTop:5,
        paddingBottom:5,
        width: 400,
        borderRadius: 2,
        // backgroundImage:'https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png',
        border: '1px solid black',
        // backgroundImage: 'url("https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present-700x394.png")',
        backgroundRepeat:'no-repeat',
        margin: 'auto', // Center the box horizontally
        marginTop: '20vh', // Adjust this value to center vertically
      }}
    >
        <img src='https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present-700x394.png' alt='logo' width='200'/>
    
        <RedditTextField
          label="Enter your email address"
          // defaultValue="react-reddit"
          id="email"
          type="email"
          variant="filled"
          style={{ marginTop: 5 }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <RedditTextField
          label="Enter your password"
          id="password"
          type="password"
          variant="filled"
          style={{ marginTop: 11 }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained" style={{ width: 200, marginTop: 20 }}>
          Login
        </Button>
      </Box>
 
  );
}
