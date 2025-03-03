import React from 'react';
import { SafeAreaView } from 'react-native';
import VideoPlayer from './src/components/VideoPlayer'; // Video bileşenini içe aktar

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VideoPlayer />
    </SafeAreaView>
  );
};

export default App;
