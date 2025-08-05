import { useState } from "react";

import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import EmailField from "@/components/auth/EmailField";
import PasswordField from "@/components/auth/PasswordField";
import RememberMeField from "@/components/auth/RememberMeField";
import Copyright from "@/components/Copyright";

import { db } from "@/db";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Login() {
  const navigate = useNavigate();

  const [, setCurrentUser] = useLocalStorage<string | null>("CURRENT_USER", null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const user = await db.users.get({ email, password });

    if (user) {
      setCurrentUser(user.id);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <Typography variant="h2" sx={{ color: "primary.main", mt: 4, mb: 8 }}>Login</Typography>
      <Card sx={{
        width: '100%',
        maxWidth: "md",
        padding: 2,
        boxShadow: 3,
        backgroundColor: 'background.paper'
      }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h4" sx={{ mb: 8 }}>
            Login
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
    </>
  );
}