import createStore from "zustand";
import { matchSorter } from "match-sorter";

import tags from "./assets/data/tags";
import marks from "./assets/data/marks";
import keys from "./assets/data/keys.json";


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

const allIcons = keys.map(s => ({ name: s.name, tags: marks[s.name] }))

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
  iconCount: allIcons.length,
  iMed: iconsMedium,
  search: (query) => {
    set({
      query,
      filter: query
        ? matchSorter(allIcons, query, { keys: ["name", "tags"] }).map(
            (x) => x.name
          )
        : undefined,
    });
  },
}));

export default useStore;
