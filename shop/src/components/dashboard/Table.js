import React from 'react';


const Table = props => {
    return (
        <div className="table-wapper"><a className="btn btn-primary mb-2" onClick={props.showAdd}>ADD</a>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Material</th>
                        <th scope="col">Color</th>
                        <th scope="col">Size</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Image</th>
                        <th colSpan="3">Pirce</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default Table;