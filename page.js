import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { AppBar, Button, Container, Toolbar, Typography as MuiTypography,Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

import Head from "next/head";
export default function Home() {
  return (
    <Container maxwidth="lg">
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{flexGrow: 1}}>
      VS Flashcard 
    </Typography>
    <SignedOut>
      <Button color="inherit" href="/sign-in">Login</Button>
      <Button color="inherit" href="/sign-up">Sign Up</Button>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </Toolbar>
</AppBar>

<Box sx={{textAlign: 'center', my: 4}}>
  <Typography variant="h2" component="h1" gutterBottom>
    Welcome to VS Flashcards
  </Typography>
  <Typography variant="h5" component="h2" gutterBottom>
    The easiest way to create flashcards from your text.
  </Typography>
  <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
    Get Started
  </Button>
  <Button variant="outlined" color="primary" sx={{mt: 2}}>
    Learn More
  </Button>
  </Box>
  <Box>
  <Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4}>
    <Card>
    <CardMedia
  component="img"
  height="140"
  image="https://via.placeholder.com/300x140.png?text=Instant+Setup"
  alt="Instant Setup"
/>

      <CardContent>
        <Typography variant="h5" component="div">
          Instant Setup
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Get started in minutes with our easy-to-use interface. No complex setup required.
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card>
    <CardMedia
  component="img"
  height="140"
  image="https://via.placeholder.com/300x140.png?text=AI-Powered+Insights"
  alt="AI-Powered Insights"
/>

      <CardContent>
        <Typography variant="h5" component="div">
          AI-Powered Insights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Leverage cutting-edge AI to gain actionable insights and improve decision-making.
        </Typography>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card>
    <CardMedia
  component="img"
  height="140"
  image="https://via.placeholder.com/300x140.png?text=24/7+Support"
  alt="24/7 Support"
/>

      <CardContent>
        <Typography variant="h5" component="div">
          24/7 Support
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Our dedicated support team is available around the clock to assist you.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</Box>
<Box>
<Typography variant="h4" component="h2" gutterBottom>
  Pricing
</Typography>
<Grid container spacing={4} justifyContent="center">
  <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Basic Plan
        </Typography>
        <MuiTypography variant="h4" component="div" gutterBottom>
          $19/month
        </MuiTypography>
        <Typography variant="body2" color="text.secondary">
          Ideal for individuals or small teams.
        </Typography>
        <ul>
          <li>10 GB Storage</li>
          <li>Basic Support</li>
          <li>Access to Core Features</li>
        </ul>
        <Button variant="contained" color="primary" sx={{mt:2}}>
        Choose pro
        </Button>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Pro Plan
        </Typography>
        <MuiTypography variant="h4" component="div" gutterBottom>
          $49/month
        </MuiTypography>
        <Typography variant="body2" color="text.secondary">
          Perfect for growing businesses.
        </Typography>
        <ul>
          <li>50 GB Storage</li>
          <li>Priority Support</li>
          <li>Advanced Features</li>
        </ul>
        <Button variant="contained" color="primary" sx={{mt:2}}>
          Choose pro
        </Button>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Enterprise Plan
        </Typography>
        <MuiTypography variant="h4" component="div" gutterBottom>
          $99/month
        </MuiTypography>
        <Typography variant="body2" color="text.secondary">
          Tailored solutions for large organizations.
        </Typography>
        <ul>
          <li>Unlimited Storage</li>
          <li>24/7 Support</li>
          <li>Custom Integrations</li>
        </ul>
        <Button variant="contained" color="primary" sx={{mt:2}}>
         Choose Enterprise
        </Button>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</Box>
    </Container>
  );
}
