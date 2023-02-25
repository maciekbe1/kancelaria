import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        mb: 15,
        inset: 0,
      }}
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        priority
      />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: 600,
            }}
          >
            Kancelarie radców prawnych
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
