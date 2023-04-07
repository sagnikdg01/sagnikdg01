import React, {useState} from 'react';
import {PieChart} from 'react-native-svg-charts';
import Svg, {Text, Circle, G, Rect} from 'react-native-svg';
import {TouchableOpacity, View} from 'react-native';

function pie_chart_style(tot, rem, spn) {
  const [TotnCoins, setTotnCoins] = useState(1000);
  const [Ncoins_remaining, setNcoins_remaining] = useState(100);
  const [Ncoins_spent, setNcoins_spent] = useState(900);
  const [Counter, setCounter] = useState(2);

  const dataA = value => {
    const data = [
      {
        key: 1,
        amount: TotnCoins,
        svg: {fill: '#67C587'},
      },
      {
        key: 2,
        amount: Ncoins_remaining,
        svg: {fill: '#427ED8'},
      },
      {
        key: 3,
        amount: Ncoins_spent,
        svg: {fill: '#DB5C40'},
      },
    ];
    return data;
  };

  const Btn = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginLeft: 29,
        }}>
        <TouchableOpacity onPress={() => setCounter(1)}>
          <View style={{height: '100%', width: '31%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 40,
                  backgroundColor: '#67C587',
                  marginRight: 9,
                }}></View>
            </View>
            <View
              style={{height: '100%', width: '70%', flexDirection: 'column'}}>
              <Svg height={45} width={1000}>
                <Text
                  dx={7}
                  dy={16}
                  stroke={'black'}
                  strokeWidth={2}
                  fontSize={24}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  {TotnCoins}
                </Text>
              </Svg>

              <Svg height={40} width={1000}>
                <Text
                  dx={12}
                  letterSpacing={1}
                  stroke={'#67C587'}
                  strokeWidth={1}
                  fontSize={12}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  EARNED
                </Text>
              </Svg>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCounter(2)}>
          <View style={{height: '100%', width: '31%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 40,
                  backgroundColor: '#427ED8',
                  marginRight: 9,
                }}></View>
            </View>
            <View
              style={{height: '100%', width: '70%', flexDirection: 'column'}}>
              <Svg height={45} width={1000}>
                <Text
                  dx={7}
                  dy={16}
                  stroke={'black'}
                  strokeWidth={2}
                  fontSize={24}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  {Ncoins_remaining}
                </Text>
              </Svg>

              <Svg height={40} width={1000}>
                <Text
                  dx={12}
                  letterSpacing={1}
                  stroke={'#427ED8'}
                  strokeWidth={1}
                  fontSize={12}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  LEFT
                </Text>
              </Svg>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCounter(3)}>
          <View style={{height: '100%', width: '31%', flexDirection: 'row'}}>
            <View
              style={{
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 40,
                  backgroundColor: '#DB5C40',
                  marginRight: 9,
                }}></View>
            </View>
            <View
              style={{height: '100%', width: '70%', flexDirection: 'column'}}>
              <Svg height={45} width={1000}>
                <Text
                  dx={9}
                  dy={16}
                  stroke={'black'}
                  strokeWidth={2}
                  fontSize={24}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  {Ncoins_spent}
                </Text>
              </Svg>

              <Svg height={40} width={1000}>
                <Text
                  dx={12}
                  letterSpacing={1}
                  stroke={'#DB5C40'}
                  strokeWidth={1}
                  fontSize={12}
                  alignmentBaseline={'before-edge'}
                  textAnchor={'start'}>
                  SPENT
                </Text>
              </Svg>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ABC = value => {
    return Counter == 1 ? (
      <View>
        <Text
          letterSpacing={0.8}
          stroke={'#67C587'}
          strokeWidth={3.3}
          fontSize={35}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}>
          {TotnCoins}
        </Text>
        <Text
          letterSpacing={1.5}
          stroke={'#67C587'}
          strokeWidth={1.4}
          fontSize={12}
          dx={-25}
          dy={30}>
          EARNED
        </Text>
      </View>
    ) : Counter == 2 ? (
      <View>
        <Text
          letterSpacing={0.8}
          stroke={'#427ED8'}
          strokeWidth={3.3}
          fontSize={35}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}>
          {Ncoins_remaining}
        </Text>
        <Text
          letterSpacing={1.5}
          stroke={'#427ED8'}
          strokeWidth={1.4}
          fontSize={12}
          dx={-15}
          dy={30}>
          LEFT
        </Text>
      </View>
    ) : Counter == 3 ? (
      <View>
        <Text
          letterSpacing={0.8}
          stroke={'#DB5C40'}
          strokeWidth={3.3}
          fontSize={35}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}>
          {Ncoins_spent}
        </Text>
        <Text
          letterSpacing={1.5}
          stroke={'#DB5C40'}
          strokeWidth={1.4}
          fontSize={12}
          dx={-20}
          dy={30}>
          SPENT
        </Text>
      </View>
    ) : null;
  };

  // const Labels = ({ slices, height, width }) => {
  //     return slices.map((slice, index) => {
  //         const { labelCentroid, pieCentroid, data } = slice;
  //         return (
  // <TouchableOpacity onPress={()=>console.log('pressed')}>

  // <Text
  //     key={index}
  //     x={pieCentroid[ 0 ]}
  //     y={pieCentroid[ 1 ]}
  //     fill={'white'}
  //     textAnchor={'middle'}
  //     alignmentBaseline={'middle'}
  //     fontSize={24}
  //     stroke={'black'}
  //     strokeWidth={0.9}
  // >
  //     {data.amount}
  // </Text>

  // </TouchableOpacity>

  //         )
  //     })
  // }

  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={{height: '80%', width: '100%'}}>
        <PieChart
          style={{height: 250, width: '100%'}}
          valueAccessor={({item}) => item.amount}
          data={dataA()}
          spacing={0}
          outerRadius={100}
          innerRadius={78}>
          <ABC />
        </PieChart>
      </View>
      <View style={{height: '20%', width: '100%'}}>
        <Btn />
      </View>
    </View>
  );
}

// }

export default pie_chart_style;
