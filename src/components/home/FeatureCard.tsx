import { Link as RouterLink } from "react-router";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from "@mui/material/Typography";

export type IguanaCardProps = {
  title: string;
  image: string;
  description: string;
  to: string;
};

export default function IguanaCard({ title, image, description, to }: IguanaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={RouterLink} to={to}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
