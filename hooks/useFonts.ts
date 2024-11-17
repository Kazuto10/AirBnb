// hooks/useFonts.js
import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
};

export default useFonts;
