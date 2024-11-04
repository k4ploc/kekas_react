import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Icon, MD3Colors, PaperProvider } from "react-native-paper";
import DetailsScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Icon source="home" color={MD3Colors.error50} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          title: "Settings",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Icon source="camera" color={MD3Colors.error50} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainStack.Navigator>
          <MainStack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route }) => ({
              title: route?.params?.title.toUpperCase() || "Details",
            })}
          />
        </MainStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
