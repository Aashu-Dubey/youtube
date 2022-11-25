import React from 'react';
import ToolbarAnimated from './src/animatedToolbar/ToolbarAnimated';
import Config from './src/Config';

let Toolbar: typeof React.Component;

const App = () => {
  if (Config.isDesktop) {
    return <ToolbarAnimated />;
  } else {
    /**
     * Only importing reanimated solution if platform is not desktop (Android, iOS & Web)
     * mainly because reanimated doesn't work on macos & windows and was throwing exception on macos,
     * even on conditional rendering, so this is a workaround to fix that.
     */
    Toolbar = require('./src/animatedToolbar/ToolbarReanimated').default;
  }
  return <Toolbar />;
};

export default App;
