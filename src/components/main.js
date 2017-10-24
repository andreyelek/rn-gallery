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
import {makeRemoteRequest, resetPages, incrementPages} from "../actions"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
function getRandom() {
  return Math.random() * (1e20 - -1e20) + -1e20;
}
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

constructor(props) {
  super(props);
  this.renderFooter = this.renderFooter.bind(this)
  this.handleRefresh = this.handleRefresh.bind(this)
  this.handleLoadMore = this.handleLoadMore.bind(this)
}
  
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
  checkLoading(){
    return this.props.loading
  }
  componentWillMount() {
    if(this.checkLoading()) return;
    this.props.makeRemoteRequest()
  }

  handleRefresh(){
    if(this.checkLoading()) return;
    resetPages()
    this.props.makeRemoteRequest()
  }

  handleLoadMore(){
    if(this.checkLoading()) return;
    incrementPages()
    this.props.makeRemoteRequest()
  }
  renderFooter() {
    if(!this.checkLoading()) return null;

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
  };

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
        refreshing,

    } = this.props;
    return (
      <View>
        <FlatList style = {{backgroundColor: '#fff'}}
          data={photos}
          keyExtractor={(item) => getRandom()}
          renderItem={({item}) => this.renderFlatListItem(item)}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={refreshing}
          onEndReached={this.handleLoadMore}
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
/*const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({makeRemoteRequest}, dispatch)
});*/

export default connect(mapStateToProps, {makeRemoteRequest})(Main);