import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../Services/topicServices";
import { getlistQuetions } from "../../Services/questionsServices";
import { getCookie } from "../../Helper/cookie";
import { createAnswer } from "../../Services/quizzServices";

function Quizz() {
    const params = useParams();
    const [dataTopic, setDatatopic] = useState();
    const [dataQuestion, setDataQuestion] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDatatopic(response);
        };
        fetchApi();
    }, [params.id]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getlistQuetions(params.id);
            setDataQuestion(response);
        };
        fetchApi();
    }, [params.id]);

    const handlesubmit = async (e) => {
        e.preventDefault();

        let selectedAnswers = [];
        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectedAnswers.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                });
            }
        }

        let options = {
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answers: selectedAnswers
        };

        const response = await createAnswer(options);

        if (response && response.id) {
            navigate(`/result/${response.id}`);
        } else {
            console.error("Unexpected response:", response);
        }
    };

    return (
        <>
            <h2>Bài Quizz chủ đề: {dataTopic && dataTopic.name}</h2>
            <div className="form-quizz">
                <form onSubmit={handlesubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="form-quizz__item" key={item.id}>
                            <p>Câu {index + 1}: {item.question}</p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quizz__answers" key={indexAns}>
                                    <input 
                                        type="radio" 
                                        name={item.id} 
                                        value={indexAns} 
                                        id={`quizz-${item.id}-${indexAns}`} 
                                    />
                                    <label htmlFor={`quizz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Quizz;
