import React from 'react';
import styled from 'styled-components/native';
import {TextProps} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Text = styled.Text<TextProps>`
  color: red;
`;

export default function () {
  return (
    <Container>
      <Text>WTF</Text>
    </Container>
  );
}
