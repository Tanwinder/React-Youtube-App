import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDR7PZ35d74BpYyeu1hMDTB7XKNnngMozI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []}

    YTSearch({key:API_KEY, term: 'bodybuilding'}, (videos) => {
      this.setState({videos});  // this.setState({videos: videos})  ES6 beauty
    })
  }
  render() {
    return (
      <div>
      {this.state.videos.length}
      <SearchBar />
      <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// const App = () => {                      //functional component
//   return (
//     <div>
//     <SearchBar />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector('.container'));
