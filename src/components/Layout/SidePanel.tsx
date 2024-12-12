```typescript
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          bgcolor: 'background.paper',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        }
      }}
    >
      <Box sx={{ p: 2, mt: '64px' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h6">
            Projects
          </Typography>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List>
          <ListItem
            secondaryAction={
              <Box>
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            }
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Project 1"
              secondary="Created: 2024-01-01"
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SidePanel;
```
