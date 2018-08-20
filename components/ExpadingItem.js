import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';


export default class ExpadingItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Expanding ScrollView Example
                    </Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8]
                        .map(i => <Card key={i} id={i} />)}
                </ScrollView>
            </View>
        );
    }
}