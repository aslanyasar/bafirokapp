import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/videos/video1.mp4')} // Yerel video dosyan
        style={styles.video}
        controls={true} // Oynatma kontrolleri (play, pause vs.)
        resizeMode="contain" // Video boyutunu ekrana sığdır
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;
