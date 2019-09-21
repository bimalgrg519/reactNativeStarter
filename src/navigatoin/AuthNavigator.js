import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/authentication/Login';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthStack;
