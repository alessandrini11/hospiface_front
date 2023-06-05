import React from 'react'
import Pagination from '../new/Pagination'
type Props = {}

const Table = (props: Props) => {
    return (
        <div className="">
            <div className="card">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
                    <div className="flex-shrink-0">
                        <a href='/' type="button" className="btn btn-soft-success btn-sm">
                            <i className=" bx bx-plus-circle inline"></i>ajouter
                        </a>
                    </div>
                </div>

                <div className="card-body">
                    <div className="table-responsive table-card">
                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                            <thead className="text-muted table-light">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2112</a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                            </div>
                                            <div className="flex-grow-1">Alex Smith</div>
                                        </div>
                                    </td>
                                    <td>Clothes</td>
                                    <td>
                                        <span className="text-success">$109.00</span>
                                    </td>
                                    <td>Zoetic Fashion</td>
                                    <td>
                                        <span className="badge badge-soft-success">Paid</span>
                                    </td>
                                    <td>
                                        <h5 className="fs-14 fw-medium mb-0">5.0<span className="text-muted fs-11 ms-1">(61
                                                votes)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2111</a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                            </div>
                                            <div className="flex-grow-1">Jansh Brown</div>
                                        </div>
                                    </td>
                                    <td>Kitchen Storage</td>
                                    <td>
                                        <span className="text-success">$149.00</span>
                                    </td>
                                    <td>Micro Design</td>
                                    <td>
                                        <span className="badge badge-soft-warning">Pending</span>
                                    </td>
                                    <td>
                                        <h5 className="fs-14 fw-medium mb-0">4.5<span className="text-muted fs-11 ms-1">(61
                                                votes)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2109</a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                            </div>
                                            <div className="flex-grow-1">Ayaan Bowen</div>
                                        </div>
                                    </td>
                                    <td>Bike Accessories</td>
                                    <td>
                                        <span className="text-success">$215.00</span>
                                    </td>
                                    <td>Nesta Technologies</td>
                                    <td>
                                        <span className="badge badge-soft-success">Paid</span>
                                    </td>
                                    <td>
                                        <h5 className="fs-14 fw-medium mb-0">4.9<span className="text-muted fs-11 ms-1">(89
                                                votes)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2108</a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                            </div>
                                            <div className="flex-grow-1">Prezy Mark</div>
                                        </div>
                                    </td>
                                    <td>Furniture</td>
                                    <td>
                                        <span className="text-success">$199.00</span>
                                    </td>
                                    <td>Syntyce Solutions</td>
                                    <td>
                                        <span className="badge badge-soft-danger">Unpaid</span>
                                    </td>
                                    <td>
                                        <h5 className="fs-14 fw-medium mb-0">4.3<span className="text-muted fs-11 ms-1">(47
                                                votes)</span></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ2107</a>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                            </div>
                                            <div className="flex-grow-1">Vihan Hudda</div>
                                        </div>
                                    </td>
                                    <td>Bags and Wallets</td>
                                    <td>
                                        <span className="text-success">$330.00</span>
                                    </td>
                                    <td>iTest Factory</td>
                                    <td>
                                        <span className="badge badge-soft-success">Paid</span>
                                    </td>
                                    <td>
                                        <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(161
                                                votes)</span></h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination></Pagination>
                </div>
            </div> 
        </div> 
    )
}

export default Table