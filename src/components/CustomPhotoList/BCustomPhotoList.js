import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HomeButton from '../CustomHomeButtons/CustomHomeButtons';
import {useNavigation} from '@react-navigation/native';
import CustomPhotos from '../CustomPhotos/CustomPhotos';
import {} from 'react-native-safe-area-context';

const HomeButtonList = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('BPhotoDetail')}
          image={require('../../../assets/images/photos-belgique/belgique1.jpg')}
          value="Atomium"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-belgique/belgique2.jpg')}
          value=" Notre Dame"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-belgique/belgique3.jpg')}
          value="Musée"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-belgique/belgique4.jpg')}
          value="Anvers"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-belgique/belgique5.jpg')}
          value="Bruxelles"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-belgique/belgique6.jpg')}
          value="Bruxelles"
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default HomeButtonList;
