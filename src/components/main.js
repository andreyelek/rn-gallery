import React, {Component} from "react";
import {
  View, 
  Button, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ActivityIndicator
} from "react-native";
import {makeRemoteRequest, handleRefresh, handleLoadMore} from "../actions"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
    // paddingBottom: 5,
    paddingLeft: 5,
    width: "100%"
  },
  photo: {
    height: 60,
    width: 60
  },
  photoName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  userName: {
    color: 'rgba(0,0,0,.4)',
  }
})

class Main extends React.Component {

  static navigationOptions = {
    title: 'Photo List',
  };

  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "74%",
          marginLeft: "23%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  componentDidMount() {
    makeRemoteRequest()
  }
  
 /*renderFooter () {
    if (!this.props.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };*/

  renderFlatListItem(item) {
    const { navigate } = this.props.navigation;
    return(
      <TouchableOpacity onPress={() => navigate('Photo', { user: item.name, image_url:item.image_url })} style={styles.container}>
        <Image
          source={{uri: item.image_url}} style={styles.photo}
        />
        <View style={{alignItems: 'flex-start', marginBottom: 10, marginLeft: 10}}>
          <Text style={styles.photoName}>{item.name}</Text>
          <Text style={styles.userName}>{item.user.fullname}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  render() {
    const {
        photos,
        refreshing
    } = this.props;
    console.log(this.props)
    return (
      <View>
        <FlatList style = {{backgroundColor: '#fff'}}
          data={photos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderFlatListItem(item)}
          ItemSeparatorComponent={this.renderSeparator}
          //ListFooterComponent={this.renderFooter}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Main);