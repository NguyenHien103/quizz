import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getlistTopic } from "../../Services/topicServices";
import './topic.css';

function Topic() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getlistTopic();
            console.log(response);
            setTopics(response);
        }
        fetchApi();
    }, []);

    return (
        <div className="topic-container">
            <h2>Danh sách chủ đề</h2>
            {topics.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><Link to={'/quizz/' + item.id}>Làm bài</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Topic;
