/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import QuoteScreen from './src/screens/QuoteScreen';
import { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  //  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsReady(true);
  //   }, 3000); // splash shown for 3 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // if (!isReady) {
  //   return <SplashScreen />;
  // }

  // return <QuoteScreen />;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />

    </SafeAreaProvider>
  );
}

// function App() {
//   return <QuoteScreen />;
// }

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000); // splash shown for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <SplashScreen />;
  }

  return <QuoteScreen />;
  // return (
  //   <View style={styles.container}>
  //     <NewAppScreen
  //       templateFileName="App.tsx"
  //       safeAreaInsets={safeAreaInsets}
  //     />

      
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
