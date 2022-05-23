import createStore from "zustand";
import { matchSorter } from "match-sorter";

import tags from "./assets/data/tags";

function importIcons(r, type, attrs) {
  return r.keys().map((fileName) => {
    const name = fileName.substr(2).replace(/\.svg$/, "");
    return {
      name,
      type,
      tags: tags[name] || [],
      svg: r(fileName).default,
      attrs,
    };
  });
}

const iconsMedium = importIcons(
  require.context(`../src/assets/outline/`, false, /\.svg$/),
  "md",
  {
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
  }
);

const iconsSmall = importIcons(
  require.context(`../src/assets/solid/`, true, /\.svg$/),
  "sm",
  {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "currentColor",
  }
);

const useStore = createStore((set) => ({
  query: "",
  filter: undefined,
  iconCount: iconsMedium.length,
  iMed: iconsMedium,
  search: (query) => {
    set({
      query,
      filter: query
        ? matchSorter(iconsMedium, query, { keys: ["name", "tags"] }).map(
            (x) => x.name
          )
        : undefined,
    });
  },
}));

export default useStore;
