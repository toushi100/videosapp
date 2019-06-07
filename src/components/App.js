import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/Youtube';
import  Videolist from './Videolist';
import  VideoDetail from './VideoDetail';
import faker from 'faker';

class App extends React.Component{

    state = {videos : [], selectedVideo : null};

    componentDidMount(){
        this.onTermSubmit('iphone XR')
    }


    onTermSubmit = async term  => {
        const response= await youtube.get('/search',{
            params: {
                part:'snippet',
        maxResults:5,
        key:'AIzaSyCHaOPraK8_S9K0rBBpdYhYHTyCs27eQF8',
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect= (video)=>{
        this.setState({SelectedVideo : video})
    }
    render(){
        return <div  className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                  <div className="ui grid">
                        <div className="ui row">
                            
                            <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
                            <div className="five wide column"><Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
                    </div>
                </div>
            </div>
    }
}

export default App;