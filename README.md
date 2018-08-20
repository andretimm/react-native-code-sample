# Code Samples

* #### [Rotas](https://reactnavigation.org)
Utilizado para criar as transações entre as telas.
``` shell
$ npm install --save react-navigation
```
```js
//Import da lib
import { createStackNavigator } from 'react-navigation';
.
.
.
// Cria rota dos componentes
export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
```
* #### [App Intro](https://github.com/FuYaoDe/react-native-app-intro)
Slide intro do aplicaitvo.
``` shell
$ npm i react-native-app-intro --save
$ npm i https://github.com/merryjs/react-native-app-intro --save
```

```js
//Import da lib
import AppIntro from 'react-native-app-intro';
.
.
.
    render() {
        return (
            <AppIntro customStyles={{ btnContainer: { flex: 1 } }}>
                <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
                    <View level={10}><Text style={styles.text}>Page 1</Text></View>
                    <View level={15}><Text style={styles.text}>Page 1</Text></View>
                    <View level={8}><Text style={styles.text}>Page 1</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={-10}><Text style={styles.text}>Page 2</Text></View>
                    <View level={5}><Text style={styles.text}>Page 2</Text></View>
                    <View level={20}><Text style={styles.text}>Page 2</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
                    <View level={8}><Text style={styles.text}>Page 3</Text></View>
                    <View level={0}><Text style={styles.text}>Page 3</Text></View>
                    <View level={-10}><Text style={styles.text}>Page 3</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={5}><Text style={styles.text}>Page 4</Text></View>
                    <View level={10}><Text style={styles.text}>Page 4</Text></View>
                    <View level={15}><Text style={styles.text}>Page 4</Text></View>
                </View>
            </AppIntro>
        );
    }
```

* #### [Shimmer Effect](https://blog.rocketseat.com.br/react-native-shimmer/)
Utilizado para efeito de load parecido com o do Facebook.

![Shimmer Effect](https://blog.rocketseat.com.br/wp-content/uploads/2018/06/Sem-ti%CC%81tulo-2.png)
``` shell
$ npm install react-native-linear-gradient
$ npm install react-native-shimmer-placeholder
$ react-native link react-native-linear-gradient
```

```js
//Import da lib
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
.
.
.
    render(){
        return(
            <ShimmerPlaceHolder
                style={styles.shimmerComponent}
                autoRun={true}
                visible={this.state.visible}>
                <Text style={styles.username}>Usuário {index}</Text>
            </ShimmerPlaceHolder>
        );
    }
```