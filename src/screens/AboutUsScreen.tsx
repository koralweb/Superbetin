import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const AboutUsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>O nas</Text>
      <View style={{justifyContent: 'space-between', height: '87%'}}>
        <View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemTitle}>Początek</Text>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/img/about-us.png')}
              />
            </View>
            <Text style={styles.itemText}>
              Jesteśmy Sports Sushi Cafe, Twoimi niezawodnymi przewodnikami po
              wspaniałym świecie Kuchnia japońska. Nasi szefowie kuchni
              inspirowani stylem vintage tradycje i współczesne trendy, tworzą
              niepowtarzalne dania, które zachwycają smakiem i estetyką.
            </Text>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemTitle}>Dania</Text>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/img/about-us.png')}
              />
            </View>
            <Text style={styles.itemText}>
              W naszej kawiarni zawsze znajdziesz najświeższe sushi i sashimi, a
              także wiele innych tradycyjnych dań kuchni japońskiej. Nasz
              asortyment odpowiedni zarówno dla miłośników klasyki, jak i tych,
              którzy chcą spróbuj czegoś nowego i niezwykłego.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo.png')}
          />
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
  },
  item: {
    padding: 20,
    backgroundColor: 'rgba(229, 229, 229, 0.50)',
    borderRadius: 20,
    marginVertical: 15,
  },
  itemTitle: {
    fontSize: 20,
  },
  itemText: {},
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    height: 161 / 4,
    width: 720 / 4,
  },
});
