

import logo from  '../../Assets/images/vectorbg.png'
import logo1 from  '../../Assets/images/Vector.png';
import logo2 from  '../../Assets/images/Vector2.png';
import logo3 from  '../../Assets/images/vector3.png';
import logo4 from  '../../Assets/images/vector4.png';
import logo5 from  '../../Assets/images/vector5.png';
import red from  '../../Assets/images/red.png';

function Navbar(){
    return(
        <header className="header">
            <div className="box1">
                    <img src={logo} alt=""  className='left1'/>
                    <img src={logo1} alt=""  className='top-img'/>
            </div>
           <div className='box2'>
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
           </div>
           <div className='box3'>
                <img src={red} alt="" />
                <p>13:03:34</p>
           </div>
        </header>
    );
}

export default Navbar;