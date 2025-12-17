import React from "react";
import { useRef, useMemo } from "react";
import { createBlocks } from "./A4BlockPage";
import { useA4Pagination } from "./useA4Pagination";
import A4Pages from "./A4Pages";
import "../styles/page.css";

export default function A4Report({ cover, condition, sections, results }) {
  const blocks = useMemo(() => createBlocks(results), [results]); // Memoize blocks so they are created only once
  const measureRef = useRef(null); // Ref to hidden div for measuring block heights

  // Get paginated pages based on A4 page height
  const pages = useA4Pagination({
    blocks,
    measureRef,
  });

  return (
    <>
      {/* Render actual A4 pages using paginated data */}
      <A4Pages
        cover={cover}
        condition={condition}
        results={results}
        pages={pages}
      />

      {/* Reference to this hidden container for measuring each block's height */}
      <div
        ref={measureRef}
        style={{
          position: "fixed",
          top: "-10000px",
          left: 0,
          visibility: "hidden",
          width: "210mm",
        }}
      >
        {/* Hidden measurement container off-screen to calculate block heights */}
        {blocks.map((b) => (
          <div key={b.id} data-id={b.id} className="measure-block">
            {b.node} {/* Render each block for height measurement */}
          </div>
        ))}
      </div>
    </>
  );
}
