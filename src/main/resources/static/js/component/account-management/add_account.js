class AddAccount extends React.Component{

    constructor(){
        super();
        // this.setState = {
        //     email: '',
        //     password: '',
        //     type: '',
        //     phone_number: ''
        // };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(){
        fetch('/home/create', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                email: this.refs.email,
                password: this.refs.password,
                type: this.refs.type,
                phone_number: this.refs.phone_number
            }
        }).then(res => {
            return res.json();
        });
    }

    render(){
        return(
            <div id="createAccount" className="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog" style={{"width":"500px"}}>
                    <div className="modal-content">
                        <div className="modal-header" style={{"borderTop":"0px"}}>
                    <span className="popup-title">
                        CREATE NEW ACCOUNT
                    </span>
                            <span data-dismiss="modal" style={{"float":"right", "cursor": "pointer"}}>
                        <i className="glyphicon glyphicon-remove" style={{"color":"#255625"}}/>
                    </span>
                        </div>
                        <div className="modal-body" style={{"borderBottom":"0px"}}>
                            <form className="form-horizontal" >
                                <div className="form-group" style={{"display":"inline"}}>
                                    <label className="control-label" style={{"width":"30%", "textAlign":"left"}}>Email</label>
                                    <input className="form-control" type="text" style={{"width":"65%"}} ref="email" name="email" value={this.setState.email}/>
                                </div>
                                <div className="form-group" style={{"display":"inline"}}>
                                    <label className="control-label" style={{"width":"30%", "textAlign":"left"}}>Password</label>
                                    <input className="form-control" type="password" style={{"width":"65%"}} ref="password" name="password" value={this.setState.password} />
                                </div>
                                <div className="form-group" style={{"display":"inline"}}>
                                    <label className="control-label" style={{"width":"30%", "textAlign":"left"}}>Type</label>
                                    <input className="form-control" type="text" style={{"width":"65%"}} ref="type" name="type" value={this.setState.type}  />
                                </div>
                                <div className="form-group" style={{"display":"inline"}}>
                                    <label className="control-label" style={{"width":"30%", "textAlign":"left"}}>Phone Number</label>
                                    <input className="form-control" type="number" style={{"width":"65%"}} ref="phone_number" name="phone_number" value={this.setState.phone_number} />
                                </div>
                                <div className="form-group" style={{"display":"inline"}}>
                                    <input type="submit" className="btn btn-primary" value="SAVE" onClick={this.handleOnSubmit}/>
                                </div>
                            </form>
                        </div>
                        {/*<div className="modal-footer">*/}
                            {/*<button type="submit" className="btn btn-primary" >SAVE</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}