import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import color from '../data/color';

export const CartScreen = ({route, navigation}: any) => {
  const {setActiveScreen, cart, setCart} = route.params;
  const [cartLocal, setCartLocal] = useState(cart);
  setActiveScreen('Cart');

  useEffect(() => {
    setCartLocal(cart);
  }, [cart]);

  useEffect(() => {
    setCart(cartLocal);
  }, [cartLocal]);

  const deleteItem = (title: string) => {
    setCartLocal(cartLocal.filter((it: any) => it.title !== title));
  };

  const addCount = (item: any) => {
    let arr = [...cartLocal];

    let findItem = arr.find(it => it.title === item.title);
    findItem.count++;
    setCartLocal(arr);
  };

  const minusCount = (item: any) => {
    let arr = [...cartLocal];

    let findItem = arr.find(it => it.title === item.title);
    if (findItem.count !== 1) {
      findItem.count--;
      setCartLocal(arr);
    }
  };

  const sendOrder = () => {
    setCart([]);
    setCartLocal([]);
    navigation.push('TableReservation', {fromCart: true});
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Kosz</Text>
      <ScrollView style={styles.cartItems}>
        {cartLocal.length >= 1 ? (
          cartLocal.map((item: any, index: number) => {
            return (
              <View style={styles.cartItem} key={index}>
                <View style={styles.cartItemTop}>
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemText}>{item.description}</Text>
                  </View>
                  <Text style={styles.itemTitle}>{item.price} zł.</Text>
                </View>
                <View style={styles.cartItemBottom}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => deleteItem(item.title)}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../assets/img/ion-trash.png')}
                    />
                  </TouchableHighlight>
                  <View style={styles.itemCount}>
                    <TouchableHighlight
                      underlayColor="#ff402fa6"
                      style={styles.itemCountBtn}
                      onPress={() => addCount(item)}>
                      <Text style={styles.itemCountBtnText}>+</Text>
                    </TouchableHighlight>
                    <Text style={styles.itemCountText}>{item.count}</Text>
                    <TouchableHighlight
                      underlayColor="#ff402fa6"
                      onPress={() => minusCount(item)}
                      disabled={item.count === 1 && true}
                      style={[
                        styles.itemCountBtn,
                        item.count === 1
                          ? {backgroundColor: 'rgba(196, 196, 196, 0.50)'}
                          : null,
                      ]}>
                      <Text
                        style={[
                          styles.itemCountBtnText,
                          item.count === 1 ? {color: '#898989'} : null,
                        ]}>
                        -
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.cartEmpty}>
            <View>
              <Text style={styles.cartEmptyTitle}>Twój koszyk jest pusty</Text>
              <TouchableHighlight style={styles.cartEmptyButton}>
                <Text
                  style={styles.cartEmptyButtonText}
                  onPress={() => navigation.navigate('Assortment')}>
                  Przejdź do katalogu
                </Text>
              </TouchableHighlight>
            </View>
            <Image
              style={styles.logo}
              source={require('../assets/img/logo.png')}
            />
          </View>
        )}
      </ScrollView>
      {cartLocal.length >= 1 && (
        <TouchableHighlight style={styles.cartEmptyButton}>
          <Text style={styles.cartEmptyButtonText} onPress={sendOrder}>
            Wymeldować się
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  cartWrapper: {},
  title: {
    fontSize: 24,
  },
  cartItems: {
    marginTop: 20,
  },
  cartItem: {
    backgroundColor: '#E5E5E5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  cartItemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cartItemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
    maxWidth: 150,
  },
  itemText: {
    fontWeight: '500',
    marginBottom: 5,
    maxWidth: 200,
  },
  itemCount: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  itemCountBtn: {
    backgroundColor: '#FF3F2F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  itemCountBtnText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
  itemCountText: {
    fontWeight: '700',
    fontSize: 16,
  },
  cartEmpty: {
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-between',
    height: '100%',
  },
  cartEmptyTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  cartEmptyButton: {
    backgroundColor: color,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  cartEmptyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logo: {
    height: 161 / 4,
    width: 720 / 4,
  },
});
