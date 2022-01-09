/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [borderNormal, borderSoftWarning, boarderHardWarning] = [
    'white',
    'yellow',
    'red',
  ];
  const [Normal, softWarning, hardWarning] = [
    'white',
    'lightyellow',
    '#ffcccb',
  ];
  const maxChar = 40;
  let warningChar = .90 * maxChar;
  let [charLeft, updateCharLeft] = useState(maxChar);
  let [borderColor, updateBorderColor] = useState(borderNormal);
  let [fillColor, updateFillColor] = useState(Normal);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  let update = (e) => {
    let totalChar = e.length;
    updateCharLeft(maxChar - e.length);
    // if char in greater than warning
    if (totalChar >= warningChar) {
      // here two case if less then warning
      if (totalChar <= maxChar) {
        // in soft warning now
        updateBorderColor(borderSoftWarning);
        updateFillColor(softWarning);
      } else {
        // in hard warning now
        updateBorderColor(boarderHardWarning);
        updateFillColor(hardWarning);
      }

      } else {
        updateBorderColor(borderNormal);
        updateFillColor(Normal);
    }
    }

  return (
    <SafeAreaView style={backgroundStyle}>
  <View style={styles.item}>
    <Text style={{
      fontSize: 40,
      backgroundColor: 'white',
      textAlign: 'center',
      borderColor: 'gray',
      borderWidth: 4,
      borderRadius: 50,
      margin: 4,
      fontStyle: 'italic',
      fontWeight: '900',
      fontSize: 70,
      color: 'gray',
    }}>Twitter</Text>
  </View>
      <TextInput multiline={true} editable={true}
      placeholder="What's Happening"
      onChangeText={(e) => {update(e)}}
      style = {{
        borderColor: borderColor,
        borderRadius: 20,
        borderWidth: 5,
        padding: 1,
        marginHorizontal: 50,
        marginTop: 20,
        height: 200,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: fillColor,
      }}></TextInput>
      <Text
        style={{
        textAlign: 'center',
        borderWidth: 4,
        color: 'black',
        backgroundColor: fillColor,
        borderColor: borderColor,
        marginHorizontal: 50,
        marginTop: 10,
        borderRadius: 20,
          height: 30,
          fontSize: 20,
        }}>
        {' '}
        character left {charLeft}{' '}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
