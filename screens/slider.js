import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import MCQcard from '../components/Cards/MCQcard';
import MCQpt from '../components/titles/MCQpt';
import {COLORS} from '../styles/Colors';

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
    question: ' . . .  , Iam gay',
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

const {width: screenWidth} = Dimensions.get('window');

export default function CarouselComponent() {
  const carouselRef = useRef(null);
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
  const renderCarouselItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <View style={{width: '100%', alignItems: 'center'}} key={item.id}>
          <MCQpt QuestionNumber={item.id} />
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            {item.answers.map((ans) => (
              <MCQcard
                key={ans.label}
                label={ans.label}
                answer={ans.answer}
                onpress={() => checkAnswer(ans.label, item.correct)}
                wrong={IsWrong && ans.label === selectedAnswer}
                correct={IsCorrect && ans.label === selectedAnswer}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };

  const slideNext = () => {
    const currentIndex = carouselRef.current.currentIndex;
    if (currentIndex < Data.length - 1) {
      carouselRef.current.snapToNext();
    }
  };

  const slidePrev = () => {
    const currentIndex = carouselRef.current.currentIndex;
    if (currentIndex > 0) {
      carouselRef.current.snapToPrev();
    }
  };

  const currentIndex = carouselRef.current?.currentIndex || 0;
  const isFirstSlide = false;
  const isLastSlide = false;

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={Data}
        renderItem={renderCarouselItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        autoplay={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isFirstSlide
                ? COLORS.transWhite
                : COLORS.primary,
            },
          ]}
          onPress={slidePrev}
          disabled={isFirstSlide}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isLastSlide ? COLORS.transWhite : COLORS.primary},
          ]}
          onPress={slideNext}
          disabled={isLastSlide}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    fontSize: 16,
  },
});
