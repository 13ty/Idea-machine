```typescript
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button 
} from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        mt: 8 
      }}>
        <Typography variant="h4" gutterBottom>
          AI App Idea Generator
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Describe your app idea..."
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary">
          Generate Ideas
        </Button>
      </Box>
    </Container>
  );
}

export default App;
```
