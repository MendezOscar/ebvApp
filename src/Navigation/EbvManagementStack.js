import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "../Views/General/Task";
import EditTask from "../Views/General/EditTask";

const Stack = createStackNavigator();

export default function EbvStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#128C7E" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={Task}
        name="task"
        options={{ title: "Mis Tareas" }}
      />
      <Stack.Screen
        component={EditTask}
        name="edit-task"
        options={{ title: "Editar Tarea" }}
      />
    </Stack.Navigator>
  );
}
