import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const AssignmentsAccordion = () => {
  const { assignments } = useSelector((store) => store.assignments);
  return (
    <Accordion defaultActiveKey={null}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Assignments</Accordion.Header>
        <Accordion.Body>
          {assignments.length === 0 ? (
            <p>No assignments found.</p>
          ) : (
            assignments.map((assignment) => (
              <Card key={assignment._id} className="mb-3 shadow">
                <Card.Body>
                  <Card.Title>{assignment.assignmentTitle}</Card.Title>
                  <Card.Text>{assignment.assignmentDescription}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Due Date:{" "}
                      {new Date(
                        assignment.assignmentDueDate
                      ).toLocaleDateString()}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AssignmentsAccordion;
