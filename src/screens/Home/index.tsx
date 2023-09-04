import React, {useRef, useState} from 'react';
import {View, FlatList, ScrollView, StyleSheet, StatusBar} from 'react-native';

import {progress} from './data';
import {styles} from './styles';

import {sizes} from '@theme/colors';
import ProgressBar from '@component/Progress';
import ButtonIcon from '@component/Button/ButtonIcon';
import ImageContainer from '@component/Progress/ImageContainer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from './Header';

export default function Home() {
  const {top} = useSafeAreaInsets();

  const flatRef = useRef<FlatList>();
  const [initialIndex, setInitialIndex] = useState(0);

  const onPrev = () => {
    flatRef?.current?.scrollToIndex({animated: true, index: initialIndex - 1});
    setInitialIndex(initialIndex - 1);
  };

  const onNext = () => {
    flatRef?.current?.scrollToIndex({animated: true, index: initialIndex + 1});
    setInitialIndex(initialIndex + 1);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <Header />
      <View style={[styles.pagination, {paddingTop: top}]}>
        <ScrollView horizontal>
          {progress.map((item, index) => (
            <ProgressBar
              index={index}
              initialIndex={initialIndex}
              item={item}
              isLast={progress.length !== index + 1}
              key={String(index)}
            />
          ))}
        </ScrollView>
      </View>
      <FlatList
        ref={flatRef}
        data={progress}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled={false}
        initialScrollIndex={initialIndex}
        scrollEventThrottle={sizes.width}
        pagingEnabled
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <ImageContainer item={item} index={index} />
        )}
      />
      <View style={styles.buttonContainer}>
        {initialIndex !== 0 && (
          <ButtonIcon
            iconName="chevron-left"
            iconProps={{type: 'feather', size: 30}}
            containerStyle={StyleSheet.flatten([styles.arrowButton])}
            onAction={onPrev}
          />
        )}
        {initialIndex !== progress.length - 1 && (
          <ButtonIcon
            iconName="chevron-right"
            iconProps={{type: 'feather', size: 30}}
            containerStyle={StyleSheet.flatten([styles.arrowButton])}
            onAction={onNext}
          />
        )}
      </View>
    </View>
  );
}
