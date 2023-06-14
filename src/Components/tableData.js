import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TableData() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getData = async () => {
            let url = "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders";
            let response = await fetch(url);
            let parsedData = await response.json();
            setData(parsedData);
        };
        getData();
    }, []);

    const calculateApparelPercentage = (apparelCount, totalCount) => {
        if (totalCount === 0) {
            return 0;
        }
        return ((apparelCount / totalCount) * 100).toFixed(2);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter((val) =>
        val.orderDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const deleteSuccess = () => toast.success('Data Delete Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });

    const handleDelete = (index) => {
        alert('Are You sure you want to delete data?');
        let temp = [...data];
        temp.splice(index, 1);
        setData(temp);
        deleteSuccess();

    }
    return (
        <div className='container-fluid bg-light p-5'>
            <div className='container max-vw-100'>
                <div className='row mb-3'>
                    <div className="col-lg-8">
                        <h2>Order Management System</h2>
                    </div>

                    <div className="col-lg-4 d-flex">
                        <form className='d-flex input-group'>
                            <span className="input-group-text bg-white" id="basic-addon1">
                                <i className='fa fa-search'></i>
                            </span>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search By Order Description"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </form>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='col-12 table-responsive'>
                        <table className="table table-bordered table-hover table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Order Description</th>
                                    <th scope="col">Count of item types included in order</th>
                                    <th scope="col">% of items in apparel</th>
                                    <th scope="col">Created By</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((val, index) => {
                                    const apparelCount = val.countOfItemTypes.apparel || 0;
                                    const groceryCount = val.countOfItemTypes.grocery || 0;
                                    const totalCount = apparelCount + groceryCount;

                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{val.orderDescription}</td>
                                            <td>Apparel {apparelCount} Grocery {groceryCount}</td>
                                            <td>
                                                {calculateApparelPercentage(apparelCount, totalCount)
                                                }%
                                            </td>
                                            <td>{val.createdBy}</td>
                                            <td>{val.createdAt}</td>
                                            <td><button className='btn btn-outline-danger' style={{ borderRadius: "20px" }} onClick={() => handleDelete(index)}>Delete</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='mb-3'>
                    <button className='btn btn-primary'>Create New Order</button>
                </div>
            </div>
        </div>
    );
}
