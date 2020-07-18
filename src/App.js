import React, { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  const triggerBttn = useRef(null);
  const overlay = useRef(null);
  const closeBttn = useRef(null);
  const s = useRef(null);
  const path = useRef(null);
  const [overlayClass, setOverlayClass] = useState("close");

  useEffect(() => {
    const transEndEventNames = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      msTransition: "MSTransitionEnd",
      transition: "transitionend",
    };
    console.log(triggerBttn, overlay, closeBttn, s.current, path.current);
    const steps = "m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z;m 698.9986,728.03569 41.23353,0 -3.41953,77.8735 -34.98557,0 z;m 687.08153,513.78234 53.1506,0 C 738.0505,683.9161 737.86917,503.34193 737.27015,806 l -35.90067,0 c -7.82727,-276.34892 -2.06916,-72.79261 -14.28795,-292.21766 z;m 403.87105,257.94772 566.31246,2.93091 C 923.38284,513.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 455.17312,480.07689 403.87105,257.94772 z;M 51.871052,165.94772 1362.1835,168.87863 C 1171.3828,653.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 31.173122,513.78234 51.871052,165.94772 z;m 52,26 1364,4 c -12.8007,666.9037 -273.2644,483.78234 -322.7299,776 l -633.90062,0 C 359.32034,432.49318 -6.6979288,733.83462 52,26 z;m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z".split(
      ";"
    );
    const stepsTotal = steps.length;

    const transEndEventName = transEndEventNames["transition"];
    const support = { transitions: true };

    console.log(steps);
    function toggleOverlay() {
      if (overlayClass === "open") {
      } else if (!overlayClass == "close") {
        var pos = 0;
        setOverlayClass("open");

        var nextStep = function (pos) {
          pos++;
          if (pos > stepsTotal - 1) return;
          path.current.animate({ path: steps[pos] }, 60,  "linear", function () {
            nextStep(pos);
          });
        };

        nextStep(pos);
      }
    }
  });

  return (
    <>
      <div className="container">
        <section>
          <p>
            <button className="trigger" ref={triggerBttn} type="button">
              Open Overlay
            </button>
          </p>
        </section>
      </div>
      <div
        className={`overlay overlay-genie ${overlayClass}`}
        ref={overlay}
        data-steps="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z;m 698.9986,728.03569 41.23353,0 -3.41953,77.8735 -34.98557,0 z;m 687.08153,513.78234 53.1506,0 C 738.0505,683.9161 737.86917,503.34193 737.27015,806 l -35.90067,0 c -7.82727,-276.34892 -2.06916,-72.79261 -14.28795,-292.21766 z;m 403.87105,257.94772 566.31246,2.93091 C 923.38284,513.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 455.17312,480.07689 403.87105,257.94772 z;M 51.871052,165.94772 1362.1835,168.87863 C 1171.3828,653.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 31.173122,513.78234 51.871052,165.94772 z;m 52,26 1364,4 c -12.8007,666.9037 -273.2644,483.78234 -322.7299,776 l -633.90062,0 C 359.32034,432.49318 -6.6979288,733.83462 52,26 z;m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 806"
          ref={s}
          preserveAspectRatio="none"
        >
          <path
            className="overlay-path"
            ref={path}
            d="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z"
          />
        </svg>
        <button type="button" className="overlay-close" ref={closeBttn}>
          Close
        </button>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Clients</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
