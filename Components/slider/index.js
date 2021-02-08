import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';
import TrackPlayer, {useProgress} from 'react-native-track-player';

export default function SliderComp() {
  const {position, duration} = useProgress();

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };

  //components
  return (
    <View style={styles.container}>
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        value={position}
        maximumValue={duration}
        minimumTrackTintColor="#ffffff"
        onSlidingComplete={handleChange}
        maximumTrackTintColor="rgba(255, 255, 255, .5)"
        thumbTintColor="#fff"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>{formatTime(position)}</Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
