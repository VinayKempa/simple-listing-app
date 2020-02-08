import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';

const MyNavigator = createStackNavigator({
    First: FirstScreen,
    Second: SecondScreen
});

export default createAppContainer(MyNavigator);