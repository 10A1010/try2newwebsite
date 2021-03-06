import { useEffect } from "react";
import ReactPlayer from "react-player";

const PlayerScreen = ({ chapterDetail }) => {
  const audiLink = (number) =>
    "https://aatry1000.s3.amazonaws.com/00" + number + ".mp3";

  useEffect(() => {}, [chapterDetail]);

  return (
    <div className='h-100 shadow-lg p-3 bg-red'>
      <h1 className='fs-5 fw-bold r'>Player</h1> 
      {chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            
            <li
              className={`list-group-item bg-transparent  d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Chapter In Arabic: </span>{" "}
              <span>{chapterDetail.name_arabic}</span>
            </li>
            <li
              className={`list-group-item bg-transparent d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Chapter In English: </span>{" "}
              <span>{chapterDetail.name_complex}</span>
            </li>
            <li
              className={`list-group-item bg-transparent d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Revelation Place: </span>{" "}
              <span>{chapterDetail.revelation_place}</span>
            </li>
            <li
              className={`list-group-item bg-transparent  d-flex justify-content-between fs-6`}
            >
              <span className='fw-bold'>Translated Name: </span>{" "}
              <span>{chapterDetail.translated_name.name}</span>
            </li>

            <div className='div '>
              <ReactPlayer
                url={audiLink(chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className=' bg-red list-group-item home-body2'>
          <span className='fw-bold'>Chapter In Arabic: </span>{" "}<br></br>
          <span className='fw-bold'>Chapter In English: </span>{" "}<br></br>
          <span className='fw-bold'>Revelation Place: </span>{" "}<br></br>
          <span className='fw-bold'>Translated Name: </span>{" "}<br></br>
        </div>
      )}
    </div>
  );
};

export default PlayerScreen;
