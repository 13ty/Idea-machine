import React, { useState } from 'react';
import { Box } from '@mui/material';
import FloatingContainer from './FloatingContainer';
import IdeaInput from './IdeaInput';
import ResponseDisplay from './ResponseDisplay';
import { ModelConfig, PerformanceMetrics, ResponseSegment } from '../types';
import { ModelService } from '../services/ModelService';
import SettingsPanel from './SettingsPanel';

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
    console.log('Adding segment:', segment);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <FloatingContainer onSettingsOpen={() => setIsSettingsOpen(true)}>
        <IdeaInput onSubmit={handleGenerate} />
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
