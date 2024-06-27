import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import cronParser from "cron-parser";

const parseCronExpression = (expression) => {
  try {
    const interval = cronParser.parseExpression(expression);
    const fields = interval.fields;

    const seconds =
      fields.second.length > 1
        ? `every ${fields.second[1] - fields.second[0]} seconds`
        : "";
    const minutes =
      fields.minute.length > 1
        ? `every ${fields.minute[1] - fields.minute[0]} minutes`
        : "";
    const hours =
      fields.hour.length > 1
        ? `every ${fields.hour[1] - fields.hour[0]} hours`
        : "";
    const daysOfMonth =
      fields.dayOfMonth.length > 1
        ? `every ${fields.dayOfMonth[1] - fields.dayOfMonth[0]} days`
        : "";
    const months =
      fields.month.length > 1
        ? `every ${fields.month[1] - fields.month[0]} months`
        : "";
    const daysOfWeek =
      fields.dayOfWeek.length > 1
        ? `every ${fields.dayOfWeek[1] - fields.dayOfWeek[0]} days of the week`
        : "";

    let result = "";
    if (seconds) result += seconds;
    if (minutes) result += `${result ? ", " : ""}${minutes}`;
    if (hours) result += `${result ? ", " : ""}${hours}`;
    if (daysOfMonth) result += `${result ? ", " : ""}${daysOfMonth}`;
    if (months) result += `${result ? ", " : ""}${months}`;
    if (daysOfWeek) result += `${result ? ", " : ""}${daysOfWeek}`;

    return result || expression;
  } catch (err) {
    return expression;
  }
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #009879;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const JobStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StatusIcon = styled.div`
  margin-right: 10px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? "#d9534f" : "#5cb85c")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 1em;
`;

const JobDetail = styled.div`
  margin-bottom: 10px;
`;

const JobCard = ({ job }) => {
  const { cronExpression, isActive, subject } = job.data;
  const { _id, status, lastFinishedAt, failCount } = job;

  const getStatusIcon = (status, failCount) => {
    return status === "sent" && failCount === 0 ? (
      <FaCheckCircle style={{ color: "green" }} />
    ) : (
      <FaTimesCircle style={{ color: "red" }} />
    );
  };

  const toggleJobStatus = () => {
    // Implement the job activation toggle functionality
  };

  return (
    <CardContainer>
      <Card>
        <CardHeader>
          <Link
            to={`/job/${_id}`}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {subject}
          </Link>
        </CardHeader>
        <CardContent>
          <JobStatus>
            <StatusIcon>{getStatusIcon(status, failCount)}</StatusIcon>
            Last Job Success Status
          </JobStatus>
          <JobDetail>
            Last Completed Time: {new Date(lastFinishedAt).toLocaleString()}
          </JobDetail>
          <JobDetail>
            Scheduled Every: {parseCronExpression(cronExpression)}
          </JobDetail>
          <JobDetail>Job ID: {_id}</JobDetail>
          <ToggleButton active={isActive} onClick={toggleJobStatus}>
            {isActive ? "Deactivate" : "Activate"}
          </ToggleButton>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default JobCard;
