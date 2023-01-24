import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HomeButton from '../CustomHomeButtons/CustomHomeButtons';
import {useNavigation} from '@react-navigation/native';

const HomeButtonList = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <HomeButton
        onPress={() => {
          navigation.navigate('Morocco');
        }}
        image={require('../../../assets/images/flags/maroc.png')}
        value="Morroco"
      />
      <HomeButton
        onPress={() => navigation.navigate('France')}
        image={require('../../../assets/images/flags/france.png')}
        value="France"
      />
      <HomeButton
        onPress={() => navigation.navigate('Belgium')}
        image={require('../../../assets/images/flags/belgique.png')}
        value="Belgium"
      />
      <HomeButton
        onPress={() => navigation.navigate('Switzerland')}
        image={require('../../../assets/images/flags/suisse.png')}
        value="Switzerland"
      />
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
  },
});

export default HomeButtonList;
