import voice from '../../Assets/images/voice.png';

function Range(){
    return(
        <div className="range">
            <img src={voice}  alt="" />
            <input type="range" min={0}  max={3}/>
        </div>
    );
}

export default Range;