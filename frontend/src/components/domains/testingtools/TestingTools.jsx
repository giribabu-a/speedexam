import { Link } from "react-router-dom";
import "./TestingTools.css";
import Sidebar from "../../sidebar/Sidebar";

function TestingTools() {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-3">
                            <div className="cards exams_card">Exams</div>
                        </div>
                        <div className="col-3">
                            <Link className="card_links" to={"/testing/create"}>
                                <div className="cards questions_card">Questions</div>
                            </Link>
                        </div>
                        <div className="col-3">
                            <div className="cards students_card">Students</div>
                        </div>
                        <div className="col-3">
                            <div className="cards statistics_card">Statistics</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default TestingTools;