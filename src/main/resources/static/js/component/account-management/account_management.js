class AccountManagement extends React.Component {

    constructor() {
        super();
        this.state = {
            account: []
        }
    }

    componentDidMount() {
        fetch('/home').then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                account: [data]
            });
        })
    }

    handleOnSubmit(save) {
        fetch('/home/create', {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify({
                "email": $("#email").val(),
                "type": $("#type").val(),
                "phoneNumber": $("#phoneNumber").val()
            }),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(res => {
            return res.json();
        });
        save();
    }

    createCustomModalFooter = (closeModal, save) => {
        return (
            <InsertModalFooter
                className="custom-footer"
                saveBtnContextual="btn-success"
                saveBtnClass="custom-save-btn"
                saveBtnText="Save New"
                onSave={() => this.handleOnSubmit(save)}/>
        );
    };

    createCustomModalBody = (columns, validateState, ignoreEditable) => {
        return (
            <MyCustomBody columns={columns}
                          validateState={validateState}
                          ignoreEditable={ignoreEditable}/>
        );
    };

    render() {
        let options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.state.account.length
            }],
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text,
            insertModalFooter: this.createCustomModalFooter,
            insertModalBody: this.createCustomModalBody
        };

        return (
            <div>
                <div style={{"width": "70%", "float": "right", "marginRight": "50px"}}>
                    <BootstrapTable options={options} data={this.state.account[0]} search pagination insertRow>
                        <TableHeaderColumn dataField='email' isKey={true} dataSort>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='phoneNumber' dataSort>Phone Number</TableHeaderColumn>
                        <TableHeaderColumn dataField='type' dataSort>Type</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>

        );
    }
}

class MyCustomBody extends React.Component {

    getFieldValue() {
        const newRow = {};
        this.props.columns.forEach((column, i) => {
            newRow[column.field] = this.refs[column.field].value;
        }, this);
        return newRow;
    }

    render() {
        const {columns, validateState} = this.props;
        return (
            <div className='modal-body'>
                <div>
                    {
                        this.props.columns.map((column, i) => {
                            const {
                                field,
                                name,
                            } = column;
                            const error = validateState[field] ?
                                (<span className='help-block bg-danger'>{validateState[field]}</span>) : null;
                            return (
                                <div>
                                    <div className='form-group' key={field}>
                                        <label>{name}</label>
                                        <input id={field} ref={field} name={field} type='text'
                                               className="form-control editor edit-text"/>
                                        {error}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}