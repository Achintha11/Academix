import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAssignment,
  setAssignmentDescription,
  setAssignmentDueDate,
  setAssignmentTitle,
} from "../../features/assignment/assignmentSlice";

const AddAssignmentForm = () => {
  const { assignmentTitle, assignmentDescription, assignmentDueDate } =
    useSelector((store) => store.assignments);
  const { selectedCourseId } = useSelector((state) => state.assignments);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(assignmentTitle, assignmentDescription, assignmentDueDate);
    e.preventDefault();
    dispatch(
      addNewAssignment({
        assignmentTitle,
        assignmentDescription,
        assignmentDueDate,
        courseId: selectedCourseId,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="my-3 p-3 border ">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          onChange={(e) => dispatch(setAssignmentTitle(e.target.value))}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          onChange={(e) => dispatch(setAssignmentDescription(e.target.value))}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">
          Due Date
        </label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          onChange={(e) => dispatch(setAssignmentDueDate(e.target.value))}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm text-white">
        Add Assignment
      </button>
    </form>
  );
};

export default AddAssignmentForm;
