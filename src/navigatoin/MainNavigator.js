import {createDrawerNavigator} from 'react-navigation';
import DrawerContentComponent from '../screens/drawer/Drawer';
import {createStackNavigator} from 'react-navigation-stack';

const MainStack = createStackNavigator({
  FirstScreen: {
    screen: FirstScreenComponent,
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MainStack,
  },
  {
    contentComponent: DrawerContentComponent,
  },
);

export default MainNavigator;
