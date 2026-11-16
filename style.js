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
