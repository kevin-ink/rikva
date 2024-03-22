import React, { useEffect, useRef } from "react";
import { TableauViz } from "@tableau/embedding-api";

const TableauViz4 = () => {
  const tableauVizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableauVizRef.current) {
      const viz = new TableauViz();
      viz.src =
        "https://public.tableau.com/shared/7NRCDW5WX?:display_count=n&:origin=viz_share_link";
      tableauVizRef.current.appendChild(viz);
      const tableau_vis = tableauVizRef.current;
      return () => {
        tableau_vis.innerHTML = "";
      };
    }
  }, []);

  return <div ref={tableauVizRef}></div>;
};

export default TableauViz4;
