import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavProps, RootStackParamList } from './src/ParamList';

type BasicProps = {
  category: string;
  description: string;
  id: number;
  price: number;
  title: string;
  image: string;
};

export default function Home() {
  const [data, setData] = useState<BasicProps[]>([]);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        let dataResults: BasicProps[] = [];
        //?
        json.forEach((item: BasicProps) => {
          console.log('!!! item', item);
          let result = {
            category: item.category,
            description: item.description,
            id: item.id,
            price: item.price,
            title: item.title,
            image: item.image,
          };
          dataResults.push(result);
        });
        setData(dataResults);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Fetch Data" onPress={fetchData} />
      {/* <Button
        title="change view"
        onPress={() => navigation.navigate('Profile')}
      ></Button> */}
      <FlatList
        style={{ backgroundColor: 'white' }}
        //?
        data={data}
        //data={data: { price: number; image: string; title: string }}
        renderItem={({ item, index }) => (
          <FlatListItem1
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

function FlatListItem1({
  title,
  image,
  price,
  id,
}: {
  id: number;
  title: string;
  image: string;
  price: number;
  //navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('id:et är', id);
        navigation.navigate('Profile', {
          id: id,
        });
      }}
    >
      {/* //navigation.navigate('Profile') */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          padding: 10,
          backgroundColor: 'lightgray',
        }}
      >
        <Image
          style={{ height: 90, width: 90, padding: 10 }}
          source={{ uri: image }}
        ></Image>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>Price: {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
