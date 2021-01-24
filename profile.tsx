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

type BasicProps = {
  category: string;
  description: string;
  id: number;
  price: number;
  title: string;
  image: string;
};

export default function Profile(id: BasicProps) {
  console.log('värdet är emil', id);
  const [data, setData] = useState<BasicProps[]>([]);

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/${2}`)
      .then((response) => response.json())
      .then((json) => {
        let result: BasicProps[] = [];
        result.push(json.title);
        result.push(json.description);
        result.push(json.price);
        result.push(json.image);
        result.push(json.category);
        setData(result);

        //let dataResults: BasicProps[] = [];
        //dataResults.push(json);
        //setData(dataResults);

        // });
      });
  };
  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={fetchData} />
      {/* <Button title="show array" onPress={() => console.log(data)} /> */}
      <View
        style={{
          height: '40%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Image
          style={{
            height: 250,
            width: 250,
            marginBottom: 10,
            backgroundColor: 'lightGray',
          }}
          resizeMode="contain"
          source={{
            uri: data[3],
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 20 }}>
          {data[0]}
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: 'green',
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {data[2]}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Description
        </Text>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>{data[1]}</Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {data[4]}
        </Text>
        <Button
          title="add to cart"
          onPress={() => console.log('pressd')}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'lightgray',

    justifyContent: 'flex-start',
  },
});
