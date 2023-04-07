import {StatusBar} from 'expo-status-bar';
import {React, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from 'native-base';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '../auth';
//import { alignContent, flex, flexDirection, width } from 'styled-system';
// Import the functions you need from the SDKs you need
// import { getAuth,createUserWithEmailAndPassword }  from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWyMY6GuKK1b5rltm6fQcu6FIey48fi08",
//   authDomain: "nfluence-score.firebaseapp.com",
//   projectId: "nfluence-score",
//   storageBucket: "nfluence-score.appspot.com",
//   messagingSenderId: "134443113899",
//   appId: "1:134443113899:web:5fef9ba0a7aa6de92a06ee",
//   measurementId: "G-9387TCRHRQ"
// };

function Signup() {
  const navigation = useNavigation();
  const [userName, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const handleSignup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        alert('Sign Up Successful ');
        navigation.goBack();
      })
      .catch(error => console.log(error.message));

    //  }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle1}>
        <Image
          source={require('../components/icon.png')}
          alt="image"
          //resizeMode="cover"
          style={{height: 100, width: 100}}
        />
        <Text style={styles.LoginText}>Signup</Text>
      </View>
      <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signupText}> Login </Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            value={userName}
            onChangeText={text => setusername(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            variant="outline"
            placeholder="Username"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
        </View>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            variant="outline"
            placeholder="Email"
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
            value={password}
            onChangeText={text => setPassword(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
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

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            value={confirmPassword}
            onChangeText={text => setconfirmPassword(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Confirm Password"
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
        <Button
          onPress={() => {
            if (userName != null && password === confirmPassword) {
              handleSignup();
            } else {
              alert('Password didnot match ');
            }
          }}
          style={styles.buttonDesign}>
          REGISTER NOW
        </Button>
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
          // onPress={() => navigation.navigate("#")}  // for navigation
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
          //onPress={() => navigation.navigate("#")}  // for navigation
          style={[styles.imageStyle, {height: 43, width: 43}]}>
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
          //onPress={() => navigation.navigate("#")}  // for navigation
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
      <Signup />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    paddingTop: 20,
    //marginTop:100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Middle1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
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
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
});
