import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { height, width } = Dimensions.get('window');

const videos = [
  { id: 1, source: { uri: 'https://www.w3schools.com/html/mov_bbb.mp4' } }
];

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      {videos.map((video) => (
        <View key={video.id} style={styles.videoContainer}>

<Video
  source={{ uri: 'file:///Users/yasaraslan/Desktop/BafirokApp/src/assets/videos/video1.mp4' }}
  style={{ width: '100%', height: 300 }}
  resizeMode="cover"
  repeat
  muted={false}
  controls={true}
  onError={(error) => console.log("🚨 Video Yükleme Hatası:", error)}
  onLoad={() => console.log("✅ Video Başarıyla Yüklendi!")}
  onLoadStart={() => console.log("📢 Video yükleniyor...")}
/>
          />
          <Text style={styles.overlayText}>Bafirok Video {video.id}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  video: {
    width: width,
    height: height,
  },
  overlayText: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FeedScreen;

