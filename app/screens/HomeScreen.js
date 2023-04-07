import React, {useState, useEffect, useRef} from 'react';
// import { material } from 'react-native-typography'
import * as Animatable from 'react-native-animatable';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Animated,
  ImageBackground,
} from 'react-native';
import Test2 from './test2';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProgressChart} from 'react-native-chart-kit';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  AspectRatio,
} from 'native-base';
// import {FontAwesome5} from '@expo/vector-icons';
// import {LinearGradient} from 'expo-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BlurView} from '@react-native-community/blur';

//blur intensity

const blur_view_intensity = 1;
const blur_tint = 'dark';

//background handling
var bg_ctr;
var bg;

var f_click = 0;
var y_click = 0;
var t_click = 0;
var l_click = 0;
console.log('bg_ctr ' + bg_ctr);
function Home_screen({navigation}) {
  //const [New_nscore,setNew_nscore]=useState(90);

  //  var prev_Score;
  //  var prev_nScore=Nscore;
  //  var new_nScore=45;
  //const data=[0.4];
  // const Has_Launched="Has_Launched";
  const [shouldShow, setShow] = useState(false);
  const [Ctr, setCtr] = useState(false);
  const [Prev_nScore, setPrev_nScore] = useState();
  const [Nscore, setNscore] = useState(70);
  var color;
  var green = '#54CA56';
  var red = 'red';
  const daily_challenge_color = '#FCEECB';
  //const value=90;
  const [New_value, setNew_value] = useState(90);
  var new_val_str = String(New_value);

  //ANIMATION of Popup container
  const translation = useRef(new Animated.Value(0)).current;

  const viewAnimation = useRef(null);
  const viewAnimation2 = useRef(null);
  // val [Delay,setDelay]=useState();

  useEffect(() => {
    const animation = async () => {
      if (shouldShow) {
        setShow(true);
        if (viewAnimation.current)
         await viewAnimation.current.fadeInLeft(500); //fadeInLeft
      } else {
        if (viewAnimation.current)
         await viewAnimation.current.flipInY(500);
        setShow(false);
      }
    };

    animation();


    // Animated.spring(translation,{
    //   toValue:40,
    //   delay:5000,
    //   useNativeDriver:true,
    // }).start()
  }, [shouldShow, viewAnimation]);


  useEffect(() => {
    const animation2 = async () => {
      if (shouldShow) {
        setShow(true);
        if (viewAnimation2.current) await viewAnimation2.current.flipInY(500); //fadeInLeft
      } else {
        if (viewAnimation2.current) await viewAnimation2.current.flipInY(500); //fadeOut(500);
        setShow(false);
      }

    };
    animation2();
    // Animated.spring(translation,{
    //   toValue:40,
    //   delay:5000,
    //   useNativeDriver:true,
    // }).start()
  }, [shouldShow, viewAnimation2]);

  //  useEffect(()=>{

  //         Animated.spring(translation,{
  //           toValue:1,
  //           // delay:5000,
  //           useNativeDriver:true,
  //         }).start();

  //   },[shouldShow])

  //console.log(Ctr);

  // if (Ctr==0)
  // {

  // const store=async () => {
  //   try {
  //     setPrev_nScore(New_value);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const store = async (key, value) => {
    try {
      console.log('Dara stored');
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieve = async key => {
    console.log('retrieving data ....');
    try {
      var value = AsyncStorage.getItem('key');

      if (value !== null) return value;
    } catch (error) {
      console.log('Error at getItem');
    }
    //   await AsyncStorage.removeItem('key', (err) => console.log('deletion error'));
  };

  useEffect(() => {
    const getData = async () => {
      // const hasLaunched = await retrieve ("Has_Launched");

      if (Ctr) {
        console.log('Not First time launching');
      } else {
        setCtr(true);
        await store('Has_Launched', 'true');
        console.log('First time launching');
      }
    };

    getData().catch(error => {
      console.log(error);
    });

    const getBackground = async () => {
      if ((bg_ctr = null)) {
        bg = 'background_16.jpg';
        bg_ctr = 1;
      }
      if ((bg_ctr = 1)) {
        bg = 'background_17.jpg';
        bg_ctr++;
      }
      if ((bg_ctr = 2)) {
        bg = 'background_19.jpg';
        bg_ctr++;
      }
      if ((bg_ctr = 3)) {
        bg = 'background_20.jpg';
        bg_ctr++;
      }
      if ((bg_ctr = 4)) {
        bg = 'background_21.jpg';
        bg_ctr = 1;
      }
    };
    getBackground();
  }, []);

  if (New_value > Nscore) {
    color = green;
  } else if (New_value < Nscore) {
    color = red;
  } else if (New_value == Nscore) {
    console.log('Change new nScore First');
  }

  // setCtr(1)

  // }else
  // {

  // if (New_value>prev_nScore)
  //   {
  //     color=green;
  //   }else
  // color=red;

  // const retrieve =async () => {
  //   try {
  //     await AsyncStorage.setItem(
  //       'key',
  //       New_value,
  //     );
  //   } catch (error) {
  //     console.log("Error saving data when ctr=0")
  //   }
  // };

  // }

  //const new_value=(New_value)=>{setNscore(New_value);}

  // if (New_value>Nscore)
  // {
  //   color=green;
  // }else
  // color=red;

  const [Ncircle, setNcircle] = useState(0);
  const [I_click, setI_click] = useState(0);
  const [F_click, setF_click] = useState(0);
  const [Y_click, setY_click] = useState(0);
  const [T_click, setT_click] = useState(0);
  const [L_click, setL_click] = useState(0);
  const [Textcontent, setTextcontent] = useState('');
  const search_handler = () => console.log('Search_clicked');
  const notification_handler = () => console.log('Notification_clicked');
  const profile_picture_click = () => console.log('Profile picture is clicked');
  //const main_score_handler=()=>console.log('Main Score is clicked');
  const upload_reel_handler = () => console.log('Upload Reel is clicked');
  const upload_story_handler = () => console.log('Upload Story is clicked');
  const upload_post_handler = () => console.log('Upload Post is clicked');

  const nCircle_handler = () => {
    if (Ncircle == 0) {
      setNcircle(1);
    } else {
      setNcircle(0);
    }
    console.log(Ncircle);
  };

  const insta_share_handler = () => {
    if (I_click == 0) {
      setI_click(1);
      setNscore(New_value);
    } else {
      setI_click(0);
    }
    console.log('insta share is clicked');
  };
  const facebook_share_handler = () => {
    if (F_click == 0) {
      setF_click(1);
    } else {
      setF_click(0);
    }
    console.log('Facebook share is clicked');
  };
  const youtube_share_handler = () => {
    if (Y_click == 0) {
      setY_click(1);
    } else {
      setY_click(0);
    }
    console.log('Youtube share is clicked');
  };
  const twitter_share_handler = () => {
    if (T_click == 0) {
      setT_click(1);
    } else {
      setT_click(0);
    }
    console.log('Twitter share is clicked');
  };
  const linkedin_share_handler = () => {
    if (L_click == 0) {
      setL_click(1);
    } else {
      setL_click(0);
    }
    console.log('Linkedin share is clicked');
  };

  // const main_score_handler=()=>{

  //    if(shouldShow===false)
  //    {
  //     console.log(shouldShow);
  //     setShow(!shouldShow);
  //     return(
  //     <SafeAreaView style={{flex:1}}>
  //     <View style={styles.popupContainer}>

  //     </View>
  //    </SafeAreaView>
  //    )

  //   }else
  //       {

  //         return null;
  //       }
  //     }

  return (
    //<StatusBar style="auto" />'

    <View style={styles.mainContainer}>
      {/* <ImageBackground
        source={require('../components/background_22.jpg')}
        style={{height: '100%', width: '100%'}}
        resizeMode="stretch"> */}



        {/* <BlurView intensity={40} tint="dark" >
      <View style={styles.top_container}>
        <Text style={styles.brand_name}>nFluence Score</Text>


      </View>
    </BlurView> */}
        {/* Profile picture / Scores and notification & search icons */}
        <View style={[styles.container_common_styles, styles.container1]}>
          {/* <LinearGradient
            colors={["white", "white"]} */}
          {/* <BlurView
            blurType={blur_tint}
            blurAmount={blur_view_intensity}
            style={{height: 10, width: 50, position: 'absolute'}}
          /> */}

          <View style={styles.nestedCont1}>
            <TouchableOpacity onPress={store}>
              <Image
                style={styles.company_logo}
                resizeMode="cover"
                source={require('../components/company_logo.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.nestedCont2}>
            <TouchableOpacity onPress={() => setShow(!shouldShow)}>
              {/* <Image
          style={styles.main_score}
          resizeMode="cover"
          source={require("../components/main_score_circle.png")}
          /> */}
              {/* <ProgressChart
             data={data}
             width={200}
             height={100}
             chartConfig={{
              height: 100,
              width: 100,
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(119, 185, 94, ${opacity})`,
              style: {
                borderRadius: 16,
                
                
              }
            }}

              /> */}
              <AnimatedCircularProgress
                size={79}
                width={8}
                fill={Ctr ? Nscore : New_value}
                tintColor={color}
                rotation={-360}
                onAnimationComplete={() => console.log('onAnimationComplete')}>
                {(
                  fill, //make a function for this and return the color
                ) =>
                  !shouldShow ? (
                    <Animatable.View
                      ref={viewAnimation2}
                      style={{
                        // backgroundColor: 'white',

                        height: 70,
                        width: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {/* <BlurView
                    blurType="xlight"
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  /> */}
                      <TouchableOpacity onPress={() => setShow(!shouldShow)}>
                        <Image
                          style={styles.profile_pic}
                          resizeMode="cover"
                          source={require('../components/profile_picture.png')}
                        />
                      </TouchableOpacity>
                    </Animatable.View>
                  ) : (

                    <Animatable.View
                      ref={viewAnimation2}
                      style={{
                        backgroundColor: '#ECECEC',
                        // borderWidth:1,
                        borderRadius:100,
                        // borderColor:'green',
                        height: 63,
                        width: 63,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <BlurView
                        blurType="light"
                        blurAmount={100}
                        style={{
                          height: '100%',
                          width: '100%',
                          position: 'absolute',
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 27,
                          color: '#54CA56',
                          fontWeight: 'bold',
                          position: 'absolute',
                        }}>
                        {fill}
                      </Text>
                    </Animatable.View>
                  )
                }
              </AnimatedCircularProgress>
            </TouchableOpacity>
          </View>
          <View style={styles.nestedCont3}>
            <View style={styles.nextedCont3_sub1}>
              <TouchableOpacity onPress={search_handler}>
                <Image
                  style={styles.top_right_icons}
                  resizeMode="cover"
                  source={require('../components/search_icon.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.nextedCont3_sub2}>
              <TouchableOpacity onPress={notification_handler}>
                <Image
                  style={{height: 30, width: 30}}
                  resizeMode="cover"
                  source={require('../components/notification_icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*   Magic
         */}

        <View>
          {shouldShow ? (
            // <Animated.View style={[styles.popupContainer,{transform:[{ translateY : translation }]}]}>
            <Animatable.View ref={viewAnimation}>
              <View style={styles.popupContainer}>
                <AnimatedCircularProgress
                  size={45}
                  width={6}
                  fill={40}
                  tintColor="black"
                  onAnimationComplete={() =>
                    console.log('onAnimationComplete')
                  }>
                  {fill => (
                    <Image
                      style={{height: 32, width: 32}}
                      resizeMode="cover"
                      source={require('../components/facebook_coloured.png')}
                    />
                  )}
                </AnimatedCircularProgress>

                <AnimatedCircularProgress
                  size={45}
                  width={6}
                  fill={40}
                  tintColor="black"
                  onAnimationComplete={() =>
                    console.log('onAnimationComplete')
                  }>
                  {fill => (
                    <Image
                      style={{height: 32, width: 32}}
                      resizeMode="cover"
                      source={require('../components/youtube_coloured.png')}
                    />
                  )}
                </AnimatedCircularProgress>

                <AnimatedCircularProgress
                  size={45}
                  width={6}
                  fill={20}
                  tintColor="black"
                  onAnimationComplete={() =>
                    console.log('onAnimationComplete')
                  }>
                  {fill => (
                    <Image
                      style={{height: 32, width: 32}}
                      resizeMode="cover"
                      source={require('../components/twitter_coloured.png')}
                    />
                  )}
                </AnimatedCircularProgress>

                <AnimatedCircularProgress
                  size={45}
                  width={6}
                  fill={90}
                  tintColor="black"
                  onAnimationComplete={() =>
                    console.log('onAnimationComplete')
                  }>
                  {fill => (
                    <Image
                      style={{height: 32, width: 32}}
                      resizeMode="cover"
                      source={require('../components/linkedin_coloured.png')}
                    />
                  )}
                </AnimatedCircularProgress>

                <AnimatedCircularProgress
                  size={45}
                  width={6}
                  fill={70}
                  tintColor="black"
                  onAnimationComplete={() =>
                    console.log('onAnimationComplete')
                  }>
                  {fill => (
                    <Image
                      style={{height: 32, width: 32}}
                      resizeMode="cover"
                      source={require('../components/insta_coloured.png')}
                    />
                  )}
                </AnimatedCircularProgress>
              </View>
            </Animatable.View>
          ) : null}
        </View>

        {/* CREATE CONTENT SECTION */}

        <ScrollView>
          <View style={[styles.container2, styles.container_common_styles]}>
            <View style={styles.post_headings_container}>
              <View style={styles.container2_nested1}>
                <Text style={styles.post_heading}>Create content</Text>
              </View>
              {/* <ImageBackground
                source={require('../components/background_22.jpg')}
                style={{
                  height: 55,
                  width: '96%',
                  marginBottom: 70,
                  borderRadius: 20,
                  overflow: 'hidden',
                }} */}
                {/* resizeMode="cover"> */}
                <View style={styles.icons}>
                  {I_click == 0 ? (
                    <TouchableOpacity onPress={insta_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/insta_coloured.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={insta_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/insta_grey.png')}
                      />
                    </TouchableOpacity>
                  )}

                  {F_click == 0 ? (
                    <TouchableOpacity onPress={facebook_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/facebook_coloured.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={facebook_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/facebook_grey.png')}
                      />
                    </TouchableOpacity>
                  )}

                  {Y_click == 0 ? (
                    <TouchableOpacity onPress={youtube_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/youtube_coloured.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={youtube_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/youtube_grey.png')}
                      />
                    </TouchableOpacity>
                  )}

                  {T_click == 0 ? (
                    <TouchableOpacity onPress={twitter_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/twitter_coloured.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={twitter_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/twitter_grey.png')}
                      />
                    </TouchableOpacity>
                  )}
                  {L_click == 0 ? (
                    <TouchableOpacity onPress={linkedin_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/linkedin_coloured.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={linkedin_share_handler}>
                      <Image
                        style={styles.create_content_icons}
                        resizeMode="cover"
                        source={require('../components/linkedin_grey.png')}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              {/* </ImageBackground> */}
            </View>

            <View style={styles.container2_nested2}>
              <BlurView
                blurType={blur_tint}
                blurAmount={blur_view_intensity}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
              />

              <Input
                borderRadius={20}
                borderWidth={0}
                // InputLeftElement={
                //   // <Icon
                //   //   as={<FontAwesome5 name="user-secret" />}
                //   //   size={15}
                //   //   m={2}
                //   //   htmlSize={15}
                //   //  width="auto"
                //   //   _light={{
                //   //     color: "black",
                //   //   }}
                //   //   _dark={{
                //   //     color: "gray.300",
                //   //   }}
                //   // />
                //   <Image style={{height: 170, width: 95}} onPress={() =>console.log('Image Pressed')}
                //           source={require('../components/semi_circle.png')}/>

                // }
                variant="outline"
                placeholder="Whats on your mind ?"
                _light={{
                  placeholderTextColor: 'white',
                }}
                _dark={{
                  placeholderTextColor: 'white.50',
                }}
                style={styles.emailInput}
              />
              <Test2 />
            </View>

            {/* 
          <View style={styles.container2_nested2}>
          <TextInput style={styles.content_box}
            placeholder='Whats on your mind'
            value={Textcontent}
            onChangeText={val=>setTextcontent(val)}
            />
           </View> */}
            <View style={styles.container2_nested3}>
              <TouchableOpacity onPress={upload_reel_handler}>
                <View style={styles.upload_reel_container}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      // elevation:5
                    }}
                  />
                  <Image
                    style={styles.upload_icons}
                    resizeMode="cover"
                    source={require('../components/reel_icon.png')}
                  />

                  <Text style={styles.upload_text}>Reel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={upload_story_handler}>
                <View style={styles.upload_story_container}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      // elevation:5
                    }}
                  />

                  <Image
                    style={styles.upload_icons}
                    resizeMode="cover"
                    source={require('../components/story_icon.png')}
                  />

                  <Text style={styles.upload_text}>Story</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={upload_post_handler}>
                <View style={styles.upload_post_container}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                      // elevation:5
                    }}
                  />

                  <Image
                    style={styles.upload_icons}
                    resizeMode="cover"
                    source={require('../components/post_icon.png')}
                  />

                  <Text style={styles.upload_text}>Post</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* {/NCIRCLE section/} */}
          <View style={[styles.container3, styles.container_common_styles]}>
            <View style={styles.container3_nested1}>
              <Text style={styles.nCircle_text}>nCircle</Text>
            </View>
            <View
              style={[
                styles.container3_nested2,
                styles.container_common_styles,
              ]}>
              <BlurView
                blurType={blur_tint}
                blurAmount={blur_view_intensity}
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  marginLeft: -10,
                }}
              />
              {Ncircle == 0 ? (
                <TouchableOpacity
                  style={styles.grey_container}
                  onPress={nCircle_handler}>
                  <View>
                    <Text
                      style={{
                        color: '#ffffff',
                        letterSpacing: 1,
                        fontWeight: 'bold',
                      }}>
                      INFLUENCING
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.white_container}
                  onPress={nCircle_handler}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        letterSpacing: 1,
                        fontWeight: 'bold',
                      }}>
                      INFLUENCING
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {Ncircle == 1 ? (
                <TouchableOpacity
                  style={styles.grey_container}
                  onPress={nCircle_handler}>
                  <View>
                    <Text
                      style={{
                        color: '#ffffff',
                        letterSpacing: 1,
                        fontWeight: 'bold',
                      }}>
                      INFlUENCED
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.white_container}
                  onPress={nCircle_handler}>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        letterSpacing: 1,
                        fontWeight: 'bold',
                      }}>
                      INFlUENCED
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            {Ncircle == 1 ? (
              <View style={[styles.container3_nested3_one]}>
                <BlurView
                  blurType={blur_tint}
                  blurAmount={blur_view_intensity}
                  style={{height: '100%', width: '100%', position: 'absolute'}}
                />
                {/* <View style={styles.container3_nested3_one}> */}
                <Text
                  style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                  ANIMATION 1
                </Text>
              </View>
            ) : (
              <View style={styles.container3_nested3_two}>
                <BlurView
                  blurType={blur_tint}
                  blurAmount={blur_view_intensity}
                  style={{height: '100%', width: '100%', position: 'absolute'}}
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                  ANIMATION 2
                </Text>
              </View>
            )}
          </View>

          {/* Daily Challenges */}

          <View style={styles.container4}>
            <View style={styles.container4_nested1}>
              <Text style={{fontSize: 23, fontWeight: 'bold', color: 'black'}}>
                Daily Challenges
              </Text>
            </View>
            <View style={styles.container4_nested2}>
              <View style={styles.sub1}>
                <View style={styles.progressContainer}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <View style={styles.progress_text_container}>
                    <Text style={styles.progress_text}>
                      Get 5 Likes on Instagram
                    </Text>
                  </View>
                  <View style={styles.progressScore_container}>
                    <AnimatedCircularProgress
                      size={45}
                      width={6}
                      fill={50}
                      tintColor="#4AB852"
                      // tintColorSecondary="green"
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }>
                      {fill => (
                        <View
                          style={{
                            borderRadius: 50,
                            height: 70,
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            {fill}
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>

              <View style={styles.sub1}>
                <View style={styles.progressContainer}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <View style={styles.progress_text_container}>
                    <Text style={styles.progress_text}>
                      Get 5 Likes on Instagram
                    </Text>
                  </View>
                  <View style={styles.progressScore_container}>
                    <AnimatedCircularProgress
                      size={45}
                      width={6}
                      fill={50}
                      tintColor="#4AB852"
                      // tintColorSecondary="green"
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }>
                      {fill => (
                        <View
                          style={{
                            borderRadius: 50,
                            height: 70,
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            {fill}
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>

              <View style={styles.sub1}>
                <View style={styles.progressContainer}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <View style={styles.progress_text_container}>
                    <Text style={styles.progress_text}>
                      Get 5 Likes on Instagram
                    </Text>
                  </View>
                  <View style={styles.progressScore_container}>
                    <AnimatedCircularProgress
                      size={45}
                      width={6}
                      fill={50}
                      tintColor="#4AB852"
                      // tintColorSecondary="green"
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }>
                      {fill => (
                        <View
                          style={{
                            borderRadius: 50,
                            height: 70,
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            {fill}
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>

              <View style={styles.sub1}>
                <View style={styles.progressContainer}>
                  <BlurView
                    blurType={blur_tint}
                    blurAmount={blur_view_intensity}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <View style={styles.progress_text_container}>
                    <Text style={styles.progress_text}>
                      Get 5 Likes on Instagram
                    </Text>
                  </View>
                  <View style={styles.progressScore_container}>
                    <AnimatedCircularProgress
                      size={45}
                      width={6}
                      fill={50}
                      tintColor="#4AB852"
                      // tintColorSecondary="green"
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }>
                      {fill => (
                        <View
                          style={{
                            borderRadius: 50,
                            height: 70,
                            width: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            {fill}
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
}
// export default Home_screen;
export default () => {
  return (
    <NativeBaseProvider>
      <Home_screen />
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#B6E1F2',
    height: '110%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
    paddingBottom: 60,
    flexDirection: 'column',
  },
  brand_name: {
    fontSize: 15,
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: 'black',
    color: 'black',
  },
  brand_icon: {
    height: 70,
    width: 70,

    // textShadowColor:'grey',
    // textShadowOffset:4,
    // textShadowRadius:10
  },
  top_container: {
    // elevation:30,
    // shadowColor:'black',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    //  paddingLeft:60,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  container1: {
    shadowColor: 'grey',
    flexDirection: 'row',
    height: 100,
    shadowOffset: 0,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomWidth: 0.7,
    borderColor: 'grey',
    justifyContent: 'space-around',
  },
  container_common_styles: {
    elevation: 5,
    backgroundColor: '#617C8C',
  },
  nestedCont1: {
    width: '25%',
    // backgroundColor: "#FCEECB",

    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_pic: {
    marginLeft: -5,
    height: 69,
    width: 69,
  },
  company_logo: {
    marginLeft: 10,
    height: 110,
    width: 110,
  },

  nestedCont2: {
    width: '50%',
    // marginTop:-3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_score: {
    height: 70,
    width: 70,
  },
  nestedCont3: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 20,
  },
  nextedCont3_sub1: {
    // paddingRight: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  nextedCont3_sub2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_right_icons: {
    height: 26,
    width: 26,
  },
  popupContainer: {
    // marginTop:-100,
    width: '100%',
    height: 65,
    //flex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container2: {
    marginLeft: 10,

    marginTop: 15,
    borderRadius: 30,
    paddingTop: 30,
    height: 350,
    width: '95%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingBottom: 30,
    marginBottom: -12,
  },

  container2_nested1: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'column',
    height: '20%',
    justifyContent: 'space-around',
  },
  icons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 55,
    width: '92%',
    marginLeft: 4,
    borderRadius: 15,
    paddingLeft: 8,
    shadowColor: 'grey',
    backgroundColor:'#B6E1F2'
  },
  create_content_icons: {
    height: 35,
    width: 35,
    marginLeft: 4,
    marginRight: 4,

    // marginTop: -7,
  },
  post_headings_container: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:-15
  },
  post_heading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: -10,
    paddingLeft: 10,
    color: '#FFFFFF',
  },

  container2_nested2: {
    height: '55%',
    width: '92%',
    borderRadius: 20,
    overflow: 'hidden',
    // alignItems:'center'
  },
  emailInput: {
    // marginTop:-40,
    marginLeft: 10,
    fontSize: 18,
    height: 138,
    width: '100%',
    // marginTop: 5,
    // marginRight: 50,
    // marginLeft: 15,
    // borderRadius: 80,
    // paddingTop:5,
  },
  create_content_box: {
    borderRadius: 20,
  },

  // content_box:{
  //   backgroundColor:'#D9D9D9',
  //   paddingLeft:5,
  //  borderWidth:1,
  //   borderRadius:10,
  //  width: '95%',
  //  height: '100%',
  //  fontSize: 20,
  //  paddingTop:10,
  //  paddingLeft:10,
  //  fontWeight: '700',
  //   textAlignVertical:'top',

  // },
  container2_nested3: {
    height: '25%',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    marginTop: 45,
  },
  upload_icons: {
    marginRight: 2,
    paddingLeft: -2,
    height: 20,
    width: 20,
  },
  upload_reel_container: {
    shadowColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,

    borderRadius: 10,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 20,
    overflow: 'hidden',
  },
  upload_text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  upload_story_container: {
    // elevation: 10,
    shadowColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,

    borderRadius: 10,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    overflow: 'hidden',
  },

  upload_post_container: {
    // elevation: 10,
    shadowColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,

    borderRadius: 10,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  container3: {
    marginTop: 40,
    height: 370,
    width: '95%',
    marginLeft: 10,
    elevation: 10,

    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 40,
  },
  container3_nested1: {
    //marginTop:-10,
    width: '94%',
    height: '10%',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nCircle_text: {
    marginTop: -24,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  container3_nested2: {
    // elevation: 10,
    shadowColor: 'black',
    width: '95%',
    height: '12%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'grey',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  grey_container: {
    borderWidth:1,
    borderRadius: 7,
    height: 32,
    paddingTop: 1,
    borderColor:'#B6E1F2',
    // backgroundColor: "#D2CDCA",
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nfluencing_text: {
    // color: '#000000',

    letterSpacing: 1,
  },
  white_container: {
    // borderWidth: 1,
    // borderColor: '#B6E1F2',
    height: 30,
    backgroundColor: '#B6E1F2',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    elevation: 2,
  },
  nfluenced_text: {
    color: '#081C15',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  container3_nested3_one: {
    marginTop: 5,
    borderRadius: 30,
    width: '95%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 10,
    overflow: 'hidden',
  },
  container3_nested3_two: {
    marginTop: 5,
    borderRadius: 30,
    width: '95%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    overflow: 'hidden',
  },

  container4: {
    flexDirection: 'column',
    height: 450,
    width: '100%',
    paddingBottom: 280,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  container4_nested1: {
    height: '21%',
    width: '93%',
    paddingLeft: 20,
    marginBottom: 15,
    alignItems: 'center',

    // backgroundColor: '#EC544A',
  },
  container4_nested2: {
    height: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#D9D9D9',
  },
  sub1: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 60,
    width: '100%',
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    width: '93%',
    // backgroundColor: '#666264',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
  },

  progress_text_container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80%',
  },
  progress_text: {
    fontSize: 15,
    color: 'white',
  },

  progressScore_container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  // social_media_scores:{
  //   //hight:20,
  //   //width:20
  //   size:'40%' // }
});
