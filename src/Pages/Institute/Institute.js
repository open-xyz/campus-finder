import React from "react";
import "../Institute/Institute.css";
import Banner from "../Institute/Institute_logo/viva-institute-of-technology-vit-thane.jpg";
import Logo from "../Institute/Institute_logo/download.png";
const Institute = () => {
  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <div class="institute-main ">
        <div className="institute-banner-section container mx-auto mt-8">
          <img
            src={Banner}
            className="institute-banner rounded-lg"
            alt=""
            srcset=""
          />
          <img
            src={Logo}
            className="institute-logo border-2 border-black rounded-lg ml-6 mb-6"
            alt=""
            srcset=""
          />
          <div className="banner-detail mt-4">
            <div className="banner-detail__name">
              <h1>
                <span className="font-bold text-3xl">
                  VIVA INSTITUTE OF TECHNOLOGY
                </span>{" "}
              </h1>
              <div className="small-detail">
                <h1 className="small-detail-address ml-1">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <span>Virar, Palghar</span>
                </h1>
                <div className="small-detail-govern ml-3 rounded">Private</div>
                <div className="small-detail-university ml-3 ">University</div>
              </div>
            </div>
            <button className="btn save-btn border-2 border-red-900">
              <i class="fa-regular fa-bookmark">
                <span className="ml-2">SAVE</span>
              </i>
            </button>
          </div>
        </div>
        <div className="institute-aboutus container mx-auto mt-8">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold mt-8 mb-4">About Institute</h1>
            <p class="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis libero risus. Nullam consectetur quam eget dolor eleifend, ut
              tincidunt erat accumsan. Vestibulum finibus iaculis quam, vel
              efficitur eros ultricies vel. Nam pellentesque euismod dolor, et
              tincidunt ex. Sed a ultricies ante, eget convallis erat. Aliquam
              erat volutpat. Sed tempor dui ex, eu auctor risus interdum et.
              Nulla facilisi. Cras sit amet tincidunt lacus. Donec euismod
              consectetur velit non ultrices. Phasellus mattis tellus purus, in
              congue urna efficitur non. Aenean sed elit consequat, dapibus enim
              in, eleifend enim. Vivamus fringilla velit ut lectus ultricies
              auctor. Aliquam varius maximus justo, sit amet elementum urna
              scelerisque at. Suspendisse potenti. Nunc quis risus felis.
            </p>
          </div>
        </div>
        <div className="institute-information container mx-auto mt-8">
          <div className="information-left">
            <div className="exam-info">
              <h5><span className="exam-info-span">Accepted Exams</span></h5>
              <h3><span className="exam-info-span2">JEE MAIN , MHT-CET</span></h3>
            </div>
            <hr style={{width:"26rem", height:"0.0625rem",backgroundColor:"#DBDBDB"}} />
          </div>
          <div className="information-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Institute;
