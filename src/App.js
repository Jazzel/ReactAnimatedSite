import React, { useRef} from "react";
import "./App.css";

function App() {
  const triggerContainer = useRef(null);

  function openOverlay() {
    var keyFrames = [{ height: "0vh" }, { height: "300vh" }];
    triggerContainer.current.style.display = "flex";

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
    }, 495);
  }

  return (
    <>
      <div className="container">
        <section className="section">
          <div className="main-navigation">
            <h1 onClick={openOverlay} style={{textAlign:"center"}} >Click here</h1>
          </div>

          <div className="trigger-container" ref={triggerContainer}>
            <div className="inner-container">
              <div className="navigation"></div>
              <hr />
              <div className="buttons-group">
                <button className="social-buttons" type="button">
                  F
                </button>
                <button className="social-buttons" type="button">
                  F
                </button>
                <button
                  className="trigger-close"
                  onClick={closeOverlay}
                  type="button"
                >
                  Close Overlay
                </button>
                <button className="social-buttons" type="button">
                  F
                </button>
                <button className="social-buttons" type="button">
                  F
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
