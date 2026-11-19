import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text, FlatList } from 'react-native';
import styles from '../style';
import ListControls from "./ListControl";

export default function List({
    Controls = ListControls,
    data,
    onFilter,
    onSort,
    asc,
    loading,
    error,
}) {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
                ListEmptyComponent={
                    loading ? <ActivityIndicator /> : error ? <Text>{error}</Text> : null
                }
                renderItem={({ item }) => <Text style={styles.listItem}>{item.value}</Text>}
            />
        </View>
    );
}
List.propTypes = {
  Controls: PropTypes.elementType,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

