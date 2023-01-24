import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FCustomPhotoList from '../../components/CustomPhotoList/FCustomPhotoList';
import {useNavigation} from '@react-navigation/native';

const FrancePhotoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to France</Text>
      <Text stye={styles.text2}>Here is a set of Photos from France</Text>
      <FCustomPhotoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
  },
});

export default FrancePhotoListScreen;
