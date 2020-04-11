import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserDataList from './src/UserDataList.js';
import UserDetails from './src/UserDetails.js';
//import { render } from 'react-dom';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import SearchableFlatList from './src/SearchableList';

export default function App() {


  return(
<AppContainer />
  );

}

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchableFlatList
  },
  UserDetails: {
    screen: UserDetails
  }
});

const AppContainer = createAppContainer(AppNavigator); 

//   return (
//   <UserDataList />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   listitem: {
//     backgroundColor: '#f9c2ff',
//     padding: '20',
//     marginVertical: '8',
//     marginHorizontal: '16',
//     // color: 'red',
//     // fontWeight: 'bold',
//     // fontSize: '20',
//   }
// });
