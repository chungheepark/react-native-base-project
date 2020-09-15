import {Button, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

function Details({navigation, route}: DetailsScreenProps) {
  const {id, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            id: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {})}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Details;
