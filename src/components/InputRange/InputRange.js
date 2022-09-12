import React, { useRef } from 'react';
import { View,Text, Dimensions } from 'react-native';
import { styles } from './style';
import Svg, {Line} from 'react-native-svg';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import  Animated  from 'react-native-reanimated';
import { useMemo } from 'react';


const {width} = Dimensions.get('window')
const WIDTH = width - 80;
const {View: AView, Value, event, set} = Animated;



//knob
usePanGesture = () => {
  const translateX = useRef(new Value(0)).current;
  const defaultSetX = useRef(new Value(0)).current;
  const onGestureHandle = useMemo(() => {
      return event([
        {
          nativeEvent:({translationX:x, state}) => set(translateX, x)
        }
      ])
  },[translateX, defaultSetX]);

  return(translateX, onGestureHandle)
}


const Knob = () => {
  const { translateX, onGestureHandle} = usePanGesture();
  return(
    <PanGestureHandler onGestureEvent={onGestureHandle} onHandlerStateChange={onGestureHandle}>
      <AView style={[styles.knob,{transform:[{translateX: translateX}]}]}/>
    </PanGestureHandler>
  )
}




//imputRange

const InputRange = ({minValue, maxValue, onChangeMin, onChangeMax}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeranges}>9:00 - 10:00</Text>
      <View style={styles.rail}/>
      <View style ={{ position:'absolute'}}>
        <Svg height="6" width={WIDTH}>
          <Line
            stroke="#43D29E"
            strokeWidth="12"
            x1={100}
            y1={0}
            x2={WIDTH}
            y2={0}
          />
        </Svg>
      </View>
      <Knob/>
      <Text style={styles.exercice}>Atividade</Text>
    </View>
  )
};

export default InputRange;