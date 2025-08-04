import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import EmailField from "@/components/auth/EmailField";
import PasswordField from "@/components/auth/PasswordField";
import RememberMeField from "@/components/auth/RememberMeField";
import Copyright from "@/components/Copyright";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', p: 4, justifyContent: 'center', alignItems: 'center', minHeight: "100vh" }}>
      <Typography variant="h2" sx={{ color: "primary.main", mt: 4, mb: 8 }}>Register</Typography>
      <Card sx={{
        width: '100%',
        maxWidth: "md",
        padding: 2,
        boxShadow: 3,
        backgroundColor: 'background.paper'
      }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h4" sx={{ mb: 8 }}>
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              '& .MuiFormControl-root': { mb: 2 },
              "& .MuiFormControlLabel-root": { mx: 1 },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <EmailField email={email} setEmail={setEmail} />
            <PasswordField password={password} setPassword={setPassword} />
            <RememberMeField checked={checked} setChecked={setChecked} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Copyright />
    </Container>
  );
}