import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/Youtube';
import  Videolist from './Videolist';

class App extends React.Component{

    state = {videos : []};

    onTermSubmit = async term  => {

       const response = await youtube.get('/search',{
        params : {
            q: term
        }
        });

        this.setState({videos: response.data.items});


    };

    render(){
        return <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <Videolist videos={this.state.videos} />
                    i have {this.state.videos.length} videos
            </div>
    }
}

export default App;