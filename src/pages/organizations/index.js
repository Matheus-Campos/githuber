import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Organization from './components/Organization';
import api from 'services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={24} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.LoadOrganizations();
  }

  LoadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);
    this.setState({ data: response.data, loading: false, refreshing: false });
  }

  renderListItem = ({ item }) => <Organization organization={item} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      onRefresh={this.LoadOrganizations}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()}
      </View>
    );
  }
}
