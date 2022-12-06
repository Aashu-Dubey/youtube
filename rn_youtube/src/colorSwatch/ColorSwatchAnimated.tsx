/**
 * This is just an attempt to replicate the reanimated solution using in-built Animated and Gesture APIs, Especially to run it on rn-macos and rn-windows.
 * but cause if so many bugs and limitations, this solution is incomplete and has bugs, and a little laggy.
 * Few issues and limitations (tested only on iOS, Android and macos)
 * 1. Initially we get correct gesture data, but as Palette View is actively rotating we don't get correct data cause of some bug,
 *    except if we provide pointerEvents="box-only", but then it disables the click events, which works otherwise.
 *    Even this doesn't correctly work on Android, so require a proper solution.
 * 2. rn-macos returns gesture data respective to whole window, instead of just palette view.
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

interface PaletteProp {
  colors: string[];
  index: number;
  gestureDegree: React.MutableRefObject<Animated.Value>;
  activeColor: string;
  onColorPress: (color: string) => void;
  onAnchorPress: () => void;
}

const PALETTE_WIDTH = 60;
const PALETTE_HEIGHT = 250;

const COLOR_PALETTE = [
  ['rgb(195, 107, 88)', 'rgb(216, 160, 164)', 'rgb(209, 178, 195)'],
  ['rgb(202, 106, 123)', 'rgb(224, 156, 192)', 'rgb(212, 171, 215)'],
  ['rgb(187, 122, 248)', 'rgb(212, 172, 250)', 'rgb(216, 191, 251)'],
  ['rgb(118, 134, 247)', 'rgb(157, 183, 259)', 'rgb(168, 198, 250)'],
  ['rgb(103, 130, 169)', 'rgb(182, 208, 237)', 'rgb(195, 218, 246)'],
  ['rgb(0, 0, 0)', 'rgb(64, 68, 88)', 'rgb(122, 128, 159)'],
];

const PaletteItem: React.FC<PaletteProp> = ({
  colors,
  index,
  gestureDegree,
  activeColor,
  onColorPress,
  onAnchorPress,
}) => {
  const angle = useRef(new Animated.Value(0));

  gestureDegree.current?.addListener(e => {
    const a = (e.value / (COLOR_PALETTE.length - 1)) * index;

    angle.current.setValue(a);
  });

  return (
    <Animated.View
      style={[
        styles.paletteContainer,
        styles.paletteSize,
        {
          transform: [
            { translateY: (PALETTE_HEIGHT - 50) / 2 },
            {
              rotate: angle.current.interpolate({
                inputRange: [-360, 360],
                outputRange: ['-360deg', '360deg'],
                // extrapolate: 'clamp',
              }),
            },
            { translateY: -(PALETTE_HEIGHT - 50) / 2 },
          ],
        },
      ]}
    >
      {colors.map((col, ci) => (
        <Pressable
          key={ci}
          style={[
            styles.colorItem,
            ci === 0 && styles.colorTop,
            {
              backgroundColor: col,
              marginBottom: ci < colors.length - 1 ? 4 : 0,
            },
          ]}
          onPress={() => onColorPress(col)}
        />
      ))}
      <Pressable style={styles.anchorContainer} onPress={onAnchorPress}>
        <View style={[styles.anchorOuterCircle, { borderColor: activeColor }]}>
          <View
            style={[
              styles.anchorInnerCircle,
              { backgroundColor: activeColor, borderColor: activeColor },
            ]}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
};

const ColorSwatchAnimated = () => {
  const [activeColor, setActivecolor] = useState('rgb(64, 68, 88)');

  /**
   * Since we get correct touch data only when pointerEvents is "box-only"
   * this was just an attempt to see if we can change pointerEvents conditionally, (doesn't work)
   */
  // const [isGestureActive, setGestueActive] = useState(false);

  const gestureDegree = useRef(new Animated.Value(0));
  const curGestureDegree = useRef(0);

  gestureDegree.current?.addListener(e => {
    curGestureDegree.current = e.value;
  });

  const calculateDegree = (e: GestureResponderEvent) => {
    const { locationX: x, locationY: y } = e.nativeEvent;

    let degree =
      Math.atan2(PALETTE_HEIGHT - y, x - PALETTE_WIDTH / 2) * (180 / Math.PI);
    degree < -90 && (degree = degree + 360);

    return 90 - degree;
  };

  const pan = useMemo(
    () =>
      PanResponder.create({
        // onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
          // Not sure if it makes any difference, added just as a workaround to fix issues
          const isActive = Math.abs(gestureState.dx) > 5;
          // setGestueActive(() => isActive);
          return isActive;
        },
        onPanResponderGrant: e => {
          // isGestureActive && gestureDegree.current.setValue(calculateDegree(e));
          gestureDegree.current.setValue(calculateDegree(e));
        },
        onPanResponderMove: e => {
          // isGestureActive && gestureDegree.current.setValue(calculateDegree(e));
          gestureDegree.current.setValue(calculateDegree(e));
        },
        onPanResponderRelease: () => {
          Animated.spring(gestureDegree.current, {
            toValue: curGestureDegree.current > 90 ? 90 : 0,
            mass: 0.4,
            useNativeDriver: true,
          }).start();
          // setGestueActive(() => false);
        },
      }),
    [],
  );

  const [panResponder, setPanResponder] = useState(pan);

  useEffect(() => {
    setPanResponder(pan);
  }, [pan]);

  const onAnchorPress = () => {
    Animated.spring(gestureDegree.current, {
      toValue: curGestureDegree.current === 0 ? 90 : 0,
      mass: 0.4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={activeColor} />

      <SafeAreaView style={{ flex: 1, backgroundColor: activeColor }}>
        <View style={{ flex: 1, margin: 40, justifyContent: 'flex-end' }}>
          <View
            style={[styles.paletteSize, { width: '100%' }]}
            {...panResponder.panHandlers}
            // here we get correct gesture data for rotation, if this is 'box-only', but in that case it disables click events
            // else we can click, but we get wrong gesture data
            pointerEvents="box-only"
            // pointerEvents={isGestureActive ? 'box-only' : undefined}
          >
            {COLOR_PALETTE.map((colors, index) => (
              <PaletteItem
                key={index}
                onColorPress={setActivecolor}
                {...{
                  activeColor,
                  colors,
                  index,
                  gestureDegree,
                  onAnchorPress,
                }}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  paletteSize: { width: PALETTE_WIDTH, height: PALETTE_HEIGHT },
  paletteContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 20,
  },
  colorItem: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  colorTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  anchorContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorInnerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

export default ColorSwatchAnimated;
