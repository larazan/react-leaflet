import React from "react";

import tags from "../../assets/data/tags"
import useStore from "../../store";
import Icons from "../Icons";

const IconsContainer = () => {
  const filter = useStore((state) => state.filter);
  const query = useStore((state) => state.query);
  const iMed = useStore((state) => state.iMed);

  function importIcons(r, type, attrs) {
    return r.keys().map((fileName) => {
      const name = fileName.substr(2).replace(/\.svg$/, "");
      return {
        name,
        type,
        tags: tags[name] || [],
        svg: r(fileName).default,
        attrs,
        ddd: fileName,
      };
    });
  }

  const iconsMedium = importIcons(
    require.context(`../../assets/outline/`, false, /\.svg$/),
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
    require.context(`../../assets/solid/`, false, /\.svg$/),
    "sm",
    {
      width: 20,
      height: 20,
      viewBox: "0 0 20 20",
      fill: "currentColor",
    }
  );
  
  console.log(iconsMedium);

  if (filter && filter.length === 0) {
    return (
      <div className="pt-10 pb-16 sm:pt-24 sm:pb-36 lg:pt-40 lg:pb-56 text-center">
        <svg
          width="96"
          height="96"
          fill="none"
          className="mx-auto mb-6 text-gray-900"
        >
          <path
            d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="37.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor" />
          <ellipse cx="58.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor" />
          <path
            d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z"
            fill="currentColor"
          />
        </svg>
        <p className="text-lg leading-5 font-medium text-gray-900 mb-3">
          Sorry! There are no icons for “{query}”.
        </p>
        <p>
          If you can’t find what you’re looking for,{" "}
          <a
            href="https://github.com/tailwindlabs/heroicons/discussions/new?category=ideas"
            className="text-purple-600 border-b-2 border-purple-100 hover:bg-purple-50 transition-colors duration-150"
          >
            make a suggestion on GitHub
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative grid grid-cols-2 items-start gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-8 max-w-10xl mx-auto pt-6 sm:pt-8 pb-12"
      style={{ gridTemplateRows: "auto auto" }}
    >
      <section className="contents">
        <header className="col-start-1 row-start-1 flex flex-wrap items-baseline">
          <h2 className="flex-none text-lg leading-6 font-medium text-gray-900 mr-3">
            Outline
          </h2>
          <p className="hidden sm:block flex-auto text-gray-400 text-sm leading-5 font-medium">
            2px stroke weight, 24x24 bounding box
          </p>
          <p className="hidden sm:block flex-none w-full text-sm leading-5 mt-3">
            For primary navigation and marketing sections, designed to be
            rendered at 24x24.
          </p>
        </header>
        <Icons
          icons={iconsMedium}
          filter={filter}
          className="col-start-1 row-start-2"
        />
      </section>
     
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
    </div>
  );
};

export default IconsContainer;
