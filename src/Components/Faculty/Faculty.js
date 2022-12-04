import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Faculty.css";
import { TypeAnimation } from "react-type-animation";
import PPG from "../../assets/PPG.jpg";
import AH from "../../assets/AH.jpg";
import AKS from "../../assets/AKS.jpg";
import GH from "../../assets/GH.webp";
import SD from "../../assets/SD.jpg";
import JS from "../../assets/JS.jpg";
import BKM from "../../assets/BKM.jpg";
import SP from "../../assets/SP.jpg";
import SKL from "../../assets/SKL.jpg";
import BD from "../../assets/BD.jpg";
import MKM from "../../assets/MKM.jpg";
import PP from "../../assets/PP.jpg";
import TM from "../../assets/TM.jpg";
import RGC from "../../assets/RGC.jpg";
import KCG from "../../assets/KCG.jpg";
import SK from "../../assets/SK.jpg";
import MB from "../../assets/MB.JPG";
function Faculty() {
  return (
    <>
      <NavBar />

      <div className="faculty__containar">
        <div className="section-title">
          <h1>Faculty Members</h1>
          <hr className="hr" width="60%" style={{margin: "0 auto"}}/>
        </div>
        <div className="outer members__box__wrap">
          <div className="row">
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PPG} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Parthapratim Gupta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[" PROFESSOR", 2050, " PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>parthapratim.gupta@che.nitdgp.ac.in</h6>
                  <h4>9434788028</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PP} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Parimal Pal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR(HAG)", 2050, "PROFESSOR(HAG)", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>parimal.pal@che.nitdgp.ac.in</h6>
                  <h4>9434788105</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={KCG} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Kartik Chandra Ghanta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>kartik.ghanta@che.nitdgp.ac.in</h6>
                  <h4>9434788020</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={TM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Tamal Mandal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>tamal.mandal@che.nitdgp.ac.in</h6>
                  <h4>9434788078</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AKS} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Anup Kumar Sadhukhan</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>anupkumar.sadhukhan@che.nitdgp.ac.in</h6>
                  <h4>9434788048</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SD} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Susmita Dutta</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["PROFESSOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>susmita.dutta@che.nitdgp.ac.in</h6>
                  <h4>9434788120</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={GH} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Gopinath Halder</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={["FACULTY ADVISOR", 2050, "PROFESSOR", 2000]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>gopinath.halder@che.nitdgp.ac.in</h6>
                  <h4>9434788189</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={MKM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Mrinal Kanti Mondal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>mrinalkanti.mandal@che.nitdgp.ac.in</h6>
                  <h4>9434788188</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={JS} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Jaya Sikder</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "HEAD OF THE DEPARTMENT(HOD)",
                      2050,
                      "ASSOCIATE PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>jaya.sikder@che.nitdgp.ac.in</h6>
                  <h4>9434788186</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SKL} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Sandip Kumar Lahiri</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>sandipkumar.lahiri@che.nitdgp.ac.in</h6>
                  <h4>9007659000</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SP} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Swapan Paruya</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>swapan.paruya@che.nitdgp.ac.in</h6>
                  <h4>9474404033</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={BD} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Bimal Das</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>bimal.das@che.nitdgp.ac.in</h6>
                  <h4>9434789023</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={BKM} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Bimal Kumar Mandal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>bk.mondal@che.nitdgp.ac.in</h6>
                  <h4>7699782330</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={RGC} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Rajib Ghosh Chaudhuri</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>rajib.ghoshchaudhuri@che.nitdgp.ac.in</h6>
                  <h4>7596854649</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AH} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>ABHIRAM HENS</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "FACULTY ADVISOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>abhiram.hens@che.nitdgp.ac.in</h6>
                  <h4>9434789040</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SK} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Sankha Karmakar</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSOCIATE PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>sankha.karmakar@che.nitdgp.ac.in</h6>
                  <h4>8902499547</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 justify-center-center">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={MB} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2>Manisha Bal</h2>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      "ASSISTANT PROFESSOR",
                      2050,
                      "ASSISTANT PROFESSOR",
                      2000,
                    ]}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                  <i className="fa-solid fa-envelope"></i>
                  <h6>manisha.bal@che.nitdgp.ac.in</h6>
                  <h4>8617469078</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Faculty;
