/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Dimensions, TouchableWithoutFeedback} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const {width} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      left: new Animated.Value(-width)
    };
  }
 
  // onSwipeUp(gestureState) {
  //   this.setState({myText: 'You swiped up!'});
  // }
 
  // onSwipeDown(gestureState) {
  //   this.setState({myText: 'You swiped down!'});
  // }
 
  onSwipeLeft(gestureState) {
    Animated.timing(
      this.state.left,
      {
        toValue: -width,
        duration: 300
      }
    ).start();
  }
 
  onSwipeRight(gestureState) {
    Animated.timing(
      this.state.left,
      {
        toValue: 0,
        duration: 300
      }
    ).start();
  }
 
  // onSwipe(gestureName, gestureState) {
  //   const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
  //   this.setState({gestureName: gestureName});
  //   switch (gestureName) {
  //     case SWIPE_UP:
  //       this.setState({backgroundColor: 'red'});
  //       break;
  //     case SWIPE_DOWN:
  //       this.setState({backgroundColor: 'green'});
  //       break;
  //     case SWIPE_LEFT:
  //       this.setState({backgroundColor: 'blue'});
  //       break;
  //     case SWIPE_RIGHT:
  //       this.setState({backgroundColor: 'yellow'});
  //       break;
  //   }
  // }
 
  render() {
    
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        // onSwipe={(direction, state) => this.onSwipe(direction, state)}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Animated.View style={{ elevation: 4, width: width*3/4, position: 'absolute', top: 0, bottom: 0, left: this.state.left, backgroundColor: 'red' }}>

        </Animated.View>
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
