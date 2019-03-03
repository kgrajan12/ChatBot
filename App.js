import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import ChatBot from 'react-native-chatbot';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    fontSize: 25
  }
});

const steps = [
  {
    id: '1',
    message: 'hello how are you?',
    trigger: '2'
  },
  {
    id: '2',
    message: 'SUBSCRIBE to TekNik GG',
    trigger: '3'
  },
  {
    id: '3',
    user: true,
    trigger: '4' //this step calls
  },
  {
    id: '4',
    message: "about this video is asking by Brian Brian Am i correct?",
    trigger: '5'
  },
  {
    id: '5',
    options: [
      { value: 'yes', label: 'yes', trigger: '6' },
      { value: 'no', label: 'no', trigger: '7' }
    ]
  },
  {
    id: '6',
    message: 'You choose yes!!!',
    trigger: ({ value, steps }) => {
      if(steps['8'] === undefined) {
        return '8';
      } else {
        return '9';
      }
    }
  },
  {
    id: '7',
    message: 'You choose no!!!',
    trigger: '8'
  },
  {
    id: '8',
    message: 'can we move to next custom component',
    trigger: '5'
  },
  {
    id: '9',
    component: <Image source={require('./teknikgg.png')} style={{ width: 300, height: 180 }} />,
    trigger: '10'
  },
  {
    id: '10',
    message: 'ThankYou For Watching...',
    end: true
  }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <ChatBot steps={steps} />
      </View>
    );
  }
}