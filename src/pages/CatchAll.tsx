import { Link as RouterLink } from "react-router";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Copyright from "@/components/Copyright";
import Link from "@mui/material/Link";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', pt: 4, pb: 4, justifyContent: 'center', alignItems: 'center', minHeight: "100vh" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ color: "primary.main", mb: 2 }}>Woups!</Typography>
        <Typography variant="h4" sx={{ color: "secondary.main", mb: 4 }}>
          Seems like you've hit a dead end.
        </Typography>
        <Link component={RouterLink} to="/">
          Get back home!
        </Link>
      </Box>
      <Copyright />
    </Container>
  );
}