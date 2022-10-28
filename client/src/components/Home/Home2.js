import React, { useEffect, useState } from "react";
import "./home2-styles.css";

function Home2() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [SlidesView, setSlidesView] = useState(3);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  useEffect(() => {
    if (windowDimenion.winWidth < 799) {
      setSlidesView(1.2);
    } else {
      setSlidesView(3);
    }
  }, [windowDimenion]);
  return (
    <>
      <div className="home-about">
        <div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1>WHAT IS CAMPUS AMBASSADOR PROGRAM?</h1>
              </div>
              <div className="content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                incidunt sed minus eveniet a non molestias dolorem fugiat
                expedita, rerum distinctio veritatis alias modi iure ratione,
                natus, libero explicabo eos.
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1>WHAT IS CAMPUS AMBASSADOR PROGRAM?</h1>
              </div>
              <hr />
              <div className="content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorem eum fuga. Debitis cumque qui dolore! Iusto porro quos
                quidem repellat maxime iure adipisci! Sunt voluptatum eius illum
                voluptas cumque.
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1>WHAT IS CAMPUS AMBASSADOR PROGRAM?</h1>
              </div>
              <hr />
              <div className="content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                incidunt sed minus eveniet a non molestias dolorem fugiat
                expedita, rerum distinctio veritatis alias modi iure ratione,
                natus, libero explicabo eos.
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1>WHAT IS CAMPUS AMBASSADOR PROGRAM?</h1>
              </div>
              <hr />
              <div className="content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                incidunt sed minus eveniet a non molestias dolorem fugiat
                expedita, rerum distinctio veritatis alias modi iure ratione,
                natus, libero explicabo eos.
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="content">
              <div className="content-head">
                <h1>WHAT IS CAMPUS AMBASSADOR PROGRAM?</h1>
              </div>
              <hr />
              <div className="content-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                incidunt sed minus eveniet a non molestias dolorem fugiat
                expedita, rerum distinctio veritatis alias modi iure ratione,
                natus, libero explicabo eos. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Nihil incidunt sed minus eveniet a
                non molestias dolorem fugiat expedita, rerum distinctio
                veritatis alias modi iure ratione, natus, libero explicabo eos.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                incidunt sed minus eveniet a non molestias dolorem fugiat
                expedita, rerum distinctio veritatis alias modi iure ratione,
                natus, libero explicabo eos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home2;
