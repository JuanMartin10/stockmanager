import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDarkTheme } from '../hooks/useDarkTheme';
import StoreScreen from '../store/containers/StoreScreen';
import HomeScreen from '../home/containers/HomeScreen';
import ProductScreen from '../product/containers/ProductScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { theme, backgroundStyle, statusBar, styles } = useDarkTheme();

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={statusBar}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Store"
            component={StoreScreen}
            options={({ route }) => ({
              title: route.params.selectedStore.name,
            })}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={({ route }) => ({
              title: route.params.product.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default Navigation;
