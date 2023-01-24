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
          onPress={() => navigation.navigate('SPhotoDetail')}
          image={require('../../../assets/images/photos-suisse/suisse1.jpg')}
          value="Lak Geneva"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-suisse/suisse2.jpg')}
          value="Beoken chair"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-suisse/suisse3.jpg')}
          value="Bern"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-suisse/suisse4.jpg')}
          value="The founders"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-suisse/suisse5.jpg')}
          value="Lak Geneva"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-suisse/suisse6666.jpg')}
          value="Lausanne"
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
