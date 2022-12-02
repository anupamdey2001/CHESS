import React from "react";
import ReadMore from './ReadMore';
import img4 from "../../assets/4.PNG"
import img5 from "../../assets/5.PNG"
import img6 from "../../assets/6.PNG"
import img9 from "../../assets/9.PNG"
import ChemKriti2021_1 from '../../assets/2021_1.PNG';
import "./ChemKriti2021.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
function ChemKriti2021() {
  return (
    <div>
        <NavBar/>
      <section className="container" style={{marginTop: "5rem"}}>
        <div className="members__box__wrap">
          <div className="row">
            <h3 className="card__outerHeading">Chem<span className="text_primary">Kriti</span> <span className="text_gold">2021<span/></span></h3>
            <hr className="hr" width="60%" style={{margin: "1% auto"}}/>
            <p className="lead card__lead">
              The first edition of ChemKriti has been planned for the 9th to
              11th of April, 2021. The theme for this year is “Discover the
              Chemical Engineer in You” A brief description of each of the
              events that we have planned is discussed below.
            </p>
            <img
              className="img-rounded mx-auto d-block img-thumbnail main__img"
              src={ChemKriti2021_1}
              alt="Event poster"
            />
            <div className="members__box__wrap outer">
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-4">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={img4}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Chemstat
                      </h4>
                      <p className="card-text background__text">
                        <ReadMore>
                          Show your technical and analytical prowess Faced with
                          a problem statement and a real-life scenario
                          participants would have to storm their minds to come
                          up with a seemingly feasible solution, which, mind
                          you, should sound just as innovative and effective. A
                          48-hour duration would be allotted to execute and
                          compile their ideas into a PowerPoint presentation and
                          submit the same, the quality of which would serve as
                          their gateway to the final round. The ones who'll make
                          it would have to present their plan in front of the
                          judges and face the questionnaire.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-4 gap">
                  <div className="card members__box  background">
                    <img
                      className="card-img-top background__img"
                      src={img5}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Chem-Wiz
                      </h4>
                      <p className="card-text background__text">
                        <ReadMore>
                          A quiz contest based on Chemical Engineering
                          industries and industrial applications of Chemical
                          Engineering.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-4 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={img6}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Chem-O-Clave
                      </h4>
                      <p className="card-text background__text">
                        <ReadMore>
                          For those curious to know about every circumstance
                          that goes about in the process industry, for those
                          eager to know more about the present and future of the
                          sector that they are most interested to build their
                          career on, opportunities await you, and it is about
                          taking the right step with proper guidance. Chemkriti
                          is here to bring to you real – life experiences that
                          notable alumni from our institution have had, as they
                          have gone on to work in industries, valuable opinion
                          of veterans regarding various issues which arouse
                          interest among this generation, and of course,
                          interesting lectures on topics which you would not
                          like to miss. And this time, we are going to have
                          guests from various other domains as well. So, be
                          ready to interact with them, know more from them,
                          learn from them and plan your future accordingly. Here
                          is the chance, to hear it, from those who did it.
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <div className="col-12 col-sm-12 col-lg-4 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={img9}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Chem-O-Vate
                      </h4>
                      <p className="card-text background__text">
                        <ReadMore>
                          Innovative Workshop based on the topic “Computational
                          Aspects of Chemical Engineering”
                        </ReadMore>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default ChemKriti2021;
