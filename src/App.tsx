import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import DetailsScreen from '@screens/Details';
import CreatePostScreen from '@screens/CreatePost';
import ProfileScreen from '@screens/Profile';
import LogoTitle from '@components/LogoTitle';
import {Button} from 'react-native';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="CreatePost" component={CreatePostScreen} />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
