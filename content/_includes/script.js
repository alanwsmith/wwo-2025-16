const vars = {
  SKLA: {
    "min": 0,
    "max": 1000,
  },
  SKLB: {
    "min": 0,
    "max": 1000,
  },
  SKLD: {
    "min": 0,
    "max": 1000,
  },
  TRMA: {
    "min": 0,
    "max": 1000,
  },
  TRMB: {
    "min": 0,
    "max": 1000,
  },
  TRMC: {
    "min": 0,
    "max": 1000,
  },
  TRMD: {
    "min": 0,
    "max": 1000,
  },
  TRME: {
    "min": 0,
    "max": 1000,
  },
  TRMF: {
    "min": 0,
    "max": 1000,
  },
  TRMG: {
    "min": 0,
    "max": 1000,
  },
  TRMK: {
    "min": 0,
    "max": 1000,
  },
  TRML: {
    "min": 0,
    "max": 1000,
  },
  BLDA: {
    "min": 0,
    "max": 1000,
  },
  BLDB: {
    "min": 0,
    "max": 1000,
  },
  "l-light": {
    min: 0,
    max: 1,
  },
  "l-light": {
    min: 0,
    max: 1,
  },
};

function randFloat(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.TransitionMaker = class {
  #toggle = "max";
  async shift(_event, _el) {
    this.#toggle = this.#toggle === "min" ? "max" : "min";
    for (let axis of Object.keys(vars)) {
      document.documentElement.style.setProperty(
        `--${axis}`,
        randFloat(vars[axis].min, vars[axis][this.#toggle]),
      );
    }
    await sleep(3000);
    this.api.forward(null, "shift");
  }
};
