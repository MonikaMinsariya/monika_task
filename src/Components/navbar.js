import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand me-5" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">item1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">item2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">item3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">item4</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">item5</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">item6</a>
                            </li>
                        </ul>


                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#" className='btn btn-outline-primary' style={{ borderRadius: "20px" }}>Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-2" href="#"><i class="fa fa-user-circle-o" style={{ fontSize: "24px" }}></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#"><i class="fa fa-bell" style={{ fontSize: "24px" }}></i></a>
                            </li>

                        </ul>


                    </div>

                </div>
            </nav>
        </div>
    )
}
