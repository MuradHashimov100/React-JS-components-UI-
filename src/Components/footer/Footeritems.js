

function Footeritems(props){
    // console.log(props);
    return(
        <div className="items">
            <div className="box">
                <img src={props.img} alt="" />
                <img src={props.img2} alt="" />
            </div>
        </div>
    )
}

export default Footeritems;