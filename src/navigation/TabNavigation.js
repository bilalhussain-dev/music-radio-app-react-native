import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../constants';

// navigation stacks
import StackHome from './StackHome';
// import StackSearch from './StackSearch';
// import StackLibrary from './StackLibrary';

// components
import CustomTabBar from '../components/CustomTabBar';

// icons
import SvgTabHome from '../icons/Svg.TabHome';
// import SvgTabLibrary from '../icons/Svg.TabLibrary';
// import SvgTabSearch from '../icons/Svg.TabSearch';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({active}) => {
        let icon = <SvgTabHome active={active} />;

        if (route.name === 'StackSearch') {
          icon = <SvgTabSearch active={active} />;
        } else if (route.name === 'StackLibrary') {
          icon = <SvgTabLibrary active={active} />;
        }

        return icon;
      },
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.greyInactive,
    })}
    tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="StackHome"
      component={StackHome}
      options={{
        tabBarLabel: 'Home',
      }}
    />
  </Tab.Navigator>
);
