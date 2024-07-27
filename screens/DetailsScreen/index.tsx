// DetailScreen.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {AppartmentInterface} from '../../interfaces';

type RootStackParamList = {
  Home: undefined;
  Details: {item: AppartmentInterface};
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailScreenRouteProp;
}

const DetailScreen: React.FC<Props> = ({route}) => {
  const {item} = route.params;

  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Owner Name: {item.ownerName}</Text>
      <Text>Owner Phone: {item.ownerPhone}</Text>
    </View>
  );
};

export default DetailScreen;
