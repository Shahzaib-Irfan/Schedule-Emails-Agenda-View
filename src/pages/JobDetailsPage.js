import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import JobTable from "../components/JobTable";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/jobs/recent/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  useEffect(() => {
    console.log(job);
  }, [job]);

  return (
    <div className="job-details-page">
      {job ? <JobTable job={job} /> : <p>Loading...</p>}
    </div>
  );
};

export default JobDetailsPage;
