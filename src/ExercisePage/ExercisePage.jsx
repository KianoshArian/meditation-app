import AudioPlayer from 'react-audio-player';
import aud0 from '../audio/anxiety1.mp3'
import aud1 from '../audio/anxiety2.mp3'
import aud2 from '../audio/anxiety3.mp3'
import aud3 from '../audio/sleep1.mp3'
import aud4 from '../audio/sleep2.mp3'
import aud5 from '../audio/sleep3.mp3'
import aud6 from '../audio/sleep4.mp3'
import aud7 from '../audio/sleep5.mp3'
import coala from '../images/coala.png'
import { guides } from '../Global/global';
import { useParams } from 'react-router-dom';

const pageContainer = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "100px",
    padding: "50px 0px"
}

export function ExercisePage() {  
  let params = useParams();
  let id = params.id;
  const exercise = guides[id]
  const aud = [aud0, aud1, aud2, aud3, aud4, aud5, aud6, aud7]
  return (
    <div style={pageContainer}>
        <p1 style={{fontSize: "1.8rem", fontWeight: "bold"}}>{exercise.name}</p1>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img style = {{width: "270px", objectFit: "contain"}} src={coala}></img>
            <audio
            controls
            src={aud[id]}
            autoplay
            />
        </div>
    </div>
  );
}

