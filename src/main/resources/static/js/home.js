class App extends React.Component{
    render () {
       return(
            <div>
                <Sidebar/>
                <AccountManagement />
            </div>
       );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));