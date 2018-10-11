import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Colors from './component/shared/Colors';
import HomePage from './component/pages/HomePage';
import TesteCameraRoll from './component/pages/TesteCameraRoll';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { position, layout, scene, index, scenes } = sceneProps
            const toIndex = index
            const thisSceneIndex = scene.index
            const height = layout.initHeight
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [width, 0, 0]
            })

            const translateY = position.interpolate({
                inputRange: [0, thisSceneIndex],
                outputRange: [height, 0]
            })

            const slideFromRight = { transform: [{ translateX }] }
            const slideFromBottom = { transform: [{ translateY }] }

            const lastSceneIndex = scenes[scenes.length - 1].index

            if (lastSceneIndex - toIndex > 1) {
                if (scene.index === toIndex) return
                if (scene.index !== lastSceneIndex) return { opacity: 0 }
                return slideFromBottom
            }

            return slideFromRight
        },
    }
}

const Root = createStackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.primary,
                borderBottomWidth: 0,
            },
        }),
    },
    TesteCameraRoll: {
        screen: TesteCameraRoll,
        navigationOptions: ({ navigation }) => ({
            title: 'TesteCameraRoll',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.primary,
                borderBottomWidth: 0,
            },
        }),
    },
}, {
        transitionConfig,
    }
);

export default Root;