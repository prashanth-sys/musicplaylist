import {Component} from 'react'

import SongsList from '../SongsList'

import './index.css'

class MusicPage extends Component {
  render() {
    const {initialTracksList} = this.props
    return (
      <div className="bg-container">
        <div className="image-container">
          <h1 className="name">Ed Sheeran</h1>
          <p className="role">Singer</p>
        </div>
        <div className="songs-play-list">
          <h1 className="song-list">Songs Playlist</h1>
          <input type="text" className="input" placeholder="Search" />
        </div>
        <div>
          <ul>
            {initialTracksList.map(eachSong => (
              <SongsList key={eachSong.id} songDetails={eachSong} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MusicPage
