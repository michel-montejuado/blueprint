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

export default function Home() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const id = await db.users
      .add({
        id: crypto.randomUUID(),
        email,
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    localStorage.setItem("CURRENT_USER", id);

    navigate("/");
  }

  return (
    <>
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
    </>
  );
}