import { Text } from 'react-native'
import React from 'react'

export default function AppText(props) {
  return (
    <Text style={{...{fontFamily: "regular"}, ...props.style} }>
        {props.children}
    </Text>
  );
};

