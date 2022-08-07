import React, { useState, useEffect } from "react";

import IconList from "../IconList";

const Icons = ({ icons, filter }) => {
  const [renderAll, setRenderAll] = useState(false);

  useEffect(() => {
    setRenderAll(true);
  }, []);

  const filteredIcons = filter
    ? icons
        .filter((icon) => filter.indexOf(icon.name) !== -1)
        .sort((a, b) => filter.indexOf(a.name) - filter.indexOf(b.name))
    : icons;

  return (
    <ul
      className="grid gap-3 md:gap-4 text-center text-xs leading-4 col-start-1 row-start-2"
      // style={{ gridTemplateColumn: 'repeat(auto-fill, minmax(132px, 1fr))'}}
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))' }}
    >
      {filteredIcons.slice(0, renderAll ? undefined : 38).map((icon, i) => (
        <IconList key={icon.name} icon={icon} />
      ))}
    </ul>
  );
};

export default Icons;
