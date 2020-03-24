import React from 'react';
import { View, StyleSheet } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Title, Drawer} from 'react-native-paper';

export default class NavigationDrawer extends React.Component {

    styles = StyleSheet.create({
        drawerContent: {
            flex: 1,
        },
        headerSection: {
            paddingLeft: 20,
        },
        title: {
            marginTop: 20,
            fontWeight: 'bold',
        },
        caption: {
            fontSize: 14,
            lineHeight: 14,
        },
        row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
        },
        paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
        },
        drawerSection: {
            marginTop: 15,
        }
    });

    render() {
        const styles = this.styles;
        const {navigation} = this.props;

        return (
            <DrawerContentScrollView {...this.props}>
                <View style={styles.drawerContent }>
                    <View style={styles.headerSection}>
                        <Title style={styles.title}>Summa Nieuws</Title>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItemList {...this.props} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        );
    }
}