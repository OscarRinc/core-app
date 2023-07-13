import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './View/home';
import FirstFrontStack from 'fisrt-micro';
import FirstFrontView from 'fisrt-micro/src/View/NextT';

const Stack = createNativeStackNavigator();

function NewStack() {
  const [sign, setSign] = useState(true);

  if (sign) {
    return <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeView}
        initialParams={{ setSign }}
      />
      <Stack.Screen
        name="NextT"
        component={FirstFrontView}
      />
    </Stack.Navigator>;
  } else {
    return <FirstFrontStack />;
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <NewStack />
    </NavigationContainer>
  );
}