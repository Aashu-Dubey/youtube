import React from 'react';
import ToolbarAnimated from './src/animatedToolbar/ToolbarAnimated';
import ColorSwatch from './src/colorSwatch/ColorSwatchAnimated';
import Config from './src/Config';

let Toolbar: typeof React.Component;
let SwatchReanimated: typeof React.Component;

const App = () => {
  if (Config.isDesktop) {
    return <ToolbarAnimated />;
    // return <ColorSwatch />;
  } else {
    /**
     * Only importing reanimated solution if platform is not desktop (Android, iOS & Web)
     * mainly because reanimated doesn't work on macos & windows and was throwing exception on macos,
     * even on conditional rendering, so this is a workaround to fix that.
     */
    Toolbar = require('./src/animatedToolbar/ToolbarReanimated').default;
    SwatchReanimated = require('./src/colorSwatch/ColorSwatch').default;
  }
  return <Toolbar />;
  // return <SwatchReanimated />;
};

export default App;
