import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './View/home';
import FirstFront from '../first-micro/src';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="NextT"
          component={FirstFront}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}