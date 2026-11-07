import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import styles from '../style';

export default function Films({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Films</Text>
            <Button
                title="Go to spaceships"
                onPress={() => navigation.navigate('Spaceships')}
            />
        </View>
    );
}

