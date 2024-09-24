import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/CS2500.jpg" width={200} />
                        <div>
                            <h5>
                                CS2500
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Computer Science
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/CS1800.jpg" width={200} />
                        <div>
                            <h5>
                                CS1800
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete Structures
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/CS3500.jpg" width={200} />
                        <div>
                            <h5>
                                CS3500
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Object Oriented Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/MKTG2201.jpg" width={200} />
                        <div>
                            <h5>
                                MKTG2201
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Marketing
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/FINA2201.jpg" width={200} />
                        <div>
                            <h5>
                                FINA2201
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Financial Management
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/PHIL1145.jpg" width={200} />
                        <div>
                            <h5>
                                PHIL1145
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Technology and Human Values
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
