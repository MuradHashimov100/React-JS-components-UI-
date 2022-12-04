




function Content1(props){
    // console.log(props.licenseIcon);
    console.log(props.phoneMute);
    return(
        <div className="content1">
        <img src={props.bgimg} alt="dfdsfs"/>
        <div className="content-info">
        <div className="box1">
        {/* <img src={props.iconLic} alt="" /> */}
                {props.iconLic?  <img src={props.iconLic} alt="" /> : ''}
                <span>{props.userName}</span>
            </div>
            <div className="box2">
                {/* <img src={props.phoneMute} alt="" /> */}

                {props.phoneMute? <img src={props.phoneMute} alt="" /> : ''}
            </div>
        </div>
     </div>
    );
}

export default Content1;