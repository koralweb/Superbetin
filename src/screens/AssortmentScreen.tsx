import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import products from '../data/products';
import color from '../data/color';

const categoriesList = products.reduce((acc: any, el: any) => {
  if (!acc.includes(el.label)) {
    return [...acc, el.label];
  }
  return acc;
}, []);

export const AssortmentScreen = ({route}: any) => {
  const {setActiveScreen, products, setCart, cart} = route.params;
  setActiveScreen(route.name);
  const navigation: any = useNavigation();
  const [activeCategories, setActiveCategories] = useState('Sushi');
  const [cartLocal, setCartLocal] = useState([]);

  useEffect(() => {
    setCartLocal(cart);
    console.log(cart, ' cart');
  }, [cart]);

  useEffect(() => {
    setCart(cartLocal);
    console.log(cartLocal);
  }, [cartLocal]);

  const addItem = (item: any) => {
    let arr = [...cartLocal];

    let newObj = {
      title: item.title,
      description: item.description,
      price: item.price,
      count: 1,
    };

    const findItem: any = arr.find(it => it.title === item.title);

    if (findItem) {
      findItem.count++;
    } else {
      setCartLocal([...arr, newObj]);
    }
    console.log(cartLocal);
  };
  return (
    <View style={styles.wrapper}>
      <View style={{height: 50}}>
        <ScrollView horizontal={true} style={styles.cateroriesList}>
          {categoriesList.map((item, index) => {
            return (
              <Button
                onPress={() => setActiveCategories(item)}
                color={activeCategories === item ? color : '#000'}
                title={item}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.title}>{activeCategories}</Text>
      <ScrollView style={styles.items}>
        {products
          ?.filter(el => el.label === activeCategories)
          .map((item: any, index: number) => {
            return (
              <TouchableHighlight
                key={index}
                style={styles.item}
                onPress={() =>
                  navigation.navigate('Product', {
                    product: item,
                    setCartAssortment: setCartLocal,
                  })
                }
                underlayColor="transparent">
                <>
                  <Image style={styles.itemImg} source={item.img} />
                  <View style={styles.itemLeft}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
                    <View style={styles.itemButtonWrapper}>
                      <TouchableHighlight
                        style={styles.itemButton}
                        underlayColor="transparent">
                        <Text style={styles.itemButtonText}>
                          <Text style={{fontWeight: '700'}}>
                            {item.price}zł
                          </Text>{' '}
                          na 1 porcję
                        </Text>
                      </TouchableHighlight>
                      {cartLocal.find(it => it.title === item.title) ? (
                        <Image
                          style={{height: 50, width: 50}}
                          source={require('../assets/img/added.png')}
                        />
                      ) : (
                        <TouchableHighlight
                          underlayColor="#ff402fa6"
                          style={styles.itemButton}
                          onPress={() => addItem(item)}>
                          <Image
                            style={{height: 20, width: 20}}
                            source={require('../assets/img/plus.png')}
                          />
                        </TouchableHighlight>
                      )}
                    </View>
                  </View>
                </>
              </TouchableHighlight>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  cateroriesList: {
    marginTop: 10,
  },
  categoriesItem: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  items: {
    marginTop: 30,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 20,
  },
  itemImg: {
    height: 120,
    width: 120,
  },
  itemTitle: {
    fontWeight: '600',
    fontSize: 16,
    maxWidth: 180,
  },
  itemDescription: {
    maxWidth: 220,
    marginTop: 15,
  },
  itemButtonWrapper: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  itemButton: {
    backgroundColor: color,
    padding: 15,
    borderRadius: 15,
  },
  itemButtonText: {
    color: '#fff',
  },
  itemLeft: {
    width: Dimensions.get('window').width - 110,
    marginLeft: 10,
  },
});
