import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Button, TextInput} from 'react-native';

type CreatePostNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreatePost'
>;
type CreatePostRouteProp = RouteProp<RootStackParamList, 'CreatePost'>;

interface CreatePostParams {
  navigation: CreatePostNavigationProp;
  route: CreatePostRouteProp;
}

function CreatePost({navigation, route}: CreatePostParams) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
}

export default CreatePost;
