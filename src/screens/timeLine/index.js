import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputRange from '../../components/InputRange/InputRange';
import { styles } from './style';



const TimeLine = () => {
  return (
    
      <ScrollView>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
        <InputRange minValue={0} maxValue={0} onChangeMin={() => console.log('hello')} onChangeMax={() => console.log('hello')}/>
      </ScrollView>
    
  )
};

export default TimeLine;  