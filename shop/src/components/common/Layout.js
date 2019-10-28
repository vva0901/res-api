import React from 'react';


const Layout = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container"><a className="navbar-brand" href="/store">X Store</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div
                        className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Admin<span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="/store">Store</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;