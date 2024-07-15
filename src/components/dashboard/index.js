import './index.css';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const userData = localStorage.getItem('userDetails');
        setData(JSON.parse(userData));
    }, []);

    return (
        <div className="dashboard_bg_container">
            <h1>Dashboard</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.user_firstname}</td>
                        <td>{data.user_email}</td>
                        <td>{data.user_phone}</td>
                        <td>{data.user_city}</td>
                        <td>{data.user_zipcode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
