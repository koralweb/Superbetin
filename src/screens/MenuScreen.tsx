import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import color from '../data/color';

const items = [
  {label: 'Katalog', navigate: 'Assortment'},
  {label: 'O nas', navigate: 'About Us'},
  {label: 'Rezerwacja stolika', navigate: 'TableReservation'},
  {label: 'Transmisje', navigate: 'Broadcasts'},
];

export const MenuScreen = ({navigation, route}: any) => {
  const {setActiveScreen} = route.params;
  setActiveScreen('Menu');

  return (
    <View style={styles.wrapper}>
      {items.map((item, index) => {
        return (
          <TouchableHighlight
            underlayColor="transparent"
            key={index}
            onPress={() => navigation.navigate(item.navigate)}>
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableHighlight>
        );
      })}
      <View style={styles.line} />
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  line: {
    backgroundColor: color,
    height: 5,
    width: '90%',
    marginTop: 15,
  },
  logo: {
    height: 161 / 4,
    width: 720 / 4,
    marginTop: 100,
  },
});
