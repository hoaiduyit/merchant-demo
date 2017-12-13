var App = React.createClass({
    render: function () {
        return(
            <div className="container">
                <LoginChild/>
            </div>
        );
    }
});
ReactDOM.render(<App/>, document.getElementById("app"));