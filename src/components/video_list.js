import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  let videos = [];
  videos = props.videos.map((video)=>{
    return <VideoListItem video={video} key={video.key} />;
  });
  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  );
}


export default VideoList;
