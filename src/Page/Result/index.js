import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../Services/AnswerServices";
import { getlistQuetions } from "../../Services/questionsServices";
import "./result.css";

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswers(params.id);
            console.log("Data Answers: ", dataAnswers); // Check the structure of dataAnswers
            const dataQuestions = await getlistQuetions(dataAnswers.topicId);
            console.log("Data Questions: ", dataQuestions); // Check the structure of dataQuestions

            let resultFinal = dataQuestions.map(question => ({
                ...question,
                answer: dataAnswers.answers.find(answer => answer.questionId === question.id)?.answer || null
            }));

            console.log("Result Final: ", resultFinal); // Check the final combined data structure
            setDataResult(resultFinal);
        };
        fetchApi();
    }, [params.id]);

    return (
        <div className="result-container">
            <h1>Kết quả:</h1>
            <div className="result-list">
                {dataResult.map((item, index) => (
                    <div className="result__item" key={item.id}>
                        <p>Câu {index + 1}: {item.question}
                            {item.correctAnswer === item.answer ? (
                                <span className="result__tag result__tag--true">Đúng</span>
                            ) : (
                                <span className="result__tag result__tag--false">Sai</span>
                            )}
                        </p>
                        {item.answers.map((itemAns, indexAns) => {
                            let className = '';
                            let checked = false;

                            if (item.answer === indexAns) {
                                checked = true;
                                className = "result__item--selected";
                                if (item.correctAnswer === indexAns) {
                                    className += " result__item--correct"; // Đáp án đã chọn đúng
                                } else {
                                    className += " result__item--incorrect"; // Đáp án đã chọn sai
                                }
                            } else if (item.correctAnswer === indexAns) {
                                className = "result__item--correct"; // Đáp án đúng
                            }

                            return (
                                <div className={`result__answer ${className}`} key={indexAns}>
                                    <input
                                        type="radio"
                                        checked={checked}
                                        disabled
                                    />
                                    <label>{itemAns}</label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Result;
