import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Ebv from "../Views/Teams/Ebv";
import Details from "../Views/Teams/Details";
import Members from "../Views/Teams/Members";
import Notifications from "../Views/Teams/Notifications";

const Stack = createStackNavigator();

export default function EbvStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Ebv}
        name="ebv-main"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Details}
        name="details"
        options={{
          headerTransparent: true,
          headerTintColor: "#128C7E",
          title: "",
        }}
      />
      <Stack.Screen
        component={Members}
        name="members"
        options={{
          title: "Miembros",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={Notifications}
        name="notifications"
        options={{
          title: "Notificaciones",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
