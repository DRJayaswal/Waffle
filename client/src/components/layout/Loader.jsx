import { Skeleton } from "@mui/material";
import React from "react";
import "./AppLayout.css";
const Loader = () => {
  return (
    <>
      <div className="header">
        <Skeleton className="app-bar" variant="rectangular" width={1200} height={64} />
      </div>
      <div className="container">
        <div className="sidebar">
          <Skeleton variant="rectangular" width={200} height={50} />
        </div>
        <div className="content">
          <Skeleton variant="rectangular" width={800} height={600} />
        </div>
        <div className="extra">
          <Skeleton variant="rectangular" width={200} height={50} />
        </div>
      </div>
    </>
  );
};

export default Loader;
