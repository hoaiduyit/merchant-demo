class AccountManagement extends React.Component{

    constructor(){
        super();
        this.openCreateDialog = this.openCreateDialog.bind(this);
    }

    openCreateDialog(){
        $("#createAccount").modal("show");
    }
    render() {
        $(document).ready(function(){
            $("#myTable").DataTable({
                "aLengthMenu": [[5, 10, -1], [5, 10, 'All']],
                "sAjaxSource": "/home",
                "sServerMethod": "GET",
                "sAjaxDataProp" : "",
                "aoColumns": [
                    {"mData": "email"},
                    {"mData": "phoneNumber"},
                    {"mData": "type"}
                ]
            })
        });

        return (
            <div>
                <div>
                    <ul className="page-stats">
                        <div className="summary" style={{"float":"right"}}>
                            <a id="addBtn" className="btn btn-info" >
                                <i className="fa fa-user-plus"/>
                                New
                            </a>
                        </div>
                    </ul>
                </div>
                <div style={{"width":"70%", "float":"right", "marginRight":"50px"}}>
                    <table id="myTable" cellSpacing="0" className="display nowrap">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

        );
    }
}