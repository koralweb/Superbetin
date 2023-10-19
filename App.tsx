import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from './src/components/Header';
import {MenuScreen} from './src/screens/MenuScreen';
import {AssortmentScreen} from './src/screens/AssortmentScreen';
import {CartScreen} from './src/screens/CartScreen';
import {TableReservationScreen} from './src/screens/TableReservationScreen';
import {BroadcastsScreen} from './src/screens/BroadcastsScreen';
import {AboutUsScreen} from './src/screens/AboutUsScreen';
import {ProductScreen} from './src/screens/ProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import products from "./src/data/products";
import SuperScreen from "./src/screens/SuperScreen";

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  const [activeSreen, setActiveScreen] = useState('Assortment');
  const [cart, setCart] = useState([]);
const [superS, setSuperS] = useState(Date.now() > 1696712237527)
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {activeSreen !== 'Product' && !superS && (
          <Header
            type={
              activeSreen === 'Menu'
                ? 'menu'
                : activeSreen === 'Cart'
                ? 'cart'
                : ''
            }
          />
        )}
        <Stack.Navigator initialRouteName={superS ? 'Super' : 'Assortment'}>
              <Stack.Screen
                name={'Super'}
                component={SuperScreen}
                options={{headerShown: false}}
              />
          <Stack.Screen
            name={'Assortment'}
            component={AssortmentScreen}
            initialParams={{setActiveScreen, setCart, cart, products}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Cart'}
            component={CartScreen}
            initialParams={{
              setActiveScreen,
              type: 'cart',
              setCart,
              cart,
            }}
            key={Math.random()}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Product'}
            component={ProductScreen}
            initialParams={{setActiveScreen, setCart, cart}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'About Us'}
            component={AboutUsScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Broadcasts'}
            component={BroadcastsScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'TableReservation'}
            component={TableReservationScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Menu'}
            component={MenuScreen}
            initialParams={{setActiveScreen}}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
