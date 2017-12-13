class App extends React.Component{
    render () {
       return(
            <div>
                <Sidebar/>
                <AccountManagement />
                <AddAccount />
            </div>
       );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));