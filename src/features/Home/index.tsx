import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
];
const Home = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 10,
          borderRadius: 10,
          backgroundColor: 'white',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Image
          style={{height: 120, width: '90%', marginVertical: 10}}
          source={{
            uri: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
