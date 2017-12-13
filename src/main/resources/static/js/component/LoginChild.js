var LoginChild = React.createClass({
   render: function(){
       return (
         <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <h1>Login</h1>
                </div>
                <div className="col-sm-6 col-sm-offset-3">
                    <form method="post" action="/home">
                        <div className="form-group">
                            <p>Email</p>
                            <input className="form-control" type="text" name="email"/>
                        </div>
                        <div className="form-group">
                            <p>Password</p>
                            <input className="form-control" type="password" name="password"/>
                        </div>
                        <div className="controls">
                            <hr/>
                            <div className="col-sm-6 col-sm-offset-3">
                                <input type="submit" value="Sign In"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         </div>
       );
   }
});