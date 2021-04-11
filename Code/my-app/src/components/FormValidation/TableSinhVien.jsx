import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableSinhVien extends Component {
    renderThongtin = () => {
        let { id, name, phone, email } = this.props.student;
        // let { student: { id, name, phone, email}} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td><button className="btn btn-danger">Xoa</button></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>phone</th>
                            <th>email</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderThongtin()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    student : store.form.student,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien)
