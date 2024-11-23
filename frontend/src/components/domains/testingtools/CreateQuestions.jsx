import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaTrashAlt, FaRegSave } from 'react-icons/fa';
import { Button } from "@mui/material";
import { Add } from '@mui/icons-material';

import "./CreateQuestions.css";
import Sidebar from "../../sidebar/Sidebar";

function CreateQuestions() {

    const [questionType, setQuestionType] = useState("");
    const [questions, setQuestions] = useState([]);

    const handleQuestionType = (event) => {
        setQuestionType(event.target.value)
    };

    const handleNewQuestion = () => {

    };

    const handleEditorChange = () => {

    }

    return (
        <div className="row">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col-10 mt-5">
                <div>
                    <div className="d-flex align-items-center">
                        <label className="question_type_cont">Quetion Type:</label>
                        <select onChange={handleQuestionType} className="form-control question_type_dropdown">
                            <option disabled>Select</option>
                            <option value="coding">Coding</option>
                            <option value="mcq">MCQ's</option>
                            <option value="msq">MSQ's</option>
                            <option value="blanks">Fill in the blanks</option>
                        </select>
                    </div>

                    {
                        questions.map((question) => (
                            <div key={question.id} className="question-block">
                                <div className="Create_editor">
                                    <CKEditor editor={ClassicEditor} data={question.editorData}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            handleEditorChange(question.id, data)
                                        }} />
                                </div>
                            </div>
                        ))
                    }
                    <Button variant="contained" startIcon={<Add />} className="my-4" onClick={handleNewQuestion}>
                        Add New Question
                    </Button>


                    <div className="Create_option">
                        <input type="text" />
                        <button><FaTrashAlt /></button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default CreateQuestions;