import React from "react";

function UpdateUser () {
    return (
        <div className="d-flex vh-100 bg-dark bg-gradient justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form>
                    <h2>Update Product</h2>
                    <div className="mb-2">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="Enter Title" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Price</label>
                        <input type="text" placeholder="Enter Price" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;