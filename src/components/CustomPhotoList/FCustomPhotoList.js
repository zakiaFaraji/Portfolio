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
          onPress={() => navigation.navigate('FPhotoDetail')}
          image={require('../../../assets/images/photos-france/france1.jpg')}
          value="Louvre"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-france/france2.jpg')}
          value=" hta nswl"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-france/france3.jpg')}
          value="Sacre Coeur"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-france/france4.jpg')}
          value="Annecy"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-france/france6.jpg')}
          value="Tour Eiffel"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-france/france5.jpg')}
          value="Strabourg"
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
