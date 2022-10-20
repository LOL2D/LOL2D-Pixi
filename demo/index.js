import * as F from "./js/sketch.js";

for (let key in F) {
  window[key] = F[key];
}
