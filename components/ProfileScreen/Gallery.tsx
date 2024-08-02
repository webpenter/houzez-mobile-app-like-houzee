import { Animated, StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/images/g01.png'),
  require('../../assets/images/g02.png'),
  require('../../assets/images/g03.png'),
  require('../../assets/images/g04.png'),
  require('../../assets/images/g06.png'),
  require('../../assets/images/gallery-5.png'),
  require('../../assets/images/gallery-3.png'),
  require('../../assets/images/gallery-9.png'),
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gallery</Text>
        <Text style={styles.description}>
          Houzi is packed with new features that help you connect with your customers. It is an experience that is simpler, more useful and more enjoyable. Take a closer look at beautifully crafted app for your business.
        </Text>
      </View>
      <View style={styles.carousel}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContainer}
          initialScrollIndex={currentIndex}
          ref={flatListRef}
          onViewableItemsChanged={handleViewableItemsChanged}
        />
        <View style={styles.indicators}>
          {images.map((_, index) => (
            <Text
              key={index}
              style={[
                styles.indicator,
                { opacity: currentIndex === index ? 1 : 0.5 },
              ]}
            >
              o
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: '#2f5e99',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
  },
  description: {
    textAlign: 'center',
  },
  carousel: {
    flex: 1,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  image: {
    width,
    height: 200,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    color: '#2f5e99',
    fontSize: 26,
    marginHorizontal: 4,
  },
});

export default Gallery;
