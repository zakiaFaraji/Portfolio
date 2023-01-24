import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SCustomPhotoList from '../../components/CustomPhotoList/SCustomPhotoList';
import {useNavigation} from '@react-navigation/native';

const SwitzerlandPhotoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Switzerland</Text>
      <Text stye={styles.text2}>Here is a set of Photos from Switzerland</Text>
      <SCustomPhotoList />
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

export default SwitzerlandPhotoListScreen;
