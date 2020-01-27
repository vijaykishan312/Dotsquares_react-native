import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./Screen/HomeScreen";
import WellComeScreen from './Screen/WelcomScreen';

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    WelComeScreen : {
      screen: WellComeScreen
    }
  });
  
  export default createAppContainer(AppNavigator);