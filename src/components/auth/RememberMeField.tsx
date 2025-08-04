import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export type RememberMeFieldProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export default function RememberMeField({ checked, setChecked }: RememberMeFieldProps) {
  return (
    <FormControlLabel
      control={<Checkbox id="remember" checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
      label="Remember Me"
    />
  );
}
