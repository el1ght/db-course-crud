import React, {useState} from "react";
import {Link} from "react-router-dom";

function Users () {
    const [users, setUsers] = useState([{
        title: "PC",
        price: "1000"
    }]);
    return (
        <div className="d-flex vh-100 bg-dark bg-gradient justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add</Link>
                <table className="table">
                    <thead>
                        <tr className="flex">
                            <th>Title</th>
                            <th>Price</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr className="align-middle">
                                    <td >{user.title}</td>
                                    <td>{user.price}</td>
                                    <td className="text-end">
                                        <Link to="/update" className="btn btn-warning m-1">Update</Link>
                                        <button className="btn btn-danger m-1">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users;