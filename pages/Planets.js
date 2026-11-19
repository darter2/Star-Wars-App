import React from 'react';
import { View } from 'react-native';
import styles from '../style';
import ListContainer from '../components/ListContainer';
import { getPlanets } from '../components/Api';

export default function Planets() {
    return (
        <View style={styles.container}>
            <ListContainer loadItems={getPlanets} />
        </View>
    );
}
