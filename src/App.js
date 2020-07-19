import React, { useRef } from "react";
import "./App.css";
import {
  Facebook,
  Twitter,
  Whatsapp,
  Instagram,
  Close,
  Menu,
} from "mdi-material-ui";
import { Grid, Typography } from "@material-ui/core";

function App() {
  const triggerContainer = useRef(null);
  const icon = useRef(null);

  function openOverlay() {
    var keyFrames = [{ height: "0vh" }, { height: "300vh" }];
    triggerContainer.current.style.display = "flex";
    icon.current.style.display = "none";

    var animation = triggerContainer.current.animate(keyFrames, {
      duration: 500,
      playbackRate: 1,
      iterations: 1,
    });
    var secondAnimation;

    setTimeout(() => {
      secondAnimation = triggerContainer.current.animate(
        [{ width: "10px" }, { width: "400vh" }],
        {
          duration: 500,
          playbackRate: 1,
          iterations: 1,
        }
      );
    }, 160);
    setTimeout(() => {
      secondAnimation.pause();
      animation.pause();
    }, 460);
  }

  function closeOverlay() {
    var closeAnimation = triggerContainer.current.animate(
      [{ width: "400vh" }, { width: "0px" }],
      {
        duration: 500,
        playbackRate: 1,
        iterations: 1,
      }
    );
    var secondClosingAnimation;

    setTimeout(() => {
      secondClosingAnimation = triggerContainer.current.animate(
        [{ height: "300vh" }, { height: "0vh" }],
        {
          duration: 500,
          playbackRate: 1,
          iterations: 1,
        }
      );
    }, 0);
    setTimeout(() => {
      closeAnimation.pause();
      secondClosingAnimation.pause();
    }, 470);
    setTimeout(() => {
      triggerContainer.current.style.display = "none";
      icon.current.style.display = "block";
    }, 495);
  }

  return (
    <>
      <div className="container">
        <section className="section">
          <div className="main-navigation">
            <h1
              onClick={openOverlay}
              style={{
                textAlign: "center",
                fontFamily: "Geomanist-Bold",
                cursor: "pointer",
              }}
            >
              JAZZHASH
            </h1>
            <h1
              onClick={openOverlay}
              ref={icon}
              style={{
                position: "absolute",
                cursor: "pointer",
                top: "0px",
                right: "10px",
              }}
            >
              <Menu />
            </h1>
          </div>
          <div className="sub-content">
            <br />
            <br />
            <Typography
              variant="h3"
              style={{
                textAlign: "center",
                fontFamily: "Geomanist-Bold",
                cursor: "pointer",
              }}
            >
              Welcome to React Animation
            </Typography>
            <br />
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </div>

          <div className="trigger-container" ref={triggerContainer}>
            <div className="inner-container">
              <div className="navigation">
                <ul>
                  <li>work</li>
                  <li>approach</li>
                  <li>create</li>
                  <li>innovate</li>
                </ul>
              </div>
              <div style={{ width: "100%" }}>
                <Grid container style={{ color: "white" }} spacing={3}>
                  <Grid xs={12} sm={4} md={4} lg={4} item>
                    <Typography
                      variant="body1"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Geomanist-Bold",
                      }}
                    >
                      Facebook
                    </Typography>
                    <Typography variant="body1">
                      <a
                        style={{
                          fontFamily: "Intro-Light",
                          color: "white",
                        }}
                        href="https://www.facebook.com/jazzel.mehmood/"
                      >
                        Muhammad Jazzel Mehmood
                      </a>
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} md={4} lg={4} item>
                    <Typography
                      variant="body1"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Geomanist-Bold",
                      }}
                    >
                      Github
                    </Typography>
                    <Typography variant="body1">
                      <a
                        style={{
                          fontFamily: "Intro-Light",
                          color: "white",
                        }}
                        href="https://github.com/Jazz-hash"
                      >
                        https://github.com/Jazz-hash
                      </a>
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} md={4} lg={4} item>
                    <Typography
                      variant="body1"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Geomanist-Bold",
                      }}
                    >
                      Gmail
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "Intro-Light",
                      }}
                    >
                      jazzelmehmood4@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <hr />
              <div className="buttons-group">
                <button className="social-buttons" type="button">
                  <Twitter className="icons" />
                </button>
                <button className="social-buttons" type="button">
                  <Facebook className="icons" />
                </button>
                <button
                  className="trigger-close"
                  onClick={closeOverlay}
                  type="button"
                >
                  <Close className="main-icon" />
                </button>
                <button className="social-buttons" type="button">
                  <Whatsapp className="icons" />
                </button>
                <button className="social-buttons" type="button">
                  <Instagram className="icons" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
