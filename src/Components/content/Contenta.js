

import Content1 from "./Content1";
import Slider from "../content/Slider";

import  bgimg1 from '../../Assets/images/content1.png';
import  bgimg2 from '../../Assets/images/content2.png';
import  bgimg3 from '../../Assets/images/content3.png';

import  bgimg4 from '../../Assets/images/content4.png';
import  bgimg5 from '../../Assets/images/content5.png';
import  bgimg6 from '../../Assets/images/content6.png';
import  bgimg7 from '../../Assets/images/content7.png';
import  bgimg8 from '../../Assets/images/content8.png';
import  bgimg9 from '../../Assets/images/content9.png';
import  bgimg10 from '../../Assets/images/content10.png';

// Icons
import licenseIcon from '../../Assets/images/license.png';
import phoneMute from '../../Assets/images/phonemutewhite.png';
import prev from '../../Assets/images/prev.png';
import next from '../../Assets/images/next.png';
import bluedaire from '../../Assets/images/bluedaire.png';
import whitedaier from '../../Assets/images/whitedaier.png';
// import prev from 


// bluedaire
// whitedaier


// const cards = [
//     {
//         CoverImg:bgimg1,
//         licenseIcon:licenseIcon,
//     },
//     {
//         CoverImg:bgimg2,
//         licenseIcon:licenseIcon,
//     },
//     {
//         CoverImg:bgimg3,
//         licenseIcon:licenseIcon,
//     },
// ]

function Contenta(){
    return(
        <div className="Conten-all">
            <div className="images">
            <Content1 bgimg={bgimg1} iconLic={licenseIcon} userName={"Natura"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg2}  userName={"Murad"} ></Content1>
            <Content1 bgimg={bgimg3}  userName={"Yasar"} ></Content1>
            <Content1 bgimg={bgimg8}  userName={"Mikayil"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg4}  userName={"Abdulla"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg5}  userName={"Yusif"}></Content1>
            <Content1 bgimg={bgimg6}  userName={"Cavidan"} ></Content1>
            <Content1 bgimg={bgimg7}  userName={"Arzu"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg8}  userName={"Ayten"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg9}  userName={"Gulay"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg10}  userName={"Elvina"}></Content1>
            <Content1 bgimg={bgimg5}  userName={"Zarifa"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg8}  userName={"Nesimi"}></Content1>
            <Content1 bgimg={bgimg2}  userName={"Lale"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg5}  userName={"Bayram"}></Content1>
            <Content1 bgimg={bgimg2}  userName={"Test"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg10}  userName={"Test1"} ></Content1>
            <Content1 bgimg={bgimg5}  userName={"Test2"} ></Content1>
            <Content1 bgimg={bgimg8}  userName={"Test3"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg2}  userName={"Test4"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg5}  userName={"Tes5"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg2}  userName={"Tes6"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg5}  userName={"Tes7"} phoneMute={phoneMute}></Content1>
            <Content1 bgimg={bgimg2} iconLic={licenseIcon} userName={"Natura"} phoneMute={phoneMute}></Content1>
            </div>
            <div className="slider">
            <img src={prev} alt="" />
            <div className="kruqlar">
                <img src={bluedaire} alt="" />
                <img src={whitedaier} alt="" />
                <img src={whitedaier} alt="" />
            </div>
            <img src={next} alt="" />
        </div>
        </div>
    );
}

export  default Contenta;

// <Content1 props={bgimg2}></Content1>
// <Content1 props={bgimg3}></Content1>
// <Content1 props={bgimg4}></Content1>
// <Content1 props={bgimg5}></Content1>
// <Content1 props={bgimg6}></Content1>
// <Content1 props={bgimg7}></Content1>
// <Content1 props={bgimg8}></Content1>
// <Content1 props={bgimg9}></Content1>
// <Content1 props={bgimg10}></Content1>