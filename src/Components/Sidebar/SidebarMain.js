



import {SideBarTop,UpTop} from "./SidebarText";



// import Uptop from '../Sidebar/'


import '../Sidebar/sidebar.css'

import Buttons from "./Buttons";

import Chats from "./Chat";


import user from '../../Assets/images/user1.png';



import kvadrat from '../../Assets/images/kvadrat.png';




import img1 from '../../Assets/images/middle1.png'



import img2 from '../../Assets/images/middle2.png';

import phoneMute from '../../Assets/images/phonemute.png';

import phoneMuteWhite from '../../Assets/images/phonemutewhite.png';

import phoneOpen from '../../Assets/images/phoneopen.png';

import phoneTalk from '../../Assets/images/phonetalk.png';

import dot from '../../Assets/images/3dot.png';

import usericon from '../../Assets/images/usericon.png';

import rubik from '../../Assets/images/rubik.png';

import chat1 from '../../Assets/images/chat1.png'
import chat2 from '../../Assets/images/chat2.png'
import chat3 from '../../Assets/images/chat3.png'
import chat4 from '../../Assets/images/chat4.png'

// chatImages

// import 

function SidebarMain(){
    return(

        // <User1></User1>
        <div className="Sidebar">
            <UpTop img={usericon} img2={rubik}></UpTop>
                <SideBarTop 
                img={img1} txt = {'Natura'} 
                txt2={"Project Manager"} 
                role={"host"} 
                microPhone={phoneMute}
                camera={phoneTalk}
                >
                </SideBarTop>
               <SideBarTop 
               img={img1} txt = {'Cecile'} 
               txt2={"Project Manager"} 
               role={"Co-Host"} 
               microPhone={phoneMute}
               camera={phoneTalk}
                >
               </SideBarTop>
               <SideBarTop 
               img={img1} txt = {'Cecile'} 
               txt2={"Project Manager"} 
              
               microPhone={phoneMute}
               camera={phoneTalk}
                >
               </SideBarTop>
               <SideBarTop 
               img={img1} txt = {'Cecile'} 
               txt2={"Project Manager"} 
              
               microPhone={phoneMute}
               camera={phoneTalk}
                >
               </SideBarTop>
               <SideBarTop 
                img={img1} txt = {'Natura'} 
                txt2={"Project Manager"} 
                role={"host"} 
                microPhone={phoneMute}
                camera={phoneTalk}
                >
                </SideBarTop>
               <SideBarTop 
               img={img1} txt = {'Cecile'} 
               txt2={"Project Manager"} 
              
               microPhone={phoneMute}
               camera={phoneTalk}
                >
               </SideBarTop>
               
               <div className="userOptions">
                    <Buttons text={'Invite'}></Buttons>
                    <Buttons text={'Mute all'}></Buttons>
                    <Buttons text={'Ask to start video'}></Buttons>
               </div>
               <div className="chatStart">
               <span>Chats (3)</span>
               <img src={dot} alt="" />
               </div>
            <Chats></Chats>
        </div>
    );
}



export default SidebarMain;