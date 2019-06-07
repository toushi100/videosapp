import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({videos , onVideoSelect}) => {
const renderedlist = videos.map((video)=>{
    return <Videoitem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
})


    return <div className="ui relaxed divided list">{renderedlist}</div>
};

export default Videolist;