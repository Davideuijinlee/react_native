import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentDidMount=()=> {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(resp => {
            this.setState({
                albums: resp.data
            });
        });
    }

    

    renderAlbums() {
        return this.state.albums.map(album => 
                <AlbumDetail key={album.title} album={album} />
            );    
    }

    render=()=> {            
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
