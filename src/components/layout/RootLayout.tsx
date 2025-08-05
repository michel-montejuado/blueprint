import { Outlet, Link as RouterLink } from "react-router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconColorModeSelect from "@/components/theme/IconColorModeSelect";
import Copyright from "@/components/Copyright";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function RootLayout() {
  const [currentUser, setCurrentUser] = useLocalStorage<string | null>("CURRENT_USER", null);

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', pb: 4, justifyContent: 'center', alignItems: 'center', minHeight: "100vh" }}>
      <Toolbar
        component="header"
        sx={{
          width: '100%',
          mt: 1,
          mb: 8,
          display: 'flex',
          flexFlow: 'row',
          justifyContent: 'space-between',
          color: 'text.secondary',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: (theme) => theme.shadows[1]
        }}>
        <Typography variant="h5" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'primary.main' }}>
          Blueprint
        </Typography>
        <Box sx={{ display: 'inline-flex', gap: 2 }}>
          {currentUser ? (
            <>
              <Button variant="contained" color="primary" component={RouterLink} to="/dashboard">
                Dashboard
              </Button>
              <Button variant="contained" color="secondary" onClick={() => {
                setCurrentUser(null);
              }}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary" component={RouterLink} to="/auth/login">
                Login
              </Button>
              <Button variant="contained" color="secondary" component={RouterLink} to="/auth/register">
                Register
              </Button>
            </>
          )}
          <IconColorModeSelect />
        </Box>
      </Toolbar>
      <Box component="main" sx={{ flexGrow: 1, mb: 4 }}>
        <Outlet />
      </Box>
      <Box component="footer" sx={{
        mb: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'text.secondary',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: (theme) => theme.shadows[1]
      }}>
        <Copyright />
      </Box>
    </Container >
  );
}