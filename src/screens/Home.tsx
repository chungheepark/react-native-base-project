import {Button, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

function HomeScreen({navigation, route}: HomeScreenProps) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log('post updated:', route.params?.post);
    }
  }, [route.params?.post]);

  const onPressDetail = () =>
    navigation.navigate('Details', {id: 86, otherParam: 'anything'});

  const onPressProfile = () =>
    navigation.navigate('Profile', {name: 'Custom profile header'});

  const onPressUpdateTitle = () => navigation.setOptions({title: 'Updated!'});

  const onPressCreatePost = () => navigation.navigate('CreatePost');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Details" onPress={onPressDetail} />
      <Button title="Update the title" onPress={onPressUpdateTitle} />
      <Button title="Go to Profile" onPress={onPressProfile} />
      <Button title="Create post" onPress={onPressCreatePost} />
      <Text>Count: {count}</Text>
      {route.params?.post && (
        <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      )}
    </View>
  );
}

export default HomeScreen;
