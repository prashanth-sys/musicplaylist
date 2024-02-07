import {Component} from 'react'

import SongsList from '../SongsList'

import './index.css'

class MusicPage extends Component {
  state = {
    searchInput: '',
    songs: this.initialTracksList,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteSong = id => {
    const {songs} = this.state
    const updateSongs = songs.filter(eachData => eachData.id !== id)

    this.setState({songs: updateSongs})
  }

  render() {
    const {initialTracksList} = this.props
    const {searchInput} = this.state
    const searchedMusic = initialTracksList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="image-container">
          <h1 className="name">Ed Sheeran</h1>
          <p className="role">Singer</p>
        </div>
        <div className="songs-play-list">
          <h1 className="song-list">Songs Playlist</h1>
          <input
            type="search"
            className="input"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeInput}
          />
        </div>
        <div>
          <ul>
            {searchedMusic.length === 0 ? (
              <div className="empty-show">
                <h1 className="empty-heading">No Songs Found</h1>
              </div>
            ) : (
              searchedMusic.map(eachSong => (
                <SongsList
                  key={eachSong.id}
                  songDetails={eachSong}
                  onDeleteSong={this.onDeleteSong}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default MusicPage
