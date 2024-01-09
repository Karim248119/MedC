import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/Colors';
import Header2 from '../components/Headers/Header2';
import PageTitle from '../components/titles/PageTitle';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} />
      <PageTitle title={'Privacy Policy'} />
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
