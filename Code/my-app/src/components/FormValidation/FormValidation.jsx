import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../redux/Config'

class FormValidation extends Component {
    state = {
        student: {
            id: "",
            name: "",
            phone: "",
            email: "",
        }
    }

    handleOnchange = (event) => {
        let{ name, value } = event.target;
        this.setState({student: {...this.state.student, [name]: value}}, ()=>{
            console.log("state",this.state);
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {add} = this.props;
        add({...this.state.student});
    }

    render() {
        let { id, name, phone, email } = this.state.student;
        return (
            <div>
                <div class="card text-white bg-primary">
                    <div className="card-header">THONG TIN SINH VIEN</div>
                  <form class="card-body form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-6">
                            <p>ID</p>
                            <input type="text" className="form-control" value={id} name="id" onChange={this.handleOnchange}/>
                        </div>
                        <div className="form-group col-6">
                            <p>Name</p>
                            <input type="text" className="form-control" value={name} name="name" onChange={this.handleOnchange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <p>Phone</p>
                            <input type="text" className="form-control" value={phone} name="phone" onChange={this.handleOnchange}/>
                        </div>
                        <div className="form-group col-6">
                            <p>Email</p>
                            <input type="text" className="form-control" value={email} name="email" onChange={this.handleOnchange}/>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-success">Them Sinh Vien</button>
                        <button type="button" className="btn btn-primary" onClick={() => {

                        }}>Cap Nhat</button>
                    </div>
                    {/* <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p> */}
                  </form>
                </div>          
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return ({
        add: (student) => {
            const action = { type: "NEW" , student: student}
            dispatch(action);
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FormValidation)
