var Sidebar = React.createClass({
   render: function () {
       return(
           <div className="sidebar-left">
               <div className="sidebar-container">
                   <div className="sidebar-header"></div>
                   <nav className="menu">
                       <div className="nav-side-menu">
                           <div className="brand">Brand Logo</div><i data-toggle="collapse" data-target="#menu-content" className="fa fa-bars fa-2x toggle-btn"/>
                           <div className="menu-list">
                               <ul id="menu-content" className="menu-content collapse out">
                                   <li><a href="/home"><i className="fa fa-dashboard fa-lg"/>Dashboard</a></li>
                                   <li data-toggle="collapse" className="collapsed">
                                       <a href="#"><i className="fa fa-gift fa-lg"/>Manage
                                           <span className="arrow"/>
                                       </a>
                                   </li>
                                   <ul id="products" className="sub-menu collapse">
                                       <li><a href="#">User management</a></li>
                                   </ul>
                                   <li data-toggle="collapse" className="collapsed">
                                       <a href="#"><i className="fa fa-user fa-lg"/>Profile
                                           <span className="arrow"/>
                                       </a>
                                   </li>
                                   <ul id="profile" className="sub-menu collapse">
                                       <li><a href="/superadmin/update-profile">Update profile</a></li>
                                       <li><a href="/superadmin/change-pass">Change password</a></li>
                                       <li><a href="/logoutSuperadmin">Logout</a></li>
                                   </ul>
                               </ul>
                           </div>
                       </div>
                   </nav>
               </div>
           </div>
       );
   } 
});