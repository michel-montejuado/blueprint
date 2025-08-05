import { Link as RouterLink } from "react-router";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h2" sx={{ color: "primary.main", mb: 2 }}>Woups!</Typography>
      <Typography variant="h4" sx={{ color: "secondary.main", mb: 4 }}>
        Seems like you've hit a dead end.
      </Typography>
      <Link component={RouterLink} to="/">
        Get back home!
      </Link>
    </Container>
  );
}