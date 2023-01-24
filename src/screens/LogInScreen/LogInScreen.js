import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import img from '../../../assets/images/homeflatlist/1.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onPressLogIn = () => {
    console.log('Log In');
    navigation.replace('Welcome');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={img} resizeMode="contain" />
      <Text style={styles.title}>
        You don't take a photographie, you make it ..
      </Text>
      <CustomInput
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      {/*<TextInput placeholder="Password" />*/}
      <CustomButton
        text="Log In"
        type="Primary"
        onPress={() => {
          onPressLogIn();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 18,
    //marginTop: -300,
    color: 'black',
  },
});

export default LogInScreen;
