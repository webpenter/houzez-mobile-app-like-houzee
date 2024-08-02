import { Tabs } from 'expo-router';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/useColorScheme';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} size={26} color={color} />
          ),
        }}
      />
     <Tabs.Screen
        name="Saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'favorite' : 'favorite-outline'} size={26} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'verified-user' : 'supervised-user-circle'} size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
