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
          onPress={() => navigation.navigate('MPhotoDetail')}
          image={require('../../../assets/images/photos-maroc/maroc1.jpg')}
          value="Oujda"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-maroc/maroc2.jpg')}
          value="Folklore"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-maroc/maroc3.jpg')}
          value="Couscous"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-maroc/maroc4.jpg')}
          value="Palmier dattier"
        />
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-maroc/maroc5.png')}
          value="Ancienne ville"
        />
        <CustomPhotos
          onPress={() => navigation.navigate('Home')}
          image={require('../../../assets/images/photos-maroc/maroc6.png')}
          value="Boulevard"
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
