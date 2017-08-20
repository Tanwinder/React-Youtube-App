// import React from 'react';                 // functional component
//
// const VideoList = (props) => {
//   return (
//     <ul>
//     {props.videos.length}
//     </ul>
//   );
// }

import React, { Component } from 'react';     // class based component
class VideoList extends Component {
  render(){
  return (
    <ul>
    {this.props.videos.length-1}
    </ul>
  );
}
}
export default VideoList;
