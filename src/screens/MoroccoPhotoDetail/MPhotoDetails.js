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
import Photo from '../../../assets/images/photos-maroc/maroc1.jpg';

const MoroccoPhotoDetailScreen = () => {
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
          <Text style={styles.text}>Oujda</Text>
          <Text style={styles.text2}>Visited on the 02/10/2019</Text>
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
        capital of eastern Morocco, capital of the Masjids (mosques), or the
        millennial city, is one of the oldest cities in Morocco. Located in the
        center of the Angad Plain, in the northeast of the country, bordered to
        the north by the Béni-Snassen mountains and to the east by Algeria.
        Oujda was founded by the Zenetic Berber leader Ziri Ibn Attia, around
        994.
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

export default MoroccoPhotoDetailScreen;
