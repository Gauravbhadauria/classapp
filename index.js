/**
 * @format
 */

import {AppRegistry, Button, FlatList, FlatListComponent} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatlistDemo from './FlatlistDemo';
import WelcomeIntro from './WelcomeIntro';
import FlatListDemo2 from './FlatListDemo2';
import TextFlatlistDemo from './TextFlatlistDemo';
import InputDemo from './InputDemo';
import OTPDemo from './OTPDemo';
import Buttons from './Buttons';
import Buttons2 from './Buttons2';
import Modals from './Modals';

AppRegistry.registerComponent(appName, () => Modals);
