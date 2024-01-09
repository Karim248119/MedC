import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../styles/Colors';

const MCQcard = ({label, answer, onpress, correct, wrong}) => {
  const [Red, setRed] = useState(true);
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[
        styles.container,
        wrong && {backgroundColor: COLORS.transRed},
        correct && {backgroundColor: COLORS.transGreen},
      ]}
    >
      <Text
        style={[
          styles.label,
          wrong && {color: COLORS.red},
          correct && {color: COLORS.green},
        ]}
      >
        {' '}
        {label}{' '}
      </Text>
      <Text
        style={[
          styles.answer,
          wrong && {color: COLORS.red},
          correct && {color: COLORS.green},
        ]}
      >
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default MCQcard;

const styles = StyleSheet.create({
  container: {
    width: 296,
    padding: 20,
    borderRadius: 5,
    backgroundColor: COLORS.answer1,
    flexDirection: 'row',
    gap: 17,
    alignItems: 'center',
  },
  answer: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  label: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  correct: {},
});
