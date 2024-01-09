import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import {Ionicons} from '@expo/vector-icons';
const MCQpt = ({QuestionNumber}) => {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>Question{QuestionNumber}</Text>
        <View style={styles.line} />
      </View>
      <Ionicons name="flag" size={24} color="white" />
    </View>
  );
};

export default MCQpt;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  txt: {
    color: COLORS.white,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
  },
  line: {
    width: 125,
    height: 1,
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-start',
  },
});
