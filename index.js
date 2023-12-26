/**
 * @format
 */

import {AppRegistry, FlatList, FlatListComponent} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatlistDemo from './FlatlistDemo';
import WelcomeIntro from './WelcomeIntro';
import FlatListDemo2 from './FlatListDemo2';
import TextFlatlistDemo from './TextFlatlistDemo';
import InputDemo from './InputDemo';
import OTPDemo from './OTPDemo';

AppRegistry.registerComponent(appName, () => OTPDemo);
