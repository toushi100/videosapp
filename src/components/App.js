import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/Youtube';
import  Videolist from './Videolist';

class App extends React.Component{

    state = {videos : [], selectedVideo : null};

    onTermSubmit = async term  => {

       const response = await youtube.get('/search',{
        params : {
            q: term
        }
        });

        this.setState({videos: response.data.items});


    };

    onVideoSelect= (video)=>{

    }

    render(){
        return <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    i have {this.state.videos.length} videos
            </div>
    }
}

export default App;