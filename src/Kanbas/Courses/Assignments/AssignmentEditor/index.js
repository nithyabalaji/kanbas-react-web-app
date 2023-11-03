import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    updateAssignment,
    addAssignment,
} from "../assignmentsReducer";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BiSolidCheckCircle } from "react-icons/bi";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const [editedAssignment, setEditedAssignment] = useState(assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleCancel = () => {  
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        if (assignmentId == "new") {
            dispatch(addAssignment({... editedAssignment, course: courseId}))
        } else {
            dispatch(updateAssignment(editedAssignment));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="flex-col-container me-4 flex-grow-1">
            <div className="top-buttons flex-row-container">
                <div className="float-left flex-grow-1"></div>
                <div className="float-end me-3 green"><BiSolidCheckCircle className="float-start mt-1 me-1" />Published</div>
                <button className="btn btn-secondary gray flex-right"><FaEllipsisVertical className="mb-1" /></button>
            </div>
            <div>
                <label for="text-field-assignment-name">Assignment Name</label>
                <input
                    className="form-control"
                    id="text-field-assignment-name"
                    placeholder="Assignment Name"
                    value={editedAssignment.title}
                    onChange={(e) =>
                        setEditedAssignment({ ...editedAssignment, title: e.target.value })
                    } /><br />

                <form id="textarea">
                    <textarea
                        className="form-control"
                        placeholder="Assignment Description"
                        value={editedAssignment.description}
                        onChange={(e) =>
                            setEditedAssignment({ ...editedAssignment, description: e.target.value })
                        }>
                    </textarea>
                </form><br />

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="row mb-3 flex-row">
                            <label for="text-field-points" className="col-sm-3 col-form-label pt-0"><p className="text-right">Points</p></label>
                            <div className="col-sm-9 ps-0">
                                <input className="form-control w-75" type="number" id="text-field-points" placeholder="0" value="100" />
                            </div>
                        </div>

                        {/* <div className="row mb-3 flex-row">
                        <label for="assignment-group" className="col-sm-3 col-form-label pt-0">Assignment Group</label>
                        <div className="col-sm-9 ps-0">
                            <select id="assignment-group" className="form-select w-75">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            </select><br/>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="display-grade-as" className="col-sm-3 col-form-label pt-0">Display Grade as</label>
                        <div className="col-sm-9 ps-0">
                            <select id="assignment-group" className="form-select w-75">
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                            <input className="form-check-input" type="checkbox" value="FINAL-GRADE" id="chkbox-final-grade"/>
                            <label for="chkbox-final-grade">Do not count this assignment towards the final grade</label>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="submission-type" className="col-sm-3 col-form-label pt-0">Submission Type</label>
                        <div className="col-sm-9 border border-secondary rounded w-75 p-3">
                            <form id="submission-type">
                                <select className="form-select w-75">
                                    <option value="ONLINE">Online</option>
                                </select><br/>
        
                                <label className="form-check-label" for="online-entry-options">
                                    <b>Online Entry Options</b>
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="TEXT" name="online-entry-options" id="chkbox-text-entry"/>
                                <label for="chkbox-text-entry">Text Entry</label><br/>
                                <input className="form-check-input" type="checkbox" value="WEBSITE" name="online-entry-options" id="chkbox-url"/>
                                <label for="chkbox-url">Website URL</label><br/>
                                <input className="form-check-input" type="checkbox" value="MEDIA-RECORDING" name="online-entry-options" id="chkbox-media"/>
                                <label for="chkbox-media"> Media Recordings</label><br/>
                                <input className="form-check-input" type="checkbox" value="STUDENT-ANNOTATIONS" name="online-entry-options" id="chkbox-student-annot"/>
                                <label for="chkbox-student-annot">Student Annotation</label><br/>
                                <input className="form-check-input" type="checkbox" value="FILE-UPLOADS" name="online-entry-options" id="chkbox-file"/>
                                <label for="chkbox-file">File Uploads</label><br/>
                            </form>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="submission-attempts" className="col-sm-3 col-form-label pt-0">Submission Attempts</label>
                        <div className="col-sm-9 ps-0">
                            <select id="submission-attempts" className="form-select w-75">
                                <option value="UNLIMITED">Unlimited</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="plagiarism-review" className="col-sm-3 col-form-label pt-0">Plagiarism Review</label>
                        <div className="col-sm-9 ps-0">
                            <select id="plagiarism-review" className="form-select w-75">
                                <option value="NONE">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="group-assignment" className="col-sm-3 col-form-label pt-0">Group Assignment</label>
                        <div className="col-sm-9 ps-0">
                            <input className="form-check-input" type="checkbox" value="GROUP" name="group-assignment" id="chkbox-group"/>
                            <label for="chkbox-group">This is a group assignment</label>
                        </div>
                    </div>

                    <div className="row mb-3 flex-row">
                        <label for="peer-reviews" className="col-sm-3 col-form-label pt-0">Peer Reviews</label>
                        <div className="col-sm-9 ps-0">
                            <input className="form-check-input" type="checkbox" value="REQUIRE" name="peer-reviews" id="chkbox-peer-review"/>
                            <label for="chkbox-peer-review">Require Peer Reviews</label>
                        </div>
                    </div> */}

                        <div className="row mb-3 flex-row">
                            <label for="assign" className="col-sm-3 col-form-label pt-0">Assign</label>
                            <div className="col-sm-0 border border-secondary rounded w-75 p-3">
                                <label for="assign-to">
                                    Assign To
                                </label><br />
                                <input className="form-control" id="assign-to" value="Everyone" /><br />

                                <label for="due-date">
                                    Due
                                </label><br />
                                <input
                                    className="form-control"
                                    type="date"
                                    id="due-date"
                                    value={editedAssignment.dueDate}
                                    placeholder="2023-01-01"
                                    onChange={(e) =>
                                        setEditedAssignment({ ...editedAssignment, dueDate: e.target.value })
                                    } /><br />

                                <label for="available-from-date">
                                    Available from
                                </label><br />
                                <input
                                    className="form-control"
                                    type="date"
                                    id="available-from-date"
                                    value={editedAssignment.availableFromDate}
                                    placeholder="2023-01-01"
                                    onChange={(e) =>
                                        setEditedAssignment({ ...editedAssignment, availableFromDate: e.target.value })
                                    } /><br />

                                <label for="until-date">
                                    Until
                                </label><br />
                                <input
                                    className="form-control"
                                    type="date"
                                    id="until-date"
                                    value={editedAssignment.availableUntilDate}
                                    placeholder="2023-01-01"
                                    onChange={(e) =>
                                        setEditedAssignment({ ...editedAssignment, availableUntilDate: e.target.value })
                                    } /><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>

            </div>
            <div className="flex-row-container bottom-buttons">
                <div className="float-left flex-grow-1"></div>
                <div className="float-right">
                    <button
                        onClick={handleCancel}
                        className="btn btn-secondary gray m-1">
                        Cancel
                    </button>
                </div>
                <div className="float-right">
                    <button
                        onClick={handleSave}
                        className="btn btn-danger m-1">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AssignmentEditor;