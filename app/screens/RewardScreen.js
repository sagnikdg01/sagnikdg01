import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import PieChartExample from '../screens/pie_chart_style';
// import Ncoin_graph from '../screens/Ncoin_graph';
import * as Animatable from 'react-native-animatable';

import {Shadow} from 'react-native-shadow-2';

import {PieChart} from 'react-native-svg-charts';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProgressChart, LineChart} from 'react-native-chart-kit';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  AspectRatio,
} from 'native-base';
import {FontAwesome5} from '@expo/vector-icons';

import {SafeAreaView} from 'react-native-safe-area-context';


const data_line_chart = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],

      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ["nCOIN EARNINGS"] // optional
};
const screenWidth = Dimensions.get('window').width;


function Reward_screen(navigation) {
  const [Button, setButton] = useState(1);
  console.log(Button);

  //Animation

  const [NCOINanim, setNCOINanim] = useState(false);
  const [BADGEanim, setBADGEanim] = useState(false);
  const [COUPONanim, setCOUPONanim] = useState(false);

  const viewAnimation = useRef(null);
  // val [Delay,setDelay]=useState();
  const viewAnimation2 = useRef(null);
  const viewAnimation3 = useRef(null);

  //Animation for nCoin button
  useEffect(() => {
    const animation = async () => {
      if (Button === 1) {
        if (viewAnimation.current) await viewAnimation.current.zoomInDown(500);

        setNCOINanim(true);
      } else {
        if (NCOINanim) {
          if (viewAnimation.current) await viewAnimation.current.fadeOutUp(500);
          setNCOINanim(false);
        }
      }
    };

    animation();
    const animation2 = async () => {
      if (Button === 2) {
        if (viewAnimation2.current)
          await viewAnimation2.current.zoomInDown(500);

        setBADGEanim(true);
      } else {
        if (BADGEanim) {
          if (viewAnimation2.current)
            await viewAnimation2.current.fadeOutUp(500);
          setBADGEanim(false);
        }
      }
    };

    animation2();
    const animation3 = async () => {
      if (Button === 3) {
        if (viewAnimation3.current)
          await viewAnimation3.current.zoomInDown(500);
        setCOUPONanim(true);
      } else {
        if (COUPONanim) {
          if (viewAnimation3.current)
            await viewAnimation3.current.fadeOutUp(500);
          setCOUPONanim(false);
        }
      }
    };

    animation3();
  }, [Button, viewAnimation]);

  //           //Animation for Badges button
  // useEffect(()=>{

  //  },[Button, viewAnimation2])

  //         //Animation for Coupons button
  //  useEffect(()=>{

  //  },[Button, viewAnimation3])

  const [Ncoins, setNcoins] = useState(100);

  const [Coupon, setCoupon] = useState(2);

  // nCoin Screen

  const data = {
    labels: ['Web servers', 'Operating systems', 'Programming languages'], // optional
    data: [0.2, 0.6, 0.8],
    colors: [
      'rgba(255, 0, 0,0.5)',
      'rgba(238, 130, 238,0.6)',
      'rgba(106, 90, 205,0.5)',
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#D7E5E3',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 1) => `rgba(27,67, 50, ${opacity})`,
    // color: (opacity = 1) => `rgba(255,0,6, ${opacity})`
  };

  //Badges Screen
  //  const badge_arr=;

  const [Arr, setArr] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
  const [Badges, setBadges] = useState(
    Arr[0] +
      Arr[1] +
      Arr[2] +
      Arr[3] +
      Arr[4] +
      Arr[5] +
      Arr[6] +
      Arr[7] +
      Arr[8] +
      Arr[9] +
      Arr[10] +
      Arr[11] +
      Arr[12] +
      Arr[13] +
      Arr[14],
  );

  // const [B1,setB1]=useState(1);
  // const [B2,setB2]=useState(1);
  // const [B3,setB3]=useState(1);
  // const [B4,setB4]=useState(1);
  // const [B5,setB5]=useState(1);
  // const [B6,setB6]=useState(1);
  // const [B7,setB7]=useState(0);
  // const [B8,setB8]=useState(0);
  // const [B9,setB9]=useState(0);
  // const [B10,setB10]=useState(0);
  // const [B11,setB11]=useState(0);
  // const [B12,setB12]=useState(0);
  // const [B13,setB13]=useState(0);
  // const [B14,setB14]=useState(0);
  // const [B15,setB15]=useState(0);

  return (
    <View
      style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.reward_screen_text}>Rewards</Text>
      </View>

      <View style={styles.container1}>
        <TouchableOpacity onPress={() => setButton(1)}>
          {Button == 1 ? (
            <Animatable.View
              ref={viewAnimation}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 28,
                  width: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/nCoins.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : NCOINanim == true ? (
            <Animatable.View
              ref={viewAnimation}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 28,
                  width: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/nCoins.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : (
            <Animatable.View
              ref={viewAnimation}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              {/* <Shadow  style={{height:28,width:28,justifyContent:'center',alignItems: 'center',borderRadius:50}}>
                      <Image style={{height:30,width:30,}} source={require('../components/nCoins.png')}/>
                      </Shadow> */}
            </Animatable.View>
          )}

          <View style={styles.container1_nested1}>
            <View
              style={[
                styles.container1_nested1_sub1,
                {backgroundColor: '#427ED8'},
              ]}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                {Ncoins}
              </Text>
            </View>
            <View style={styles.container1_nested1_sub2}>
              <Text style={styles.button_text}>nCoins</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setButton(2)}>
          {Button == 2 ? (
            <Animatable.View
              ref={viewAnimation2}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 28,
                  width: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/badges.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : BADGEanim ? (
            // null
            <Animatable.View
              ref={viewAnimation2}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 28,
                  width: 28,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/badges.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : (
            <Animatable.View
              ref={viewAnimation2}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              {/* <Shadow  style={{height:28,width:28,justifyContent:'center',alignItems: 'center',borderRadius:50}}>
                        <Image style={{height:30,width:30}} source={require('../components/badges.png')}/>
                        </Shadow> */}
            </Animatable.View>
          )}

          <View style={styles.container1_nested2}>
            <View
              style={[
                styles.container1_nested1_sub1,
                {backgroundColor: '#B95F9A'},
              ]}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                {Badges}
              </Text>
            </View>
            <View style={styles.container1_nested1_sub2}>
              <Text style={styles.button_text}>Badges</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setButton(3)}>
          {Button == 3 ? (
            <Animatable.View
              ref={viewAnimation3}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 24,
                  width: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/coupons.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : COUPONanim ? (
            // null
            <Animatable.View
              ref={viewAnimation3}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Shadow
                style={{
                  height: 24,
                  width: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../components/coupons.png')}
                />
              </Shadow>
            </Animatable.View>
          ) : (
            <Animatable.View
              ref={viewAnimation3}
              style={{
                height: '25%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              {/* <Shadow  style={{height:28,width:28,justifyContent:'center',alignItems: 'center',borderRadius:50}}>
                        <Image style={{height:30,width:30}} source={require('../components/badges.png')}/>
                        </Shadow> */}
            </Animatable.View>
          )}
          <View style={styles.container1_nested3}>
            <View
              style={[
                styles.container1_nested1_sub1,
                {backgroundColor: '#EC844A'},
              ]}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                {Coupon}
              </Text>
            </View>
            <View style={styles.container1_nested1_sub2}>
              <Text style={styles.button_text}>Coupons</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {Button === 1 ? (
        <ScrollView style={{width: '100%'}}>
          <View style={styles.container2}>
            <View style={styles.container2_nested1}>
              <PieChartExample />
            </View>
            <View style={styles.container2_nested2}>
              <View
                style={styles.redeem_button}>
                <Text style={styles.redeem_text}>REDEEM</Text>
              </View>
            </View>
          </View>

          <View style={styles.container3}>
            <View
              style={{
                height: '12%',
                width: '40%',
                borderBottomWidth: 2,
                borderColor: '#2D6A4F',
                justifyContent: 'center',
                borderRadius: 30,
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: '#2D6A4F',
                  fontSize: 19,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                nCoin Earnings
              </Text>
            </View>
            <View style={{height: '80%', width: '100%', marginTop: 46}}>
              <LineChart
                data={data_line_chart}
                width={screenWidth}
                height={256}
                verticalLabelRotation={0}
                chartConfig={chartConfig}
                bezier
                transparent
              />
              {/* <Ncoin_graph/> */}
            </View>
          </View>
        </ScrollView>
      ) : Button === 2 ? (
        <View style={styles.container4}>
          <View style={styles.container4_nested}>
            {Arr[0] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge1.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge1.png')}
              />
            )}
            {Arr[1] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge2.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge2.png')}
              />
            )}

            {Arr[2] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge3.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge3.png')}
              />
            )}
          </View>
          <View style={styles.container4_nested}>
            {Arr[3] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge4.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge4.png')}
              />
            )}
            {Arr[4] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge5.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge5.png')}
              />
            )}

            {Arr[5] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge6.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge6.png')}
              />
            )}
          </View>
          <View style={styles.container4_nested}>
            {Arr[6] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge7.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge7.png')}
              />
            )}
            {Arr[7] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge8.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge8.png')}
              />
            )}

            {Arr[8] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge9.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge9.png')}
              />
            )}
          </View>
          <View style={styles.container4_nested}>
            {Arr[9] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge10.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge10.png')}
              />
            )}
            {Arr[10] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge11.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge11.png')}
              />
            )}

            {Arr[11] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge12.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge12.png')}
              />
            )}
          </View>
          <View style={styles.container4_nested}>
            {Arr[12] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge13.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge13.png')}
              />
            )}
            {Arr[13] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge14.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge14.png')}
              />
            )}

            {Arr[14] === 1 ? (
              <Image
                style={styles.badge_img_focussed}
                source={require('../components/badge15.png')}
              />
            ) : (
              <Image
                style={styles.badge_img_outline}
                source={require('../components/badge15.png')}
              />
            )}
          </View>
        </View>
      ) : Button === 3 ? (
        <ScrollView style={{width: '100%'}}>
          <View style={styles.container2}>
            <View style={styles.container2_nested1}>
              <Text>ureuheruh</Text>
            </View>
            <View style={styles.container2_nested2}>
              <Text>ureuheruh</Text>
            </View>
            <View style={styles.container2_nested3}>
              <Text>ureuheruh</Text>
            </View>
          </View>

          <View style={styles.container3}>
            <Text>3333333333333333333</Text>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    height: '96.4%',
    width: '100%',
    marginTop:-1
  },
  topContainer: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reward_screen_text: {
    fontSize: 20,
  },

  container1: {
    height: '15%',
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container1_nested1: {},
  container1_nested1_sub1: {
    width: 90,
    backgroundColor: '#427ED8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 5,
    marginBottom: -5,
  },
  container1_nested1_sub2: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    opacity: 0.5,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    fontSize: 17,
  },

  container1_nested2: {},
  container1_nested3: {},
  container2: {
    height: 380,
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'space-around',
    //flexDirection: 'column',
    // backgroundColor:'black',
    // paddingBottom:30,
    // marginBottom:12
  },
  container2_nested1: {
    height: 300,
    width: '95%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2_nested2: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeem_button: {
    elevation: 20,
    shadowColor: 'black',
    height: 35,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeem_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 5,
  },

  container3: {
    // marginTop:10,
    height: 350,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'column',
    //marginBottom: 40,
  },

  container4: {
    height: '80%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4_nested: {
    height: '19%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  badge_img_focussed: {
    height: 80,
    width: 80,
  },
  badge_img_outline: {
    height: 80,
    width: 80,
    opacity: 0.3,
  },
});
export default Reward_screen;
