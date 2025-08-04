import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function ValidatePassword(password: string): boolean {
  if (/^(?=.*).{16,}$/.test(password)) {
    return (true);
  }
  return (false);
}

export type PasswordFieldProps = {
  password: string;
  setPassword: (password: string) => void;
};

export default function PasswordField({ password, setPassword }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label="Password"
      id="password"
      type={showPassword ? "text" : "password"}
      size="small"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      error={!ValidatePassword(password)}
      helperText={!ValidatePassword(password) ? "Invalid password" : ""}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      }}
    />
  )
}
