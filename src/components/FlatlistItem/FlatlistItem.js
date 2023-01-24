/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

const FlatlistItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, {width}]}>
      <AntDesign name="hearto" size={30} color="black" />
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.4}}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity type="Primary" style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whiteS',
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    objectFit: 'cover',
    //marginTop: -150,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 1,
    //marginTop: -300,
    color: '#26474E',
    textAlign: 'center',
  },
  description: {
    fontWeight: '500',
    color: '#1C2942',
    textAlign: 'center',
    paddingHorizontal: 64,
    //marginTop: -10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 30,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    width: 200,
    height: 50,
    alignContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FlatlistItem;
