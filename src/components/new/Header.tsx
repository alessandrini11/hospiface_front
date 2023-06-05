import React from 'react'
import LogoLgDark from '../../assets/images/logo/logo-dark.png'
import LogoSm from '../../assets/images/logo/logo-sm-1.png'
type Props = {}

const Header = (props: Props) => {
    return (
        <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box horizontal-logo">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={LogoSm} alt="" />
                                </span>
                                <span className="logo-lg">
                                    <img src={LogoLgDark} alt="" />
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={LogoSm} alt="" />
                                </span>
                                <span className="logo-lg">
                                    <img src={LogoLgDark} alt="" />
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        {/* <form className="app-search d-none d-md-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." autoComplete="off" id="search-options"  />
                                <span className="mdi mdi-magnify search-widget-icon"></span>
                                <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                            </div>
                        </form> */}
                    </div>

                    <div className="d-flex align-items-center">

                        <div className="dropdown d-md-none topbar-head-dropdown header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-search fs-22"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="dropdown topbar-head-dropdown ms-1 header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='bx bx-category-alt fs-22'></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                                <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="btn btn-sm btn-soft-info"> View All Apps
                                                <i className="ri-arrow-right-s-line align-middle"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>Mail Chimp</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#!">
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown topbar-head-dropdown ms-1 header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-cart-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                                <i className='bx bx-shopping-bag fs-22'></i>
                                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart" aria-labelledby="page-header-cart-dropdown">
                                <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0 fs-16 fw-semibold"> My Cart</h6>
                                        </div>
                                        <div className="col-auto">
                                            <span className="badge badge-soft-warning fs-13"><span className="cartitem-badge">7</span>
                                                items</span>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{maxHeight: "300px"}}>
                                    <div className="p-2">
                                        <div className="text-center empty-cart" id="empty-cart">
                                            <div className="avatar-md mx-auto my-3">
                                                <div className="avatar-title bg-soft-info text-info fs-36 rounded-circle">
                                                    <i className='bx bx-cart'></i>
                                                </div>
                                            </div>
                                            <h5 className="mb-3">Your Cart is Empty!</h5>
                                            <a href="apps-ecommerce-products.html" className="btn btn-success w-md mb-3">Shop Now</a>
                                        </div>
                                        <div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1 fs-14">
                                                        <a href="apps-ecommerce-product-details.html" className="text-reset">Branded
                                                            T-Shirts</a>
                                                    </h6>
                                                    <p className="mb-0 fs-12 text-muted">
                                                        Quantity: <span>10 x $32</span>
                                                    </p>
                                                </div>
                                                <div className="px-2">
                                                    <h5 className="m-0 fw-normal">$<span className="cart-item-price">320</span></h5>
                                                </div>
                                                <div className="ps-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"><i className="ri-close-fill fs-16"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1 fs-14">
                                                        <a href="apps-ecommerce-product-details.html" className="text-reset">Bentwood Chair</a>
                                                    </h6>
                                                    <p className="mb-0 fs-12 text-muted">
                                                        Quantity: <span>5 x $18</span>
                                                    </p>
                                                </div>
                                                <div className="px-2">
                                                    <h5 className="m-0 fw-normal">$<span className="cart-item-price">89</span></h5>
                                                </div>
                                                <div className="ps-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"><i className="ri-close-fill fs-16"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1 fs-14">
                                                        <a href="apps-ecommerce-product-details.html" className="text-reset">
                                                            Borosil Paper Cup</a>
                                                    </h6>
                                                    <p className="mb-0 fs-12 text-muted">
                                                        Quantity: <span>3 x $250</span>
                                                    </p>
                                                </div>
                                                <div className="px-2">
                                                    <h5 className="m-0 fw-normal">$<span className="cart-item-price">750</span></h5>
                                                </div>
                                                <div className="ps-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"><i className="ri-close-fill fs-16"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1 fs-14">
                                                        <a href="apps-ecommerce-product-details.html" className="text-reset">Gray
                                                            Styled T-Shirt</a>
                                                    </h6>
                                                    <p className="mb-0 fs-12 text-muted">
                                                        Quantity: <span>1 x $1250</span>
                                                    </p>
                                                </div>
                                                <div className="px-2">
                                                    <h5 className="m-0 fw-normal">$ <span className="cart-item-price">1250</span></h5>
                                                </div>
                                                <div className="ps-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"><i className="ri-close-fill fs-16"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-1">
                                                    <h6 className="mt-0 mb-1 fs-14">
                                                        <a href="apps-ecommerce-product-details.html" className="text-reset">Stillbird Helmet</a>
                                                    </h6>
                                                    <p className="mb-0 fs-12 text-muted">
                                                        Quantity: <span>2 x $495</span>
                                                    </p>
                                                </div>
                                                <div className="px-2">
                                                    <h5 className="m-0 fw-normal">$<span className="cart-item-price">990</span></h5>
                                                </div>
                                                <div className="ps-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"><i className="ri-close-fill fs-16"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border" id="checkout-elem">
                                    <div className="d-flex justify-content-between align-items-center pb-3">
                                        <h5 className="m-0 text-muted">Total:</h5>
                                        <div className="px-2">
                                            <h5 className="m-0" id="cart-item-total">$1258.58</h5>
                                        </div>
                                    </div>

                                    <a href="apps-ecommerce-checkout.html" className="btn btn-success text-center w-100">
                                        Checkout
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="ms-1 header-item d-none d-sm-flex">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">
                                <i className='bx bx-fullscreen fs-22'></i>
                            </button>
                        </div>

                        <div className="ms-1 header-item d-none d-sm-flex">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                                <i className='bx bx-moon fs-22'></i>
                            </button>
                        </div>

                        <div className="dropdown topbar-head-dropdown ms-1 header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='bx bx-bell fs-22'></i>
                                <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span className="visually-hidden">unread messages</span></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">

                                <div className="dropdown-head bg-primary bg-pattern rounded-top">
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                            </div>
                                            <div className="col-auto dropdown-tabs">
                                                <span className="badge badge-soft-light fs-13"> 4 New</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2 pt-2">
                                        <ul className="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">
                                                    All (4)
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">
                                                    Messages
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">
                                                    Alerts
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="tab-content" id="notificationItemsTabContent">
                                    <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                                        <div data-simplebar className="pe-2">
                                            <div className="text-reset notification-item d-block dropdown-item position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar-xs me-3">
                                                        <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                                            <i className="bx bx-badge-check"></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                                                Optimization <span className="text-secondary">reward</span> is
                                                                ready!
                                                            </h6>
                                                        </a>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="all-notification-check01" />
                                                            <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item position-relative active">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">Answered to your comment on the cash flow forecast's
                                                                graph 🔔.</p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="all-notification-check02" defaultChecked />
                                                            <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar-xs me-3">
                                                        <span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                                            <i className='bx bx-message-square-dots'></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-2 fs-13 lh-base">You have received <b className="text-success">20</b> new messages in the conversation
                                                            </h6>
                                                        </a>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="all-notification-check03" />
                                                            <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item position-relative">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">We talked about a project on linkedin.</p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-3 text-center">
                                                <button type="button" className="btn btn-soft-success waves-effect waves-light">View
                                                    All Notifications <i className="ri-arrow-right-line align-middle"></i></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
                                        <div data-simplebar className="pe-2">
                                            <div className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">We talked about a project on linkedin.</p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 30 min ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="messages-notification-check01" />
                                                            <label className="form-check-label" htmlFor="messages-notification-check01"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">Answered to your comment on the cash flow forecast's
                                                                graph 🔔.</p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="messages-notification-check02" />
                                                            <label className="form-check-label" htmlFor="messages-notification-check02"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">Mentionned you in his comment on 📃 invoice #12501.
                                                            </p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 10 hrs ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="messages-notification-check03" />
                                                            <label className="form-check-label" htmlFor="messages-notification-check03"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-reset notification-item d-block dropdown-item">
                                                <div className="d-flex">
                                                    <div className="flex-1">
                                                        <a href="#!" className="stretched-link">
                                                            <h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                                        </a>
                                                        <div className="fs-13 text-muted">
                                                            <p className="mb-1">We talked about a project on linkedin.</p>
                                                        </div>
                                                        <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                            <span><i className="mdi mdi-clock-outline"></i> 3 days ago</span>
                                                        </p>
                                                    </div>
                                                    <div className="px-2 fs-15">
                                                        <div className="form-check notification-check">
                                                            <input className="form-check-input" type="checkbox"  id="messages-notification-check04" />
                                                            <label className="form-check-label" htmlFor="messages-notification-check04"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="my-3 text-center">
                                                <button type="button" className="btn btn-soft-success waves-effect waves-light">View
                                                    All Messages <i className="ri-arrow-right-line align-middle"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab">
                                        <div className="w-25 w-sm-50 pt-3 mx-auto">
                                        </div>
                                        <div className="text-center pb-5 mt-2">
                                            <h6 className="fs-18 fw-semibold lh-base">Hey! You have no any notifications </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="d-flex align-items-center">
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                    </span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                
                                <h6 className="dropdown-header">Welcome Anna!</h6>
                                <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                                <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                                <a className="dropdown-item" href="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
                                <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></a>
                                <a className="dropdown-item" href="pages-profile-settings.html"><span className="badge bg-soft-success text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></a>
                                <a className="dropdown-item" href="auth-lockscreen-basic.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></a>
                                <a className="dropdown-item" href="auth-logout-basic.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header