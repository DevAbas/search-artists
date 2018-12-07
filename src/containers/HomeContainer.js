import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllArtists, getArtistByKeyword } from '../actions';
import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 


    componentWillMount() {
        this.props.getAllArtists()
    }


    getKeywords = (event) => {
        let key = event.target.value;

        if(key.length >= 5) {
            this.props.getArtistByKeyword(key)
        } else {
            this.props.getAllArtists()
        }
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistList}/>
            </div>
        )
    }
    
}

function mapStateToProps(state){
  return {
    artists: state.artists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAllArtists, getArtistByKeyword}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);