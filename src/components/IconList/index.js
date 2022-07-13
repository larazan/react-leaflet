import React, { useState, useEffect } from "react";

import RenderSvg from '../RenderSvg';

const IconList = ({ icon }) => {
  const [state, setState] = useState("idle");
  const [activeType, setActiveType] = useState(undefined);

  const ENTER = 13
  const UP = 38
  const DOWN = 40
  const SPACE = 32
  const ESC = 27

  function activate() {
    if (state === "idle") {
      setState("active");
    }
  }

  function deactivate() {
    if (state === "active") {
      setState("idle");
      setActiveType(undefined);
    }
  }

  function onKeyDown(e) {
    if ([ENTER, SPACE, UP, DOWN, ESC].includes(e.which)) {
      e.preventDefault();
    }
    if (state === "active" && e.which === ESC) {
      setState("idle");
      setActiveType(undefined);
    } else if (state === "idle" && [ENTER, SPACE, DOWN].includes(e.which)) {
      setState("active");
      setActiveType("svg");
    } else if (activeType === "svg" && e.which === DOWN) {
      setActiveType("jsx");
    } else if (activeType === "jsx" && e.which === UP) {
      setActiveType("svg");
    }
  }

  useEffect(() => {
    if (state === "copied") {
      const handler = window.setTimeout(() => {
        setState("idle");
      }, 1000);
      return () => {
        window.clearTimeout(handler);
      };
    }
  }, [state]);

  return (
    <li
      className="relative flex flex-col-reverse "
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={activate}
    >
      {/* <h3 id={`${icon.name}-name`}>{icon.name}</h3> */}
      <div className="relative mb-3 h-24">
        <button
          type="button"
          onKeyDown={onKeyDown}
          onBlur={() => {
            window.setTimeout(() => {
              deactivate();
            }, 0);
          }}
          id={`${icon.name}-${icon.type}-btn`}
          aria-label={icon.name}
          aria-haspopup="true"
          aria-controls={`${icon.name}-${icon.type}`}
          aria-expanded={state === "active" ? true : undefined}
          className="absolute inset-0 w-full flex items-center justify-center rounded-lg border border-gray-200 hover:border-2 hover:border-gray-600 cursor-pointer"
        >
          <div className="h-12 w-12 pt-2">
            <RenderSvg c={`${icon.name}-12`} f={4} />
          </div>
        </button>
        <h3 className="pt-3 text-sm text-gray-700" id={`${icon.name}-name`}>{icon.name}</h3>
      </div>
    </li>
  );
};

export default IconList;
