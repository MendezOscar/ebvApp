import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CellPhoneValidation from "../Views/Accounts/CellPhoneValidation";
import SendConfirmation from "../Views/Accounts/SendConfirmation";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={CellPhoneValidation}
        name="cell-phone-validation"
        options={{
          title: "Confirma tu numero de telefono",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={SendConfirmation}
        name="send-confirmation"
        options={{
          title: "Confirmar numero",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
