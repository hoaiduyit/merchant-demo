class AccountManagement extends React.Component{

    constructor(){
        super();
        this.state = {
            account: []
        }
        // this.openCreateDialog = this.openCreateDialog.bind(this);
    }

    // openCreateDialog(){
    //     $("#createAccount").modal("show");
    // }

    componentDidMount() {
        fetch('/home').then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                account: [data]
            })
        })
    }

    handleOnSubmit(save){
        save();
    }

    getFieldValue() {
        const newRow = {};
        this.props.columns.forEach((column, i) => {
            newRow[column.field] = this.refs[column.field].value;
        }, this);
        return newRow;
    }

    createCustomModalFooter = (closeModal, save) =>{
        return(
            <InsertModalFooter
                className="custom-footer"
                saveBtnContextual="btn-success"
                saveBtnClass="custom-save-btn"
                saveBtnText="Save New"
                onSave={ () => this.handleOnSubmit(save) } />
        );
    };

    // createCustomModalBody (){
    //     return(
    //         <div className="modal-body">
    //             <div className="form-group">
    //                 <label>Email</label>
    //                 <input type="text" placeholder="Email" className="form-control editor edit-text"/>
    //             </div>
    //             <div className="form-group">
    //                 <label>Password</label>
    //                 <input type="password" placeholder="Password" className="form-control editor edit-text"/>
    //             </div>
    //             <div className="form-group">
    //                 <label>Type</label>
    //                 <input type="text" placeholder="Type" className="form-control editor edit-text"/>
    //             </div>
    //             <div className="form-group">
    //                 <label>Phone Number</label>
    //                 <input type="number" placeholder="Phone Number" className="form-control editor edit-text"/>
    //             </div>
    //         </div>
    //     );
    // }
    createCustomModalBody = (columns, validateState, ignoreEditable) => {
        return (
            <MyCustomBody columns={ columns }
                          validateState={ validateState }
                          ignoreEditable={ ignoreEditable }/>
        );
    }

    render() {
        // $(document).ready(function(){
        //     $("#myTable").DataTable({
        //         "aLengthMenu": [[5, 10, -1], [5, 10, 'All']],
        //         "sAjaxSource": "/home",
        //         "sServerMethod": "GET",
        //         "sAjaxDataProp" : "",
        //         "aoColumns": [
        //             {"mData": "email"},
        //             {"mData": "phoneNumber"},
        //             {"mData": "type"}
        //         ]
        //     })
        // });

        let options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.state.account.length
            } ],
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            insertModalFooter: this.createCustomModalFooter,
            insertModalBody: this.createCustomModalBody
        };

        return (
            <div>
                {/*<div>*/}
                    {/*<ul className="page-stats">*/}
                        {/*<div className="summary" style={{"float":"right"}}>*/}
                            {/*<a id="addBtn" className="btn btn-info" >*/}
                                {/*<i className="fa fa-user-plus"/>*/}
                                {/*New*/}
                            {/*</a>*/}
                        {/*</div>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <div style={{"width":"70%", "float":"right", "marginRight":"50px"}}>
                    {/*<table id="myTable" cellSpacing="0" className="display nowrap">*/}
                        {/*<thead>*/}
                            {/*<tr>*/}
                                {/*<th>Email</th>*/}
                                {/*<th>Phone Number</th>*/}
                                {/*<th>Type</th>*/}
                            {/*</tr>*/}
                        {/*</thead>*/}
                    {/*</table>*/}
                    {
                        this.state.account.map((dynamicData, Key) => {
                            let key = Object.keys(dynamicData);
                            return key.map(data => {
                                return(
                                    <BootstrapTable options={options} data={dynamicData} search pagination insertRow>
                                        <TableHeaderColumn dataField='email' isKey={true} dataSort>Email</TableHeaderColumn>
                                        <TableHeaderColumn dataField='phoneNumber' dataSort>Phone Number</TableHeaderColumn>
                                        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                                    </BootstrapTable>
                                );
                            })
                        })
                    }
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
        const { columns, validateState } = this.props;
        return (
            <div className='modal-body'>
                <h2 style={ { color: 'red' } }>Custom body</h2>
                <div>
                    {
                        this.props.columns.map((column, i) => {
                            const {
                                editable,
                                format,
                                field,
                                name,
                                hiddenOnInsert
                            } = column;

                            if (hiddenOnInsert) {
                                // when you want same auto generate value
                                // and not allow edit, for example ID field
                                return null;
                            }
                            const error = validateState[field] ?
                                (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
                                null;
                            return (
                                <div className='form-group' key={ field }>
                                    <label>{ name }</label>
                                    <input ref={ field } type='text' defaultValue={ '' } />
                                    { error }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}