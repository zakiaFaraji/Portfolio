import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CustomPhotos = ({image, value, onPress}) => {
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
    width: 160,
    height: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 140,
    height: 130,
    resizeMode: 'contain',
    //marginRight: 43,
    //position: 'absolute',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default CustomPhotos;
