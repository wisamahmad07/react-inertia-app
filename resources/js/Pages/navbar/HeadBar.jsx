import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const HeadBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <InertiaLink className="btn btn-primary" href="/">
                        Wisam CRUD LR_INERTIA
                    </InertiaLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <InertiaLink
                                className="btn btn-success"
                                href="/products"
                            >
                                View(index)
                            </InertiaLink>
                            <InertiaLink
                                className="btn btn-danger"
                                href="/products/create"
                            >
                                ADD
                            </InertiaLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeadBar;
