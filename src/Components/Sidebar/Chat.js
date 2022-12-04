import dot from '../../Assets/images/3dot.png';

import next from '../../Assets/images/next.png'

import attach from '../../Assets/images/attach.png';

import emoji from '../../Assets/images/emoji.png'

import tg from '../../Assets/images/tg.png'

import chat1 from '../../Assets/images/chat1.png'
import chat2 from '../../Assets/images/chat2.png'
import chat3 from '../../Assets/images/chat3.png'
import chat4 from '../../Assets/images/chat4.png'


function Messages(){
    return(
        <div className='Chats'>
            <div className="box1">
                <div className="info">
                    <img src={chat1} alt="" />
                    <span>from <a href="">Marry</a> to <a href="">Everyone  </a></span>
                </div>
                <span className='time'>05:32 PM</span>
            </div>
            <span className='chat-text'>Hi there, how are you?</span>
        </div>
    );
}


function Chats(props){
    return(
        <div className="ChatAll">
            <Messages></Messages>
            <Messages></Messages>
            <Messages></Messages>
            <div className="WritaMessage">
                <div className="box1">
                    <span>
                        Everyone
                        <img src={next} alt="" />
                    </span>
                    <div className="box">
                        <img src={attach} alt=""/>
                        <img src={emoji} alt="" />
                    </div>
                </div>
                <div className="box2">
                    <input type="text" placeholder='Message to everyone...'/>
                    <img src={tg} alt="" />
                </div>
            </div>
        </div>
    )
}



export default Chats;