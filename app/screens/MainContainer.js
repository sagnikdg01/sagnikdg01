import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';

//Screens
import HomeScreen from './HomeScreen';
import AnalysisScreen from './AnalysisScreen';
import ColabScreen from './ColabScreen';
import RewardsScreen from './RewardScreen';
import BusinessScreen from './BusinessScreen';

const homeName = 'Home';
const analysisName = 'Analysis';
const colabName = 'Colaborate';
const rewardsName = 'Rewards';
const businessName = 'Business';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarStyle: {position: 'absolute', elevation: 0, borderTopWidth: 0, paddingTop: 8, paddingBottom:12,height:62},
        tabBarBackground: () => (
          <View style={{height:100, width:'100%',borderRadius:20,overflow:'hidden'}}>
                <BlurView
                blurType='dark'
                blurAmount={10}
                style={{height:'100%',width:'100%',position:'absolute'}}            
                />
          </View>
        ),
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === analysisName) {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === colabName) {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === rewardsName) {
            iconName = focused ? 'gift' : 'gift-outline';
          } else if (route.name === businessName) {
            iconName = focused ? 'business' : 'business-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'white',
      })}>
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={analysisName} component={AnalysisScreen} />
      <Tab.Screen name={colabName} component={ColabScreen} />
      <Tab.Screen name={rewardsName} component={RewardsScreen} />
      <Tab.Screen name={businessName} component={BusinessScreen} />
    </Tab.Navigator>
  );
}
export default MainContainer;

// import React, {useState} from 'react';
// import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
// import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// StatusBar.setBarStyle('dark-content');

// const Main_Container = props => {
//   const [type, setType] = useState('down');

//   const onClickButton = () => {
//     if (type === 'up') {
//       setType('down');
//       // alert('Change type curve down');
//     } else {
//       setType('up');
//       // alert('Change type curve up');
//     }
//   };

//   const _renderIcon = (routeName, selectTab) => {
//     let icon = '';

//     switch (routeName) {
//       case homeName:
//         icon = 'ios-home-outline';
//         break;
//       case analysisName:
//         icon = 'apps-outline';
//         break;
//       case colabName:
//         icon = 'bar-chart-outline';
//         break;
//       case rewardsName:
//         icon = 'person-outline';
//         break;

//     }

//     return (
//       <Ionicons
//         name={icon}
//         size={23}
//         color={routeName === selectTab ? '#FF3030' : 'gray'}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <CurvedBottomBar.Navigator
//         style={[type === 'down' && {backgroundColor: '#F5F5F5'}]}
//         type={type}
//         height={60}
//         circleWidth={55}
//         bgColor="white"
//         borderTopLeftRight={true}
//         initialRouteName={homeName}
//         renderCircle={() => (
//           <TouchableOpacity
//             style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]}
//             onPress={onClickButton}>
//             <Ionicons name="chatbubbles-outline" size={23} />
//           </TouchableOpacity>
//         )}
//         tabBar={({routeName, selectTab, navigation}) => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation(routeName)}
//               style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//               {_renderIcon(routeName, selectTab)}
//             </TouchableOpacity>
//           );
//         }}>
//         <CurvedBottomBar.Screen
//           name={homeName}
//           position="left"
//           component={HomeScreen}
//         />
//         <CurvedBottomBar.Screen
//           name={analysisName}
//           component={AnalysisScreen}
//           position="left"
//         />
//         <CurvedBottomBar.Screen
//           name={colabName}
//           component={ColabScreen}
//           position="right"
//         />
//         <CurvedBottomBar.Screen
//           name={rewardsName}
//           component={RewardsScreen}
//           position="right"
//         />
//       </CurvedBottomBar.Navigator>
//     </View>
//   );
// };

// export default Main_Container;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//     bottom: 28,
//   },
//   btnCircleUp: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8E8E8',
//     bottom: 18,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: '#48CEF6',
//   },
//   img: {
//     width: 30,
//     height: 30,
//   },
// });
