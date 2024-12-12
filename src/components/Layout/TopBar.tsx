```typescript
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Chip
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import { PerformanceMetrics, ModelConfig } from '../../types';

interface TopBarProps {
  metrics: PerformanceMetrics | null;
  modelConfig: ModelConfig;
  onSettingsClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  metrics,
  modelConfig,
  onSettingsClick
}) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI App Idea Generator
        </Typography>

        {metrics && (
          <Box sx={{ display: 'flex', gap: 2, mr: 3 }}>
            <Chip
              icon={<SpeedIcon />}
              label={`${metrics.wordsPerMinute} WPM`}
              color="secondary"
            />
            <Chip
              label={`Words: ${metrics.wordCount}`}
              variant="outlined"
            />
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            label={`Model: ${modelConfig.modelName}`}
            color="primary"
            variant="outlined"
          />
          <IconButton 
            color="inherit"
            onClick={onSettingsClick}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
```
