import {
  DrawerLayoutAndroid,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../src/Images';
import MCQpt from './titles/MCQpt';
import MCQcard from './Cards/MCQcard';

const Data = [
  {
    id: 1,
    question: 'Which of the following animes is the greatest of all time',
    answers: [
      {
        label: 'A',
        answer: 'one piece',
      },
      {
        label: 'B',
        answer: 'AOT',
      },
      {
        label: 'C',
        answer: 'hunter X hunter',
      },
      {
        label: 'D',
        answer: 'Naruto',
      },
    ],
    correct: 'C',
  },
  {
    id: 2,
    question: '...,Iam gay',
    answers: [
      {
        label: 'A',
        answer: 'yes',
      },
      {
        label: 'B',
        answer: 'no',
      },
      {
        label: 'C',
        answer: 'maybe',
      },
      {
        label: 'D',
        answer: 'leave blank',
      },
    ],
    correct: 'C',
  },
];

const MCQs = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [IsWrong, setIsWrong] = useState(false);
  const [IsCorrect, setIsCorrect] = useState(false);
  const checkAnswer = (userAnswer, correctAnswer) => {
    setSelectedAnswer(userAnswer);
    if (userAnswer === correctAnswer) {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setIsCorrect(false);
    }
  };
  return (
    <View style={styles.container}>
      {Data.map((question) => (
        <View style={{width: '100%', alignItems: 'center'}} key={question.id}>
          <MCQpt QuestionNumber={question.id} />
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{question.question}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={question.answers}
              renderItem={({item}) => (
                <MCQcard
                  key={item.label}
                  label={item.label}
                  answer={item.answer}
                  onpress={() => checkAnswer(item.label, question.correct)}
                  wrong={IsWrong && item.label === selectedAnswer}
                  correct={IsCorrect && item.label === selectedAnswer}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{gap: 10}}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default MCQs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    width: '85%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  question: {
    color: COLORS.white,
    marginVertical: 10,
    width: '100%',
    textAlign: 'left',
  },
});
