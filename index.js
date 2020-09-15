import {AppRegistry} from 'react-native';
import App from 'src/App';
import {name as appName} from './app.json';

// React-Navigation 사용시 gesture-handler를 앱 로딩 초기에 로딩해주어야 한다
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
