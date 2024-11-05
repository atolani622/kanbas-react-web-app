import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { RxPencil2 } from "react-icons/rx";
import { BsGripVertical } from 'react-icons/bs';
import * as db from "../../Database"
import { useParams } from "react-router";
import React, { useState } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const [assignments, setAssignments] = useState<any[]>(db.assignments);
    const [assignmentName, setAssignmentName] = useState("");
    const addAssignment = () => {
        setAssignments([...assignments, {
            _id: new Date().getTime().toString(),
            name: assignmentName, course: cid
        }]);
        setAssignmentName("");
    };
    const deleteAssignment = (assignmentId: string) => {
        setAssignments(assignments.filter((a) => a._id !== assignmentId));
    };
    const editAssignment = (assignmentId: string) => {
        setAssignments(assignments.map((a) => (a._id === assignmentId ? { ...a, editing: true } : a)));
      };
      const updateAssignment = (assignment: any) => {
        setAssignments(assignments.map((a) => (a._id === assignment._id ? assignment : a)));
      };
    


    return (
        <div>
            <AssignmentControls /> <br /> <br /> <br /> <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
                        <AssignmentHeaderControls />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter(assignment => assignment.course === cid)
                            .map((assignment) => (
                                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center">
                                                <BsGripVertical className="me-2 fs-3" />
                                                <RxPencil2 className="me-2 fs-3" />
                                                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                                                    {assignment.title}
                                                </a>
                                            </div>
                                            <div className="assignment-details ms-5">
                                                <div className="assignment-info">
                                                    <span className="text-red">{assignment.description}</span> | <b> Not availale until </b>{assignment.available_date}
                                                    | <b>Due</b> {assignment.due_date} | {assignment.points}pts
                                                </div>
                                            </div>
                                        </div>
                                        <div className="align-self-start mt-n2">
                                            <AssignmentControlButtons assignmentId={assignment._id}
                                                deleteAssignment={deleteAssignment}
                                                editAssignment={editAssignment}/>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}