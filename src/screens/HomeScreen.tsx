// HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type StackT = {
  Home: undefined;
  Profile: undefined;
};

type NavigationTypes = StackNavigationProp<StackT, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationTypes>();
  const handleNavigation = () => navigation.navigate('Profile');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Profile"
        onPress={handleNavigation}
      />
    </View>
  );
};

export default HomeScreen;
