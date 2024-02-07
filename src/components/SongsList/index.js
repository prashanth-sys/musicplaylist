import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const SongsList = props => {
  const {songDetails} = props
  const {imageUrl, name, genre, duration} = songDetails
  return (
    <div className="songs-list-container">
      <>
        <img src={imageUrl} alt="krishna" className="image" />
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
          <AiOutlineDelete className="icon" />
        </div>
      </>
    </div>
  )
}

export default SongsList