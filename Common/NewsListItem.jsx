import React from 'react';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import {Card, Title, Caption} from 'react-native-paper';

export default class NewsListItem extends React.Component {

    static contextType = NavigationContext;

    styles = StyleSheet.create({
        card: {
            margin: 6,
            marginTop: 0,
        },
        title: {
            marginBottom: 12
        },
        caption: {
            marginTop: 12
        }
    });

    _onPress = () => {
        const navigation = this.context;
        const {article} = this.props;
        navigation.navigate("NewsArticleScreen", {article})
    };

    render() {
        const {article} = this.props;
        const styles = this.styles;

        return (
            <TouchableNativeFeedback onPress={this._onPress}>
                <Card style={styles.card}>
                    <Card.Content style={styles.title}>
                        <Title>{article.name}</Title>
                        {/*<Paragraph>{article.description}</Paragraph>*/}
                    </Card.Content>
                    {article.image !== undefined ? <Card.Cover source={{ uri: article.image.thumbnail.contentUrl }} /> : null}
                    <Card.Content style={styles.caption}>
                        <Caption>{"Bron: " + article.provider[0].name}</Caption>
                    </Card.Content>
                </Card>
            </TouchableNativeFeedback>
        );
    }
}