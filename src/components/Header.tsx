import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';

interface IProps {
  type?: string;
}

export const Header = ({type}: IProps) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableHighlight
          onPress={
            type === 'menu'
              ? () => navigation.navigate('Assortment')
              : () => navigation.navigate('Menu')
          }
          underlayColor="transparent">
          <Image
            style={{height: 35, width: 35}}
            source={
              type === 'menu'
                ? require('../assets/img/close.png')
                : require('../assets/img/menu.png')
            }
          />
        </TouchableHighlight>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <TouchableHighlight
          onPress={
            type === 'cart'
              ? () => navigation.navigate('Assortment')
              : () => navigation.navigate('Cart')
          }
          underlayColor="transparent">
          <Image
            style={{height: 35, width: 35}}
            source={
              type === 'cart'
                ? require('../assets/img/close.png')
                : require('../assets/img/cart.png')
            }
          />
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.62,
    elevation: 30,
    height: 95,
  },
  logo: {
    height: 161 / 4,
    width: 720 / 4,
  },
});
