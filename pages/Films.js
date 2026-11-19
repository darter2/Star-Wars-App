import React from 'react';
import { View } from 'react-native';
import styles from '../style';
import ListContainer from '../components/ListContainer';
import { getFilms } from '../components/Api';

export default function Films({ navigation }) {
    return (
        <View style={styles.container}>
            <ListContainer loadItems={getFilms} />
        </View>
    );
}

