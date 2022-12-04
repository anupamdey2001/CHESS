import React from "react";
import "./Member.css";
import AC from "../../assets/AC.jpeg";
import swagata from "../../assets/swagata.jpg";
import rao from "../../assets/rao.JPG";
import SMitra from "../../assets/SMitra.jpg";
import SSah from "../../assets/SSah.jpg";
import Prashanth from "../../assets/Prashanth.jpg";
import ANagar from "../../assets/ANagar.jpg";
import RYadav from "../../assets/RYadav.jpg";
import YSinha from "../../assets/YSinha.jpeg";
import AJaiswal from "../../assets/AJaiswal.jpg";
import AChaudhary from "../../assets/AChaudhary.png";
import AKrishna from "../../assets/AKrishna.jpg";
import ZHossain from "../../assets/ZHossain.png";
import RChowdhury from "../../assets/RChowdhury.jpg";
import SMookherjee from "../../assets/SMookherjee.jpg";
import SRajwar from "../../assets/SRajwar.jpg";
import ADey from "../../assets/ADey.png";
import DBardhan from "../../assets/DBardhan.jpg";
import DKher from "../../assets/Dkher.jpg";
import SAcharya from "../../assets/SAcharya.jpg";
import ANagarajan from "../../assets/ANagarajan.jpeg";
import ATalukder from "../../assets/ATalukder.jpg";
import PMistri from "../../assets/PMistri.jpg";
import APal from "../../assets/APal.jpg";
import BSana from "../../assets/BSana.jpg";
import ATiwari from "../../assets/ATiwari.jpeg";
import PDutta from "../../assets/PDutta.jpg";
import SSamanta from "../../assets/SSamanta.jpg";
import RKumar from "../../assets/RKumar.jpg";
import Nimcheki from "../../assets/Nimcheki.jpg";
import PGupta from "../../assets/PGupta.jpg";
import YMAHESHWARI from "../../assets/YMAHESHWARI.jpeg";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Member() {
  return (
    <div>
      <NavBar />
      <div className="container team__member">
        <div className="section-title">
          <h1>Our Team</h1>
          <hr className="hr" width="50%" style={{ margin: "0 auto" }} />
        </div>
        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>PhD Representative</h3>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AC} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Arunava Chatterjee</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>M.Tech Representative</h3>
          </div>
          <div
            className="row"
            style={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={swagata} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Swagata Laxmi Sengupta</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={rao} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">BHV Prasad</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title">
          <h1>B.Tech Students</h1>
          <hr className="hr" width="50%" style={{ margin: "0 auto" }} />
        </div>
        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>Batch of 2023</h3>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SMitra} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Soumyajeet Mitra</h2>
                  <h4 className="role glitch">President</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SSah} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Sonali Sah</h2>
                  <h4 className="role glitch">Vice President</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={Prashanth} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Prashanth Kumar</h2>
                  <h4 className="role glitch">General Secretary</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ANagar} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Anand Nagar</h2>
                  <h4 className="role glitch">Convenor</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={RYadav} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Rishabh Yadav</h2>
                  <h4 className="role glitch">Treasurer</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={YSinha} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Yash Sinha</h2>
                  <h4 className="role glitch">Creative Head</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AJaiswal} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Ankit Jaiswal</h2>
                  <h4 className="role glitch">Event Management Head</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AChaudhary} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Ayush Chaudhary</h2>
                  <h4 className="role glitch">
                    Sponsorship and Publicity Head
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={AKrishna} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Abhinav Krishna</h2>
                  <h4 className="role glitch">Web Development Head</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>Batch of 2024</h3>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ZHossain} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Zeshan Hossain Sardar</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={RChowdhury} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Riddhi Chowdhury</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5  members__box">
                <div className="team-img">
                  <img src={SMookherjee} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Sujaan Mookherjee</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SRajwar} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Sushanta Rajwar</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ADey} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Anupam Dey</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={DBardhan} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Dev Bardhan Singh</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={DKher} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Devesh kher</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SAcharya} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Sayak Acharya</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ANagarajan} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Anagha Nagarajan</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>Batch of 2025</h3>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ATalukder} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Argha Talukder</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PMistri} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Palash Mistri</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5  members__box">
                <div className="team-img">
                  <img src={APal} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Ananya Pal</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={BSana} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Bikram Sana</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={ATiwari} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Ashita Tiwari</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PDutta} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Pratik Dutta</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={SSamanta} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Soumyadeep Samanta</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={RKumar} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Ranjan Kumar</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={Nimcheki} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Nimcheki</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{alignItems: "center", justifyContent: "center"}}>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={PGupta} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Priyanka Gupta</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-5 members__box">
                <div className="team-img">
                  <img src={YMAHESHWARI} alt="Team Img" />
                </div>
                <div className="team-content">
                  <h2 className="membersName">Yash Maheswari</h2>
                  <h4 className="role glitch">Executive Member</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Member;
