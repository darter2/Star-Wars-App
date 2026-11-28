import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    listContainer: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 40,
      
    },
    listItem: {
      margin: 5,
      padding: 5,
      backgroundColor: "bonewhite",
      textAlign: "center",
    },
    swipeInstruction: {
      paddingHorizontal: 10,
      paddingTop: 8,
      textAlign: "center",
      color: "#555",
    },
    swipeAction: {
      marginVertical: 5,
      width: 120,
      backgroundColor: "transparent",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "100%",
      maxWidth: 400,
      alignItems: "center",
      padding: 24,
      borderRadius: 12,
      backgroundColor: "white",
    },
    modalTitle: {
      marginBottom: 20,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    modalClose: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 6,
      backgroundColor: "#1d4ed8",
    },
    modalCloseText: {
      color: "white",
      fontWeight: "bold",
    },
    listFilter: {
      height: 40,
      width: 200,
    },
    controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    },

  
});

export default styles;
