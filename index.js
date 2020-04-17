/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './screen/splash'
import Login from './screen/Login'

AppRegistry.registerComponent(appName, () => Login);
