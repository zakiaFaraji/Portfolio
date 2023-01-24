/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Photo from '../../../assets/images/photos-belgique/belgique1.jpg';

const BelgiumPhotoDetailScreen = () => {
  const {width, height} = useWindowDimensions();

  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={Photo}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.sub}>
        <View>
          <Text style={styles.text}>The Atomium</Text>
          <Text style={styles.text2}>Visited on the 28/05/2022</Text>
        </View>
        <TouchableOpacity onPress={onLike} style={styles.button}>
          {liked ? (
            <AntDesign name="heart" size={30} color="red" />
          ) : (
            <AntDesign name="hearto" size={30} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.text3}>
        The Atomium was created by engineer André Waterkeyn and erected by
        architects André and Jean Polak for the 1958 Universal Exhibition in
        Brussels, Belgium. It has become, like the Manneken-Pis and the
        Grand-Place, a symbol of the capital of Belgium. Symbolically, the
        Atomium embodies the audacity of an era which wanted to confront the
        destiny of Humanity with scientific discoveries.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'White',
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
    //marginRight: 43,
    //position: 'absolute',
  },
  text: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 10,
  },
  text2: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 40,
    marginTop: 5,
  },
  text3: {
    color: 'black',
    fontSize: 15,
    marginLeft: 40,
    marginTop: 20,
    marginRight: 40,
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 50,
  },
});

export default BelgiumPhotoDetailScreen;
