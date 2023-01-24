import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import img from '../../../assets/images/homeflatlist/1.png';
import HomeFlatlist from '../../components/HomeFlatlist/HomeFlatlist';

const HomeScreen = () => {
  return <HomeFlatlist />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
  },
  logo: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
