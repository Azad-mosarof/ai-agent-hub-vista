
import { 
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme
} from '@mui/material';
import {
  Psychology,
  Group,
  Build,
  Message,
  Code,
  AutoAwesome,
  BoltOutlined
} from '@mui/icons-material';

export default function Index() {
  const theme = useTheme();

  const stats = [
    { title: "AI Agents Created", value: "1000+", icon: <Psychology /> },
    { title: "Active Users", value: "5000+", icon: <Group /> },
    { title: "Available Tools", value: "50+", icon: <Build /> },
    { title: "Messages Handled", value: "1M+", icon: <Message /> }
  ];

  const features = [
    {
      title: "Knowledge Base",
      description: "Train your AI agents with custom knowledge bases and documentation.",
      icon: <Psychology />
    },
    {
      title: "Visual Builder",
      description: "Drag and drop interface to design your agent's conversation flow.",
      icon: <AutoAwesome />
    },
    {
      title: "Tool Integration",
      description: "Connect your agents to external tools and services seamlessly.",
      icon: <BoltOutlined />
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #9b87f5 30%, #7E69AB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Build AI Agents with No Code
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 4 }}
              >
                Create, deploy, and manage intelligent AI agents for your business needs. No coding required.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  bgcolor: '#9b87f5',
                  '&:hover': {
                    bgcolor: '#7E69AB'
                  }
                }}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                p: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Code sx={{ fontSize: 200, color: '#9b87f5' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box 
                    sx={{ 
                      mb: 2,
                      display: 'inline-flex',
                      p: 1,
                      borderRadius: 1,
                      bgcolor: '#F1F0FB'
                    }}
                  >
                    {React.cloneElement(stat.icon, { sx: { fontSize: 40, color: '#9b87f5' } })}
                  </Box>
                  <Typography variant="h4" component="div" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography color="text.secondary">
                    {stat.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Everything You Need to Build AI Agents
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Powerful tools and features to create sophisticated AI agents without writing code.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.2s',
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box 
                      sx={{ 
                        mb: 2,
                        display: 'inline-flex',
                        p: 1,
                        borderRadius: 1,
                        bgcolor: '#F1F0FB'
                      }}
                    >
                      {React.cloneElement(feature.icon, { sx: { fontSize: 40, color: '#9b87f5' } })}
                    </Box>
                    <Typography variant="h5" component="div" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 8,
          background: 'linear-gradient(45deg, #9b87f5 30%, #7E69AB 90%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Ready to Build Your AI Agent?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Get started for free and join thousands of businesses using our platform.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                View Demo
              </Button>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#9b87f5',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                Start Building
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
