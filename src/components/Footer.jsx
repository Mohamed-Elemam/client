
// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Footer = () => {
  const navigate = useNavigate();

  const socialMedia = ["Facebook", "Twitter", "Instagram", "Pinterest"];

  return (
    <>
     <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: "#f0f0",
        marginTop: "auto", // Use marginTop: "auto" to push the footer to the bottom
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        {/* First column */}
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "25%" },
            px: 4,textAlign:'center'
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, fontFamily: "Lobster" }}
            color="initial"
          >
            Techmart
          </Typography>
          <nav style={{display:'flex',flexDirection:'column' , justifyContent:'center', margin:'0 auto'}}>
            <Box
            mx={'auto'}
            component={'div'}

              variant="caption"
              color="inherit"
              sx={{ display: "flex", alignItems: "center", my: 1 }}
            >
              <RoomOutlinedIcon sx={{ mr: 1 }} /> 184 Main Rd E, St Albans,
              Australia
            </Box>
            <Box
            mx={'auto'}
            component={'div'}

              variant="caption"
              color="inherit"
              sx={{ display: "flex", alignItems: "center", my: 1 }}
            >
              <EmailOutlinedIcon sx={{ mr: 1 }} /> contact@company.com
            </Box>
            <Box
            mx={'auto'}
              variant="caption"
              component={'div'}
              color="inherit"
              sx={{ display: "flex", alignItems: "center", my: 1}}
            >
              <LocalPhoneOutlinedIcon sx={{ mr: 1 }} /> +001 2233 456
            </Box>
          </nav>
        </Box>

        <Box sx={{ flexBasis: { xs: "100%", md: "25%" }, px: 4 , textAlign:'center' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 2 }}>
            FOLLOW
          </Typography>
          <nav>
            {socialMedia.map((ele, index) => (
              <Link
                underline="none"
                key={index}
                onClick={() => {
                  navigate("/");
                }}
                href="#"
                color="inherit"
                sx={{ display: "block", my: 1 }}
              >
                {ele}
              </Link>
            ))}
          </nav>
        </Box>
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "25%" },
              px: 4,
            }}
          >
            <Box sx={{textAlign:'center !important' ,width:{md:'50%',sm:'30%'}}} component={'div'} style={{}}>
              <img src="public/stores.jpg" alt="stores" width={'100%'} />
            </Box>
          </Box>
      </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
