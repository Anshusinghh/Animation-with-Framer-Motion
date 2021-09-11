import React from "react";
import { motion } from "framer-motion";
import "./App.scss";

//Asset
import imgcolor from "./images/color-boi.jpg";
import imgboy from "./images/boy.jpg";
function App() {
  return (
    <div className="App">
      <motion.div
        animate={{ visibility: "visible" }}
        transition={{
          delay: 0.2,
        }}
        className="hero"
      >
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner">
                <h1>
                  <div className="hero-content-line">
                    <motion.div
                      initial={{ y: 44, visibility: "hidden" }}
                      animate={{
                        y: 0,
                        visibility: "visible",
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="hero-content-line-inner"
                    >
                      Relieving the burden
                    </motion.div>
                  </div>
                  <div className="hero-content-line">
                    <motion.div
                      initial={{ y: 44, visibility: "hidden" }}
                      animate={{
                        y: 0,
                        visibility: "visible",
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.15,
                      }}
                      className="hero-content-line-inner"
                    >
                      of disease caused
                    </motion.div>
                  </div>
                  <div className="hero-content-line">
                    <motion.div
                      initial={{ y: 44, visibility: "hidden" }}
                      animate={{
                        y: 0,
                        visibility: "visible",
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.3,
                      }}
                      className="hero-content-line-inner"
                    >
                      by behaviors.
                    </motion.div>
                  </div>
                </h1>
                <motion.p
                  initial={{ y: 44, visibility: "hidden" }}
                  animate={{
                    y: 0,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                  }}
                >
                  Better treats serious cardiometabolic diseases to transform
                  lives and reduce healthcare utilization through the use of
                  digital therapeutics.
                </motion.p>
                <div className="btn-row">
                  <motion.button
                    initial={{ y: 44, visibility: "hidden" }}
                    animate={{
                      y: 0,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                    }}
                    className="explore-button"
                  >
                    Explore
                    <div className="arrow-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="hero-images">
              <div className="hero-images-inner">
                <motion.div
                  animate={{
                    y: [1200, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="hero-image girl"
                >
                  <motion.img
                    animate={{
                      scale: [1.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    src={imgcolor}
                    alt="color boi"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    x: [1200, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="hero-image boy"
                >
                  <motion.img
                    animate={{
                      scale: [1.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    src={imgboy}
                    alt="boy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
