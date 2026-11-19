import React from 'react';
import { View } from 'react-native';
import styles from '../style';
import ListContainer from '../components/ListContainer';
import { getStarships } from '../components/Api';

export default function Spaceships() {
    return (
        <View style={styles.container}>
            <ListContainer loadItems={getStarships} />
        </View>
    );
}
