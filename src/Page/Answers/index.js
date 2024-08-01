import React, { useEffect, useState } from "react";
import { getAnswersByuserId } from "../../Services/AnswerServices";
import { getlistTopic } from "../../Services/topicServices";
import { Link } from "react-router-dom";
import './answer.css';

function Answer() {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const answersByuserId = await getAnswersByuserId();
            const topics = await getlistTopic();

            let result = [];

            for (let i = 0; i < answersByuserId.length; i++) {
                result.push({
                    ...topics.find(item => item.id === answersByuserId[i].topicId),
                    ...answersByuserId[i]
                });
            }

            setDataAnswers(result.reverse());
        };

        fetchApi();
    }, []);

    console.log(dataAnswers);

    return (
        <div className="answer-container">
            <h2>Danh sách bài đã luyện tập</h2>
            {dataAnswers && dataAnswers.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswers.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><Link to={'/result/' + item.id}>Xem chi tiết</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Answer;
