// setimmediate is added only for react-native-gesture-handler,
// as gesture-handler's GestureDetector was causing error related to setimmediate.
import 'setimmediate';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Generate required css
import materialiconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

const iconFontStyles = `@font-face {
  font-family: MaterialIcons;
  src: url(${materialiconFont});
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
