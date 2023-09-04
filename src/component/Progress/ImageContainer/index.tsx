import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ProgressType} from '@screens/Home/data';
import Typography from '@typo/index';
import {theme} from '@theme/index';

interface PropsType {
  item: ProgressType;
  index: number;
}

export default function ImageContainer({item, index}: PropsType) {
  return (
    <ImageBackground
      style={styles.container}
      source={{uri: item.image}}
      blurRadius={10}>
      <View style={styles.quoteContainer}>
        <Typography style={styles.text}>
          Imagination is more important than knowledge. For knowledge is
          limited, whereas imagination embraces the entire world, stimulating
          progress, giving birth to evolution.
        </Typography>
        <Typography style={styles.author}>-- Fu*k World</Typography>
      </View>
    </ImageBackground>
  );
}
