import React, { useRef } from 'react'
import './VideoPlayer.css'
// Eliminar el import de video local: import video from '../../assets/Galeria/Nostros/sion.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }

    const player = useRef(null);
  
    // 1. URL de YouTube que reemplazarás:
    // Asegúrate de usar la URL incrustada (embed URL) de YouTube.
    // Ejemplo de un video de prueba: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    const youtubeUrl = "https://www.youtube.com/embed/kZouc8RDZ_o?si=zTojs7dMlyzXdLjt";

    if (!playState) return null; // Optimizacion: No renderizar el componente si no está visible

    return (
        <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
            {/* 2. Reemplazo de <video> por <iframe> de YouTube */}
            <iframe 
                className="youtube-iframe"
                src={youtubeUrl} 
                title="Video del Colegio" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer