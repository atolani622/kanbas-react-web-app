import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControls from "./AssignmentHeaderControls";
import { RxPencil2 } from "react-icons/rx";
import { BsGripVertical } from 'react-icons/bs';

export default function Assignments() {
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
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A1 - ENV + HTML
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A2 - Assignment 2
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A3 - Assignment 3
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A4 - Assignment 4
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A5 - Assignment 5
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A6 - Assignment 6
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A7 - Assignment 7
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <RxPencil2 className="me-2 fs-3" />
                                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                            A8 - Assignment 8
                                        </a>
                                    </div>
                                    <div className="assignment-details ms-5">
                                        <div className="assignment-info">
                                            <span className="text-red">Mulitple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                                        </div>
                                        <div className="assignment-info">
                                            <b>Due</b> May 13th at 11:59pm | 100pts
                                        </div>
                                    </div>
                                </div>
                                <div className="align-self-start mt-n2">
                                    <AssignmentControlButtons />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>


    );
}
