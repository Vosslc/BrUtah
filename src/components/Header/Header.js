import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      
      <div id="dashboardPage">
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">BreUtah</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/Dashboard">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="createpost">Create A Post</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
      </div>
    )
  }
}

export default Header










// import React from 'react'
// import logo from '../assets/Instamilligram.svg'
// import { connect } from 'react-redux'
// import { updateUserInfo } from '../ducks/reducer'
// import axios from 'axios'
// import Swal from 'sweetalert2'

// const Header = props => {
//   const logout = () => {
//     axios.delete('/auth/logout').then(res => {
//       Swal.fire(res.data.message)
//       props.updateUserInfo({
//         email: '',
//         name: '',
//         user_id: '',
//         profile_img: ''
//       })
//     })
//   }
//   return (
//     <header>
//       {props.profile_img && <img src={props.profile_img} alt="" />}
//       {/* <img src={logo} alt="logo" /> */}
//       {props.name && <button onClick={logout}>Logout</button>}
//     </header>
//   )
// }

// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(
//   mapStateToProps,
//   { updateUserInfo }
// )(Header)
