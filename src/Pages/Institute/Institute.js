import React from "react";
import "../Institute/Institute.css"
import Banner from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg"
import Logo from "../Institute/Institute_logo/download.png"
const Institute = () => {
  return (
    <div>
      <div class="institute-main container mx-auto mt-8">
        <div className="institute-banner-section">
            <img src={Banner} className="institute-banner rounded-lg" alt="" srcset="" />
            <img src={Logo} className="institute-logo border-2 border-black rounded-lg ml-6 mb-6" alt="" srcset="" />
            <div className="banner-detail mt-4">
                <div className="banner-detail__name">
                  <h1><span className="font-bold text-3xl">VIVA INSTITUTE OF TECHNOLOGY</span> </h1> 
                  <div className="small-detail">
                    <h1 className="small-detail-address ml-1"><i class="fa-solid fa-location-dot"></i> <span>Virar, Palghar</span></h1> 
                    <div className="small-detail-govern ml-3 rounded">Private</div>
                    <div className="small-detail-university ml-3 ">University</div>
                  </div>
                </div>
                <div className="institute-banner-section-save">
                    <div className="save-icon"><i class="fa-regular fa-bookmark"></i></div>
                    <div className="save-message"><span>SAVE</span></div>
                </div>
                <div className="btn"><button className="btn"><i class="fa-regular fa-bookmark"></i></button></div>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Institute;
