import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} CVE Library. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
