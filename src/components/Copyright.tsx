import { Link as RouterLink } from "react-router";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const COPYRIGHT_YEAR = 2025;

function getCopyrightYear() {
  return new Date().getFullYear() === COPYRIGHT_YEAR ? COPYRIGHT_YEAR : `${COPYRIGHT_YEAR} - ${new Date().getFullYear()}`;
}

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        mt: "auto",
        mx: 'auto',
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        textAlign: 'center',
        padding: '16px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        boxShadow: (theme) => theme.shadows[1],
        maxWidth: 'xl',
        '& a': {
          color: 'primary.main',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      }}
    >
      {'Copyright © '}
      {getCopyrightYear()}
      {' • '}
      <Link color="inherit" component={RouterLink} to="/">
        Blueprint
      </Link>
    </Typography>
  );
}