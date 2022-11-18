import { Platform } from 'react-native';

export default {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isWeb: Platform.OS === 'web',
  isWindows: Platform.OS === 'windows',
  isDesktop: Platform.OS === 'macos' || Platform.OS === 'windows',
};
