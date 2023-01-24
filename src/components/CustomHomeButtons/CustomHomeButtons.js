import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HomeButton = ({image, value, onPress}) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'White',
  },
  button: {
    backgroundColor: '#f2f2f2',
    width: 130,
    height: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 80,
    height: 90,
    resizeMode: 'contain',
    //marginRight: 43,
    //position: 'absolute',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default HomeButton;
