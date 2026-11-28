import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, FlatList, Modal, Pressable, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
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
    const [selectedName, setSelectedName] = useState(null);
    const swipeableRefs = useRef(new Map());
    const openSwipeable = useRef(null);

    const closeModal = () => {
        if (openSwipeable.current) {
            openSwipeable.current.close();
            openSwipeable.current = null;
        }
        setSelectedName(null);
    };

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data}
                ListHeaderComponent={
                    <>
                        <Text style={styles.swipeInstruction}>
                            Swipe an item to see information
                        </Text>
                        <Controls {...{ onFilter, onSort, asc }} />
                    </>
                }
                ListEmptyComponent={
                    loading ? <ActivityIndicator /> : error ? <Text>{error}</Text> : null
                }
                renderItem={({ item }) => (
                    <Swipeable
                        ref={(ref) => {
                            if (ref) {
                                swipeableRefs.current.set(item.key, ref);
                            } else {
                                swipeableRefs.current.delete(item.key);
                            }
                        }}
                        renderRightActions={() => <View style={styles.swipeAction} />}
                        onSwipeableOpen={() => {
                            openSwipeable.current = swipeableRefs.current.get(item.key);
                            setSelectedName(item.value);
                        }}
                    >
                        <Text style={styles.listItem}>{item.value}</Text>
                    </Swipeable>
                )}
            />
            <Modal
                visible={selectedName !== null}
                transparent
                animationType="fade"
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{selectedName}</Text>
                        <Pressable
                            accessibilityRole="button"
                            onPress={closeModal}
                            style={styles.modalClose}
                        >
                            <Text style={styles.modalCloseText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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

