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

* #### [Tab](https://timomeh.gitbook.io/material-bottom-navigation/#usage)

``` shell
$ npm install react-native-material-bottom-navigation
$ npm install react-native-vector-icons --save
```
[Configurar os icones](https://github.com/oblador/react-native-vector-icons)
```js
//Import da lib
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
.
.
.
    tabs = [
        {
            key: 'games',
            icon: 'gamepad-variant',
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: 'movie',
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: 'music-note',
            label: 'Music',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Your screen contents depending on current tab. */}
                </View>
                <BottomNavigation
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
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

 #### [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
Add some icons to React Native Apps!!!

![React Native Vector Icons](https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png)
``` shell
$ npm install react-native-vector-icons
$ react-native link react-native-vector-icons
```
### iOS 

#### Option: Manually

If you want to use any of the bundled icons, you need to add the icon fonts to your Xcode project. Just follow these steps:

* Browse to `node_modules/react-native-vector-icons` and drag the folder `Fonts` (or just the ones you want) to your project in Xcode. **Make sure your app is checked under "Add to targets" and that "Create groups" is checked if you add the whole folder**.
* Edit `Info.plist` and add a property called **Fonts provided by application** (or `UIAppFonts` if Xcode won't autocomplete/not using Xcode) and type in the files you just added. It will look something like this:

![XCode screenshot](https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png)

*Note: you need to recompile your project after adding new fonts, also ensure that they also appear under __Copy Bundle Resources__ in __Build Phases__.*

If you want to use the TabBar/NavigatorIOS integration or use `getImageSource`, then you need to add `RNVectorIcons.xcodeproj` to **Libraries** and add `libRNVectorIcons.a` to **Link Binary With Libraries** under **Build Phases**. [More info and screenshots about how to do this is available in the React Native documentation](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).

#### Option: With `react-native link`

`$ react-native link react-native-vector-icons`

*Note: Some users are having trouble using this method, try one of the others if you are too.*

#### Option: With [CocoaPods](https://cocoapods.org/)

Add the following to your `Podfile` and run `pod update`:

```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Edit `Info.plist` as described above. 

If you are using `use_frameworks!` in your `Podfile` you instead need to dynamically load the icon font by doing `Icon.loadFont()` when boostrapping your application.

*Note: You must be consuming React itself via CocoaPods for this to work, see [React Native documentation](https://facebook.github.io/react-native/docs/integration-with-existing-apps) on how to set that up.*

### Android

#### Option: With Gradle (recommended)

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

To customize the files being copied, add the following instead:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

#### Option: Manually

* Copy the contents in the `Fonts` folder to `android/app/src/main/assets/fonts` (*note lowercase font folder*). 

##### Integrating library for `getImageSource` and `ToolbarAndroid` support

These steps are optional and only needed if you want to use the `Icon.getImageSource` function or using custom icons in the `Icon.ToolbarAndroid` component. 

* Edit `android/settings.gradle` to look like this (without the +):

  ```diff
  rootProject.name = 'MyApp'

  include ':app'

  + include ':react-native-vector-icons'
  + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```

* Edit `android/app/build.gradle` (note: **app** folder) to look like this: 

  ```diff
  apply plugin: 'com.android.application'

  android {
    ...
  }

  dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
  + compile project(':react-native-vector-icons')
  }
  ```

* Edit your `MainApplication.java` (deep in `android/app/src/main/java/...`) to look like this (note **two** places to edit):

  ```diff
  package com.myapp;

  + import com.oblador.vectoricons.VectorIconsPackage;

  ....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage()
  +   , new VectorIconsPackage()
      );
    }

  }
  ```

*Note: If you're using React Native (Android) <= 0.17, [follow this instructions](https://github.com/oblador/react-native-vector-icons/blob/2fe5b97afa849652215e3258189e8ca3ea775c53/README.md#integrating-library-for-getimagesource-support)*

```js
import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
// import the Icon component
// after the backSlash you have to choose what lib icons user
// ONE OF THIS
// AntDesign by AntFinance (297 icons)
// Entypo by Daniel Bruce (411 icons)
// EvilIcons by Alexander Madyankin & Roman Shamin (v1.10.1, 70 icons)
// Feather by Cole Bemis & Contributors (v4.7.0, 266 icons)
// FontAwesome by Dave Gandy (v4.7.0, 675 icons)
// FontAwesome 5 by Fonticons, Inc. (v5.3.1, 1341 (free) 3978 (pro) icons)
// Foundation by ZURB, Inc. (v3.0, 283 icons)
// Ionicons by Ben Sperry (v4.2.4, 696 icons)
// MaterialIcons by Google, Inc. (v3.0.1, 932 icons)
// MaterialCommunityIcons by MaterialDesignIcons.com (v2.8.94, 2894 icons)
// Octicons by Github, Inc. (v8.0.0, 177 icons)
// Zocial by Sam Collins (v1.0, 100 icons)
// SimpleLineIcons by Sabbir & Contributors (v2.4.1, 189 icons)
import Icon from 'react-native-vector-icons/Ionicons'

class ButtonWithIcon extends Component {
  render () {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'steelblue',
          width: '90%',
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        <Text>Click!!!</Text>
        <Icon name='ios-user' color='#FF5722' size={25} />
      </TouchableOpacity>
    )
  }
}

export default ButtonWithIcon
```