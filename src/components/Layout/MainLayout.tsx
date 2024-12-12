import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBar from './TopBar';
import SidePanel from './SidePanel';
import FloatingContainer from '../FloatingInterface/FloatingContainer';
import IdeaInput from '../Input/IdeaInput';
import ResponseDisplay from '../FloatingInterface/ResponseDisplay';
import { ResponseSegment, ModelConfig, PerformanceMetrics } from '../../types';
import { ModelService } from '../../services/ModelService';
import SettingsPanel from '../Settings/SettingsPanel';

interface MainLayoutProps {
  modelConfig: ModelConfig;
  onMetricsUpdate: (metrics: PerformanceMetrics) => void;
  onSettingsChange: (config: ModelConfig) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  modelConfig,
  onMetricsUpdate,
  onSettingsChange
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [segments, setSegments] = useState<ResponseSegment[]>([]);

  const handleGenerate = async (input: string) => {
    const modelService = new ModelService(modelConfig);
    const { segments, metrics } = await modelService.generate(input);
    setSegments(segments);
    onMetricsUpdate(metrics);
  };

  const handleAddSegment = (segment: ResponseSegment) => {
    // Handle adding segment to plan
    console.log('Adding segment:', segment);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <FloatingContainer onSettingsOpen={() => setIsSettingsOpen(true)}>
        <IdeaInput
          onSubmit={handleGenerate}
        />
        <ResponseDisplay
          segments={segments}
          onAddSegment={handleAddSegment}
        />
      </FloatingContainer>

      <SettingsPanel
        open={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSettingsChange={onSettingsChange}
      />
    </Box>
  );
};

export default MainLayout;
```
