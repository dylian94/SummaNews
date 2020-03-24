import React from 'react';
import {View, FlatList} from "react-native";
import NewsListItem from "./NewsListItem";

export default class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        }
    }

    _refreshList = async () =>
    {
        if (this.props.onRefresh !== undefined)
        {
            this.setState({refreshing: true});
            await this.props.onRefresh();
            this.setState({refreshing: false});
        }
    };

    render() {
        const refreshing = this.props.news == null || this.state.refreshing;

        return (
            <View style={{flex: 1}}>
                <FlatList
                    refreshing={refreshing}
                    onRefresh={this._refreshList}
                    contentContainerStyle={{paddingTop: 10, paddingBottom: 10}}
                    data={this.props.news}
                    renderItem={({item}) => <NewsListItem article={item} />}
                    keyExtractor={({url}, index) => url}
                />
            </View>
        );
    }
}