import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type NavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  title: string;
  image: string;
  price: number;
};
