/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import firestore from '@react-native-firebase/firestore';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
const App: () => Node = () => {
  const [rating, setRating] = React.useState(3);
  const [review, setReview] = React.useState('');
  handleSubmit = () => {
    if (rating <= 3) {
      AddData();
    }
    else {
      Linking.openURL("http://play.google.com/store/apps/details?id=com.instasell.android")
    }
  };
  function AddData() {
    const ref = firestore().collection('ratings');
    ref.add({
      rating: rating,
      review: review,
    });
    alert('Thank you for your review');
    setReview('');
  }
  return (
    <View style={styles.MainContainer}>
      <AirbnbRating
        count={5}
        reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
        defaultRating={0}
        size={30}
        onFinishRating={rating => setRating(rating)}
      />
      {rating <= 3 ? <TextInput
        style={styles.input}
        value={review}
        onChangeText={text => setReview(text)}
        multiline={true}
        placeholder="Write your review here"
        underlineColorAndroid="transparent"
      /> : null}
      <TouchableOpacity style={styles.ButtonContainer} onPress={handleSubmit} >
        <Text style={styles.buttonText}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',

  },
  ButtonContainer: {
    marginLeft: '20%',
    marginTop: '5%',
    width: '60%',
    height: 50,
    alignContent: 'center',
    backgroundColor: '#FFC300',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  input: {
    width: '80%',
    height: 100,
    borderColor: '#FFC300',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    alignContent: 'center',
    marginLeft: '10%',
    justifyContent: 'center',
  },

});

export default App;
