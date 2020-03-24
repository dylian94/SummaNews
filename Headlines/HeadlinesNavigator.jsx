import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import HeadlinesMainScreen from "./HeadlinesMainScreen";
import ScreenHeader from "../Navigation/ScreenHeader";
import NewsArticleScreen from "../Common/NewsArticleScreen";

export default class HeadlinesNavigator extends React.Component {
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
                    name="HeadlinesMainScreen"
                    component={HeadlinesMainScreen}
                    options={{ headerTitle: 'Summa headlines' }}/>
                <Stack.Screen
                    name="NewsArticleScreen"
                    component={NewsArticleScreen}
                    options={{ headerTitle: 'Summa nieuws' }}
                />
            </Stack.Navigator>
        );
    }
}