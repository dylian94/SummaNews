import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ScreenHeader from "../Navigation/ScreenHeader";
import SearchMainScreen from "./SearchMainScreen";
import NewsArticleScreen from "../Common/NewsArticleScreen";

export default class SearchNavigator extends React.Component {
    render() {
        const Stack = createStackNavigator();

        return (
            <Stack.Navigator
                headerMode="screen"
                screenOptions={{
                    header: (headerProps) => (
                        <ScreenHeader {...headerProps} />
                    ),
                }}>
                <Stack.Screen
                    name="SearchMainScreen"
                    component={SearchMainScreen}
                    options={{ headerTitle: 'Summa nieuws zoeken' }}
                />
                <Stack.Screen
                    name="NewsArticleScreen"
                    component={NewsArticleScreen}
                    options={{ headerTitle: 'Summa nieuws' }}
                />
            </Stack.Navigator>
        );
    }
}