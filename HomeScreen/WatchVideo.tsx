import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WatchVideo = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/0sd8Ad7kohQ' }}
            style={styles.video}
          />
        </View>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://youtu.be/GxEZM2f5RhA?si=avD65L67knuQycVb' }}
            style={styles.video}
          />
        </View>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://youtu.be/0sd8Ad7kohQ?si=9j7zddLU2zOAIgRS' }}
            style={styles.video}
          />
        </View>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/0sd8Ad7kohQ' }}
            style={styles.video}
          />
        </View>
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://youtu.be/KoqzDHemzHA?si=MzWk1xM0T5laqBrI' }}
            style={styles.video}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WatchVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    marginVertical: 10,
    alignItems: 'center',
    borderRadius:10
  },
  video: {
    
    height: 350,
    width: 320,
  },
});
