import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    progressBar: {
        marginVertical: 10,
        height: 7,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 7
   },
  });

function ProgressBar({value, barColor = Colors.blue[100], backgroundColor = Colors.blue[20]}: {value: number, barColor?: string, backgroundColor?: string}) {


    return (
        <View style={[styles.progressBar, {backgroundColor}]}>
                <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: barColor, width: `${value < 100 ? value : 100}%`, borderRadius: 5}]} />
        </View>
    );
}

export default ProgressBar;