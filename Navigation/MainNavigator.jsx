import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NavigationDrawer from "./NavigationDrawer";
import HeadlinesNavigator from "../Headlines/HeadlinesNavigator";
import SearchNavigator from "../Search/SearchNavigator";

export default class MainNavigator extends React.Component {
    render() {
        const Drawer = createDrawerNavigator();

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Headlines"
                                  drawerContent={(contentProps) => <NavigationDrawer {...contentProps} />}>
                    <Drawer.Screen
                        name="Headlines"
                        component={HeadlinesNavigator}
                        options={{
                            title: "Recent nieuws",
                            drawerIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="newspaper" color={color} size={size} />
                            )
                        }}
                    />
                    <Drawer.Screen
                        name="Search"
                        component={SearchNavigator}
                        options={{
                            title: "Zoeken",
                            drawerIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="magnify" color={color} size={size} />
                            )
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}