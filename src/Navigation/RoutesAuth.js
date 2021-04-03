import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import TaskButton from "../Components/TaskButton";

import EbvStack from "./EbvStack";
import ProfileStack from "./ProfileStack";
import EbvManagement from "./EbvManagementStack";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="ebv"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        style: {
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          backgroundColor: "#128C7E",
          paddingBottom: 5,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => showIcon(route, color),
      })}
    >
      <Tab.Screen component={EbvStack} name="ebv" optiones={{ title: "Ebv" }} />
      <Tab.Screen
        component={EbvManagement}
        name="ebv-management"
        options={{ title: "", tabBarIcon: () => <TaskButton /> }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="perfil"
        optiones={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
};

function showIcon(route, color) {
  let iconName = "";
  switch (route.name) {
    case "ebv":
      iconName = "account-group-outline";
      break;
    case "ebv-management":
      iconName = "comment-edit-outline";
      break;
    case "perfil":
      iconName = "account-circle-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={24} color={color} />
  );
}

export default function RoutesAuth() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
