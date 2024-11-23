import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { RxPencil2 } from "react-icons/rx";
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
import { deleteAssignment, setAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        try {
            console.log("Fething assignments...")
            const assignments = await coursesClient.findAssignmentForCourse(cid as string);
            console.log('Fetched Assignments:', assignments);
            dispatch(setAssignment(assignments));
          } catch (error) {
            console.error('Error fetching assignments');
          }
        }
      useEffect(() => {
        fetchAssignments();
      }, []);

    
    const removeAssignment = async (assignmentId: string) => {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
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
                            .map((assignment: any) => (
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
                                                deleteAssignment={(assignment)=>removeAssignment(assignment)}/>
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