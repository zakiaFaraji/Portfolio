/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import Welcome from '../../../assets/images/Wemcomep.png';
import HomeButton from '../../components/CustomHomeButtons/CustomHomeButtons';
import {useNavigation} from '@react-navigation/native';
import HomeButtonList from '../../components/HomeButtonList/HomeButtonList';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={Welcome}
        style={[styles.logo, {width, resizeMode: 'contain'}]}
      />
      <Text style={styles.text}>Welcome to My portfolio</Text>
      <Text style={styles.text2}>
        Here is a set of Photos from different Countries i took
      </Text>
      <HomeButtonList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
  },
  logo: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default WelcomeScreen;
