import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const SongsList = props => {
  const {songDetails, onDeleteSong} = props
  const {imageUrl, name, genre, duration, id} = songDetails
  const onClickDeleteIcon = () => {
    onDeleteSong(id)
  }

  return (
    <div className="songs-list-container">
      <>
        <img src={imageUrl} alt="track" className="image" />
        <div className="song-type">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </>
      <>
        <div className="time-container">
          <p className="time">{duration}</p>
        </div>
        <div className="delete-icon">
          <button
            data-testid="delete"
            onClick={onClickDeleteIcon}
            type="button"
            className="button"
          >
            <AiOutlineDelete className="icon" />.
          </button>
        </div>
      </>
    </div>
  )
}

export default SongsList
