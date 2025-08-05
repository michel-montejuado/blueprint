import { Link as RouterLink } from "react-router";

import { useLiveQuery } from "dexie-react-hooks";

import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import FeatureCard from "@/components/home/FeatureCard";

import { db } from "@/db";

export default function Home() {
  const isEmpty = useLiveQuery(async () => db.isEmpty(), [], true);

  if (isEmpty === undefined) {
    return <CircularProgress />;
  } else if (isEmpty) {
    return (
      <Typography variant="h6" sx={{ color: "text.secondary", mb: 4 }}>
        No data available. Please add some items to get started.
      </Typography>
    );
  } else {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h2" sx={{ color: "primary.main", mb: 2 }}>Welcome @ Blueprint</Typography>
        <Typography variant="h4" sx={{ color: "secondary.main", mb: 4 }}>
          Your blueprint for building modern web applications.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This is a starter template to help you kickstart your next project with a solid foundation.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Explore the components, customize the theme, and start building your application.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 16 }}>
          For more information, visit the
          {" "}
          <Link component={RouterLink} to="https://mui.com/" target="_blank" rel="noopener">
            MUI documentation
          </Link>.
        </Typography>
        <Grid container columns={12} spacing={4} justifyContent="center">
          {
            [{
              title: "Feature 1",
              image: "https://picsum.photos/seed/feature-1/300/200",
              description: "Description of Feature 1",
              to: "/feature1"
            }, {
              title: "Feature 2",
              image: "https://picsum.photos/seed/feature-2/300/200",
              description: "Description of Feature 2",
              to: "/feature2"
            }, {
              title: "Feature 3",
              image: "https://picsum.photos/seed/feature-3/300/200",
              description: "Description of Feature 3",
              to: "/feature3"
            }, {
              title: "Feature 4",
              image: "https://picsum.photos/seed/feature-4/300/200",
              description: "Description of Feature 4",
              to: "/feature4"
            }, {
              title: "Feature 5",
              image: "https://picsum.photos/seed/feature-5/300/200",
              description: "Description of Feature 5",
              to: "/feature5"
            }].map((feature, index) => (
              <Grid size={4} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    );
  }
}