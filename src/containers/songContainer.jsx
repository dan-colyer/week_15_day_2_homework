import React from 'react';
import SongList from '../components/songList';
import SongDetail from '../components/songDetail';

class SongContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      songs: null
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xrh = new XMLHttpRequest();
    xrh.open('GET', url);

    xrh.addEventListener('load', () => {
      if(xrh.status !== 200) return;
      const songsData = JSON.parse(xrh.responseText);
      console.log("songsData: ", songsData);
      this.setState({songs: songsData.feed.entry});
    })

    xrh.send();
  }

  render() {
    return (
      <div>
        <h1>Music</h1>
        <SongList songs={ this.state.songs } />
      </div>
    )
  }
}

export default SongContainer;
