import React from 'react';
import {Appbar} from 'react-native-paper';

export default class ScreenHeader extends React.Component {
    render() {
        const {scene, previous, navigation} = this.props;
        const {options} = scene.descriptor;

        return (
            <Appbar.Header>
                {previous ?
                    <Appbar.BackAction onPress={() => navigation.goBack()} /> :
                    <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />}
                <Appbar.Content title={options.headerTitle} />
            </Appbar.Header>
        );
    }
}