import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const JobDetailsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const JobTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableHead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
`;

const JobDetails = ({ job }) => {
  const { id } = useParams();
  return (
    <JobDetailsContainer>
      <JobTitle>Job ID: {id}</JobTitle>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableData>Status</TableData>
            <TableData>Run Timestamp</TableData>
            <TableData>Finish Timestamp</TableData>
            <TableData>Duration</TableData>
          </TableRow>
        </TableHead>
        <tbody>
          {job.map((instance) => (
            <TableRow key={instance.lastFinishedAt}>
              <TableData>{instance.status}</TableData>
              <TableData>
                {new Date(instance.startTime).toLocaleString()}
              </TableData>
              <TableData>
                {new Date(instance.lastFinishedAt).toLocaleString()}
              </TableData>
              <TableData>{instance.duration}</TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </JobDetailsContainer>
  );
};

export default JobDetails;
