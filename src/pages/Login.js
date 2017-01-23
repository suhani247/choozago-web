import React, { Component } from 'react';

export default  class Login extends Component {
  render () {
    return (
		        <div className='login-container container col-lg-4 col-lg-offset-4 col-xs-10 col-xs-offset-1'>
			        
			        <span className="icon icon-user login-icon" role="login indicator">
					</span>
					<div className="hr-divider">
					  <h3 className="hr-divider-content hr-divider-heading">
					    USER LOGIN
					  </h3>
					</div>

					<button className="btn btn-primary-outline fb-btn" type="button">
					  <span className="icon icon-facebook"></span>
					  <strong> Login with Facebook</strong>
					</button>

					<div className="hr-divider">
					  <h4 className="hr-divider-content hr-divider-heading">
					  ADMIN LOGIN
					  </h4>
					</div>

					<div className="admin-box">
					<div className="input-group m-a">
				    <span className="input-group-addon icon icon-users"></span>
				    <input type="text" className="form-control" id="adminId" placeholder="USERID"/>
				  	</div>

				  	<div className="input-group m-a">
				    <span className="input-group-addon icon icon-lock"></span>
				    <input type="password" className="form-control" id="adminPassword" placeholder="PASSWORD"/>
				  	</div>
					
					<button className="btn btn-success-outline admin-btn" type="button">
						Login as Admin
					</button>

	  				</div>

		        </div>
    )
  }
};
