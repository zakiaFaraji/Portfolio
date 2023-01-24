import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomPhotoList from '../../components/CustomPhotoList/CustomPhotoList';
import {useNavigation} from '@react-navigation/native';

const MoroccoPhotoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Morocco</Text>
      <Text stye={styles.text2}>Here is a set of Photos from Morocco</Text>
      <CustomPhotoList />
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

export default MoroccoPhotoListScreen;
