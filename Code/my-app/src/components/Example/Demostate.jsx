import React, { Component } from 'react'

export default class Demostate extends Component {
    state = {
        isLogin: false,
    }
    usename = "tiendatptbt";
    renderLogin = () => {
        let content;
        if (this.state.isLogin) {
            content = <span className="nav-link">Hello{this.UserName}</span>
        }
        else {
            content = <button className="btn btn-link" onClick={this.Login} > Dang nhap </button>
        }
        return content;
    }
    Login = () => {
        let newStage = {
            isLogin: true,
        }
        this.setState(newStage, () => { console.log(this.stage) })

        //this.renderLogin()
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* <input className="form-control mr-sm-2" type="text" placeholder="Dang nhap" />
                            <button className="btn btn-link btn-outline-success my-2 my-sm-0" onClick={} type="submit">Search</button> */}
                            {this.renderLogin()};
                        </form>
                    </div>
                </nav>
            </div>

        )
    }
}

