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