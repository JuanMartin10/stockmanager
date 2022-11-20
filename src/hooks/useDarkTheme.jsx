import {useColorScheme, StyleSheet} from 'react-native';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {adaptNavigationTheme} from 'react-native-paper';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

const makeStyles = ({isDarkMode}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export const useDarkTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = makeStyles(isDarkMode);

  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    light: NavigationDefaultTheme,
    dark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
      background: '#353535',
    },
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? CombinedDarkTheme.colors.card
      : CombinedDefaultTheme.colors.card,
  };

  const theme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;
  const statusBar = isDarkMode ? 'light-content' : 'dark-content';

  return {theme, styles, statusBar, backgroundStyle};
};
