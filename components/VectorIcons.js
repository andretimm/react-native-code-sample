import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class ButtonWithIcon extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'steelblue',
            width: '90%',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60
          }}>
          <Text style={{ fontSize: 20, color: '#FFF', paddingRight: 10 }}>Click!!!</Text>
          <Icon name='ios-checkmark-circle-outline' color='#FFF' size={30} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default ButtonWithIcon
