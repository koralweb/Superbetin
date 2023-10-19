import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export const ProductScreen = ({route}: any) => {
  const {setActiveScreen, product, setCart, cart} = route.params;
  const navigation: any = useNavigation();
  const [count, setCount] = useState(1);

  setActiveScreen('Product');

  const addItem = () => {
    let arr = [...cart];
    let newObj = {
      title: product.title,
      description: product.description,
      price: product.price,
      count: count,
    };

    const findItem = arr.find(item => item.title === product.title);

    if (findItem) {
      findItem.count += count;
      setCart(arr);
    } else {
      setCart([...cart, newObj]);
    }
    console.log(arr);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate('Assortment')}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/img/goback.png')}
          />
        </TouchableHighlight>
        <Text style={styles.title}>{product.title}</Text>
        <View style={{height: 30, width: 30}} />
      </View>
      <View style={styles.productImg}>
        <Image style={{height: 200, width: 200}} source={product.img} />
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>
          <Text style={{fontWeight: '700'}}>{product.price} zł</Text> za 1
          sztukę
        </Text>
        <View style={styles.itemCount}>
          <TouchableHighlight
            underlayColor="#ff402fa6"
            style={styles.itemCountBtn}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.itemCountBtnText}>+</Text>
          </TouchableHighlight>
          <Text style={styles.itemCountText}>{count}</Text>
          <TouchableHighlight
            underlayColor="#ff402fa6"
            disabled={count === 1 && true}
            style={[
              styles.itemCountBtn,
              count === 1
                ? {backgroundColor: 'rgba(196, 196, 196, 0.50)'}
                : null,
            ]}
            onPress={() => setCount(count - 1)}>
            <Text
              style={[
                styles.itemCountBtnText,
                count === 1 ? {color: '#898989'} : null,
              ]}>
              -
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight
        style={styles.addToCartButton}
        onPress={addItem}
        underlayColor="#ff402fa6">
        <Text style={styles.addToCartButtonText}>Dodaj do koszyka</Text>
      </TouchableHighlight>
      <View style={styles.productDesctiption}>
        <Text style={styles.productDesctiptionText}>{product.description}</Text>
        <Text style={styles.productDesctiptionText}>
          Waga jednej porcji: 38g
        </Text>
        <Text style={styles.productDesctiptionText}>
          Wartość odżywcza na 100 g:
        </Text>
        <View style={styles.productCharacteristic}>
          <Text style={styles.productDesctiptionText}>Energia wartość</Text>
          <Text style={styles.productDesctiptionText}>164.10 kcal</Text>
        </View>
        <View style={styles.productCharacteristic}>
          <Text style={styles.productDesctiptionText}>Wiewiórki</Text>
          <Text style={styles.productDesctiptionText}>10.80 g</Text>
        </View>
        <View style={styles.productCharacteristic}>
          <Text style={styles.productDesctiptionText}>Tłuszcze</Text>
          <Text style={styles.productDesctiptionText}>2.50 g</Text>
        </View>
        <View style={styles.productCharacteristic}>
          <Text style={styles.productDesctiptionText}>Węglowodany</Text>
          <Text style={styles.productDesctiptionText}>24.20 g</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    maxWidth: 200,
    textAlign: 'center',
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImg: {
    alignItems: 'center',
    marginTop: 30,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemCount: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  itemCountBtn: {
    backgroundColor: '#FF3F2F',
    padding: 10,
    borderRadius: 10,
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
  addToCartButton: {
    backgroundColor: '#FF3F2F',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  productDesctiption: {
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  productDesctiptionText: {
    fontWeight: '300',
    textAlign: 'center',
  },
  productCharacteristic: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
