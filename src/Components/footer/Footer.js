import Range from "./Range";
import Footeritems from "./Footeritems";



// Images of items

import f1 from '../../Assets/images/f1.png';

import f2 from '../../Assets/images/f2.png';
import f3 from '../../Assets/images/f3.png';
import f4 from '../../Assets/images/f4.png';
import f5 from '../../Assets/images/f5.png';
import f6 from '../../Assets/images/f6.png';
import f7 from '../../Assets/images/f7.png';


import up from '../../Assets/images/up.png';





function Footer(){
    return(
       <footer>
         <Range></Range>
         <div className="footer-items">
         <Footeritems img={f1} img2={up}></Footeritems>
         <Footeritems img={f2} img2={up}></Footeritems>
         <Footeritems img={f3} img2={up}></Footeritems>
         <Footeritems img={f4} img2={up}></Footeritems>
         <Footeritems img={f5} img2={up}></Footeritems>
         <Footeritems img={f6} img2={up}></Footeritems>
         <Footeritems img={f7} img2={up}></Footeritems>
         </div>
         <div className="leave">
            <span>Leave Meeting</span>
         </div>
       </footer>
    );
}

export default Footer;