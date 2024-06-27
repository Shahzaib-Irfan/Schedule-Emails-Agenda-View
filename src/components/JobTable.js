import React from "react";
import JobDetails from "./JobDetails";

const JobTable = ({ job }) => {
  return (
    <div className="job-table">
      <JobDetails job={job} />
    </div>
  );
};

export default JobTable;
