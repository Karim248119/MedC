import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';

import Header from '../../components/Headers/Header';

import {useNavigation} from '@react-navigation/native';

import CarouselComponent from '../slider';

const MCQscreen = ({navigation}) => {
  const Navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Header navBack={() => Navigate.goBack()} navigation={navigation} />
      <CarouselComponent />
    </View>
  );
};

export default MCQscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scroll: {
    paddingVertical: 20,
  },
});
