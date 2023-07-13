import React from "react";
import "./Topranking.css";

export default function Topranking() {
  return (
    <div className="top-section">
      <div className="school-ranking">
        <h1>Top School</h1>
        <p>in Mumbai</p>
        <div className="school-table">
          <div className="school-table__heading">
            <div className="utility ranks">Rank</div>
            <div className="utility school-name-school">School</div>
            <div className="utility board">Board</div>
            <div className="utility fees">Fees</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#1</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://www.educationworld.in/wp-content/uploads/2018/04/Dhirubhai.png"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">
                  Dhirubhai Ambani <br /> International School
                </div>
                <div className="sub-head">Bandra, Mumbai </div>
              </div>
            </div>
            <div className="board">
              Cambridge, <br /> International, <br /> IB, IGCSE
            </div>
            <div className="fees">₹ 50K- 4L</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#2</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.uniapply.com/uploads/college/image/logo/4610/webp/The_Cathedral_and_John_Connon_School_2536_Logo_1.webp"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">The Cathedral and John Connon</div>
                <div className="sub-head">Fort, Mumbai </div>
              </div>
            </div>
            <div className="board">ICSE</div>
            <div className="fees">₹ 51.6K- 6L</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#3</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a7/Bombay_Scottish_School_Logo.png"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">Bombay Scottish School</div>
                <div className="sub-head">Mahim, Mumbai </div>
              </div>
            </div>
            <div className="board">ICSE and ISC</div>
            <div className="fees">₹ 90K- 1.05L</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#4</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.uniapply.com/uploads/college/image/logo/4610/Jamnabai_Narsee_School_2488_Logo_1.jpg"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">Jamnabai Narsee School</div>
                <div className="sub-head">Bandra, Mumbai </div>
              </div>
            </div>
            <div className="board">ICSE</div>
            <div className="fees">₹ 4.2K- 51K</div>
          </div>{" "}
          <div style={{ borderBottom: "none" }} className="school school-row-1">
            <div className="rank">#5</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.uniapply.com/uploads/college/image/logo/4610/The_Aditya_Birla_Integrated_School_3050_Logo_1.jpg"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">Aditya Birla Integrated School</div>
                <div className="sub-head">Fort, Mumbai </div>
              </div>
            </div>
            <div className="board">IGCSE</div>
            <div className="fees">₹ 38.3K- 5.4L</div>
          </div>
        </div>
      </div>

      <div className="college-ranking">
        <h1>Top College</h1>
        <p>in Mumbai</p>
        <div className="school-table">
          <div className="school-table__heading">
            <div className="utility ranks">Rank</div>
            <div className="utility school-name-school">College</div>
            <div className="utility board">NIRF Rating</div>
            <div className="utility fees">Fees</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#1</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=80&w=80&mode=stretch"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">IIT Bombay</div>
                <div className="sub-head">Mumbai, Maharashtra</div>
              </div>
            </div>
            <div className="board">
              NIRF ranking <span>3</span> out of 200 in 2023
            </div>
            <div className="fees">₹ 2.28 L</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#2</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://www.ictmumbai.edu.in/img/ICT-mumbai-logo.png"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">ICT Mumbai</div>
                <div className="sub-head">Mumbai, Maharashtra</div>
              </div>
            </div>
            <div className="board">
              NIRF ranking <span>24</span> out of 200 in 2023
            </div>
            <div className="fees">₹ 95 K</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#3</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.collegedunia.com/public/college_data/images/logos/1394005224National%20Institute%20of%20Industrial%20Engineering.png?h=80&w=80&mode=stretch"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">NITIE Mumbai</div>
                <div className="sub-head">Mumbai, Maharashtra </div>
              </div>
            </div>
            <div className="board">
              NIRF ranking <span>66</span> out of 200 in 2023
            </div>
            <div className="fees">₹ 5.98 L</div>
          </div>
          <div className="school school-row-1">
            <div className="rank">#4</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.collegedunia.com/public/college_data/images/logos/1413914280vmji.jpg?h=80&w=80&mode=stretch"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">VJTI Mumbai</div>
                <div className="sub-head">Mumbai, Maharashtra </div>
              </div>
            </div>
            <div className="board">
              NIRF ranking <span>101</span> out of 200 in 2023
            </div>
            <div className="fees">₹ 84.05 K</div>
          </div>{" "}
          <div style={{ borderBottom: "none" }} className="school school-row-1">
            <div className="rank">#5</div>
            <div className="school-name">
              <div className="img">
                <img
                  src="https://images.collegedunia.com/public/college_data/images/logos/16336900566237748820344441900178615267475362148777984n.png?h=80&w=80&mode=stretch"
                  alt=""
                />
              </div>
              <div className="school-name-text">
                <div className="head">SPIT Mumbai</div>
                <div className="sub-head">Mumbai, Maharashtra </div>
              </div>
            </div>
            <div className="board">
              NIRF ranking <span>167</span> out of 200 in 2023
            </div>
            <div className="fees">₹ 1.70 L</div>
          </div>
        </div>
      </div>
    </div>
  );
}
