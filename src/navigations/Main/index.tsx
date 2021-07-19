import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens containers
import { HomeContainer } from '../../screens/Main/Home';
import { SearchContainer } from '../../screens/Main/Search';
import { AddPostContainer } from '../../screens/Main/AddPost';
import { ActivityContainer } from '../../screens/Main/Activity';
import { ProfileContainer } from '../../screens/Main/Profile';

const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Search" component={SearchContainer} />
      <Tab.Screen name="AddPost" component={AddPostContainer} />
      <Tab.Screen name="Activity" component={ActivityContainer} />
      <Tab.Screen name="Profile" component={ProfileContainer} />
    </Tab.Navigator>
  );
}
