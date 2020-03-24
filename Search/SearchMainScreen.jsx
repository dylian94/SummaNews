import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, Searchbar} from "react-native-paper";
import NewsList from "../Common/NewsList";
import fetchNews from "../Common/fetchNews";

export default class SearchMainScreen extends React.Component {

    styles = StyleSheet.create({
        searchBar: {
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 6,
            marginRight: 6
        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
        }
    });

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: null,
            news: null,
            searchHidden: false
        }
    }

    _onRefresh = async () => {
        const news = await fetchNews(this.state.searchQuery);
        this.setState({news});
    };

    _onQueryChange = async (query) => {
        this.setState({ searchQuery: query });
    };

    _onSearch = async () => {
        this.setState({news: null});
        await this._onRefresh();
        this.setState({searchHidden: true});
    };

    async componentDidMount() {
        await this._onRefresh();
    }

    render() {
        const {searchQuery, searchHidden} = this.state;
        const styles = this.styles;

        return (
            <View style={{flex: 1}}>
                {searchHidden ? null :
                    <Searchbar
                        style={styles.searchBar}
                        placeholder="Zoekterm"
                        onChangeText={this._onQueryChange}
                        onIconPress={this._onSearch}
                        onSubmitEditing={this._onSearch}
                        value={searchQuery}
                    /> }
                <NewsList news={this.state.news} onRefresh={this._onRefresh} />
                {!searchHidden ? null :
                    <FAB
                        style={styles.fab}
                        large
                        icon="magnify"
                        onPress={() => this.setState({searchHidden: false})}
                    /> }
            </View>
        );
    }
}