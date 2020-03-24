import React from 'react';
import {StyleSheet, View} from 'react-native';
import NewsList from "../Common/NewsList";
import fetchNews from "../Common/fetchNews";

export default class HeadlinesMainScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            news: null
        }
    }

    _onRefresh = async () => {
        const news = await fetchNews();
        this.setState({news});
    };

    async componentDidMount() {
        await this._onRefresh();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NewsList news={this.state.news} onRefresh={this._onRefresh} />
            </View>
        );
    }
}