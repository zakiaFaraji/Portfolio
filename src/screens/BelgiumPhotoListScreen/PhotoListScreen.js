import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BCustomPhotoList from '../../components/CustomPhotoList/BCustomPhotoList';
import {useNavigation} from '@react-navigation/native';

const BelgiumPhotoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Belgium</Text>
      <Text stye={styles.text2}>Here is a set of Photos from Belgium</Text>
      <BCustomPhotoList />
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

export default BelgiumPhotoListScreen;
