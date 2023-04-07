// import {StatusBar} from 'expo-status-bar';
// import MainContainer from './MainContainer';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import {
  Input,
  NativeBaseProvider,
  Button,
  Box,
  Image,
  AspectRatio,
} from 'native-base';
// import {FontAwesome5} from '@expo/vector-icons';
// import {useNavigation} from '@react-navigation/native';
//import { alignContent, flex, flexDirection, width } from 'styled-system';

function LoginScreen() {
  //   const navigation = useNavigation();

  const loginHandler = () => {
    // navigation.navigate('MainContainer');
    alert('Successfully logged in!!!!');
  };

  const Signup_handler = () => {
    // navigation.navigate('SignupScreen');
    console.log('came to signup screen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle1}>
        <Image
          source={require('../components/icon.png')}
          alt="image"
          //resizeMode="cover"
          style={{height: 150, width: 150}}
        />
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={Signup_handler}>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            // InputLeftElement={
            //   <Icon
            //     as={<FontAwesome5 name="user-secret" />}
            //     size="sm"
            //     m={2}
            //     _light={{
            //       color: 'black',
            //     }}
            //     _dark={{
            //       color: 'gray.300',
            //     }}
            //   />
            // }
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            // InputLeftElement={
            //   <Icon
            //     as={<FontAwesome5 name="key" />}
            //     size="sm"
            //     m={2}
            //     _light={{
            //       color: 'black',
            //     }}
            //     _dark={{
            //       color: 'gray.300',
            //     }}
            //   />
            // }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </View>
      </View>

      {/* Button */}

      <View style={styles.buttonStyle}>
        <TouchableHighlight>
          <Button onPress={loginHandler} style={styles.buttonDesign}>
            LOGIN
          </Button>
        </TouchableHighlight>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
        <Box
          //onPress={() => navigation.navigate("#")}  // for navigation
          style={{height: 45, width: 45}}>
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: 'https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          //onPress={() => navigation.navigate("#")}  // for navigation
          style={[styles.imageStyle, {height: 40, width: 40}]}>
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: 'https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          // onPress={() => navigation.navigate("#")}  // for navigation
          style={[styles.imageStyle, {height: 45, width: 45}]}>
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: 'https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate('#')} // for navigation
          style={[styles.imageStyle, {height: 40, width: 40}]}>
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: 'https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signupText: {
    fontWeight: 'bold',
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: '#000000',
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
  Middle1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },
});
