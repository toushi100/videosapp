import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({videos}) => {
const renderedlist = videos.map((video)=>{
    return <Videoitem  video={video}/>
})


    return <div>{renderedlist}</div>
};

export default Videolist;