
import Buttons from '../Sidebar/Buttons';

function UpTop(props){
    return(
        <div className="upTop">
            <div className="box">
            <img src={props.img} alt="" />  
            <span>Participants</span>
            </div>
            <div className="box">
            <img src={props.img2} alt="" />
            <span className='txt'>Apps</span>
            </div>
        </div>
    );
}

function SideBarTop(props){
    // console.log(props);
 
    return(
        <div className="user user1">
            <div className="left" style={{display:'flex'}}>
                    <img src={props.img} alt="" />
                    <div className='spans'>
                        <span>{props.txt}</span>
                        <span>{props.txt2}</span>
                    </div>
            </div>
            <div className="images">
                 {props.role?  <span>{props.role}</span>:' '}
                <img src={props.microPhone} alt="" />
                <img src={props.camera} alt="" />    
            </div> 
        </div>
    )
}

// function User2(){
//     return(
//         <div className="user user2">
//             <div className="left">
//                     <img src={img2} alt=""/>
//             </div>
//         </div>
//     )
// }

export  {SideBarTop,UpTop};
