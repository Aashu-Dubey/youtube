import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PaletteProp {
  colors: string[];
  index: number;
  gestureDegree: SharedValue<number>;
  activeColor: string;
  onColorPress: (color: string) => void;
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
}) => {
  const viewStyle = useAnimatedStyle(() => {
    const angle = (gestureDegree.value / (COLOR_PALETTE.length - 1)) * index;

    return {
      transform: [
        { translateY: (PALETTE_HEIGHT - 50) / 2 },
        { rotate: withSpring(`${angle}deg`, { mass: 0.4 }) },
        { translateY: -(PALETTE_HEIGHT - 50) / 2 },
      ],
    };
  }, []);

  const onAnchorPress = () =>
    (gestureDegree.value = gestureDegree.value === 0 ? 90 : 0);

  return (
    <Animated.View
      style={[styles.paletteContainer, styles.paletteSize, viewStyle]}
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
            style={[styles.anchorInnerCircle, { backgroundColor: activeColor }]}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
};

const ColorSwatch = () => {
  const gestureDegree = useSharedValue(0);

  const [activeColor, setActiveColor] = useState('rgb(64, 68, 88)');

  const calculateDegree = (
    e: GestureUpdateEvent<PanGestureHandlerEventPayload>,
  ) => {
    'worklet';
    let degree =
      Math.atan2(PALETTE_HEIGHT - e.y, e.x - PALETTE_WIDTH / 2) *
      (180 / Math.PI);
    degree < -90 && (degree = degree + 360);

    return 90 - degree;
  };

  const dragGesture = Gesture.Pan()
    .onStart(e => {
      gestureDegree.value = calculateDegree(e);
    })
    .onUpdate(e => {
      gestureDegree.value = calculateDegree(e);
    })
    .onEnd(() => {
      gestureDegree.value = gestureDegree.value > 90 ? 90 : 0;
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={activeColor} />

      <SafeAreaView
        style={[styles.container, { backgroundColor: activeColor }]}
      >
        <GestureDetector gesture={dragGesture}>
          <View style={[styles.paletteSize, { margin: 40 }]}>
            {COLOR_PALETTE.map((colors, index) => (
              <PaletteItem
                key={index}
                onColorPress={setActiveColor}
                {...{ activeColor, colors, index, gestureDegree }}
              />
            ))}
          </View>
        </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paletteSize: {
    width: PALETTE_WIDTH,
    height: PALETTE_HEIGHT,
  },
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
    borderRadius: 24 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorInnerCircle: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
  },
});

export default ColorSwatch;
