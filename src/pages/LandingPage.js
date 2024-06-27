import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

const LandingPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);
  return (
    <div className="landing-page">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default LandingPage;
