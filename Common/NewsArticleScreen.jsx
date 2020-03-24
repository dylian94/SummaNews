import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {Title, Paragraph, Surface, Caption, Button} from "react-native-paper";

export default class NewsArticleScreen extends React.Component {

    styles = StyleSheet.create({
        surface: {
            margin: 6,
            padding: 8,
            elevation: 4
        }
    });

    constructor(props) {
        super(props);

        const {article} = this.props.route.params;
        const headerTitle = 'Nieuws van ' + article.provider[0].name;
        this.props.navigation.setOptions({headerTitle});
    }

    _onButtonPress = () => {
        const {article} = this.props.route.params;

        Linking.openURL(article.url);
    };

    render() {
        const {article} = this.props.route.params;
        const styles = this.styles;

        return (
            <Surface style={styles.surface}>
                <Title>{article.name}</Title>
                <Paragraph>{article.description}</Paragraph>
                <Caption>{"Bron: " + article.provider[0].name}</Caption>
                <Button icon="link" mode="contained" onPress={this._onButtonPress}>
                    Lees verder
                </Button>
            </Surface>
        );
    }
}