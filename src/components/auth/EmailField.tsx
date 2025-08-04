import TextField from "@mui/material/TextField";

function ValidateEmail(mail: string): boolean {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true);
  }
  return (false);
}

export type EmailFieldProps = {
  email: string;
  setEmail: (email: string) => void;
};

export default function EmailField({ email, setEmail }: EmailFieldProps) {
  return (
    <TextField
      id="email"
      label="Email"
      size="small"
      fullWidth
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={!ValidateEmail(email)}
      helperText={!ValidateEmail(email) ? "Invalid email address" : ""}
      aria-describedby="email-error-text"
      sx={{ mb: 2 }}
    />
  );
}