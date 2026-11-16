import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList  } from 'react-native';
import styles from '../style';
import ListControls from "./ListControl"

const data = new Array(100)
    .fill(null)
    .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default function List({ Controls = ListControls, data, onFilter, onSort, asc }) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
                renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
            />
        </View>
    );
}
List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};

