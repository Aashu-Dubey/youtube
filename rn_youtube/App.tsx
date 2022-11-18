import React from 'react';
import ToolbarReanimated from './src/animatedToolbar/ToolbarReanimated';
import ToolbarAnimated from './src/animatedToolbar/ToolbarAnimated';
import Config from './src/Config';

const App = () => {
  return Config.isDesktop ? <ToolbarAnimated /> : <ToolbarReanimated />;
};

export default App;
