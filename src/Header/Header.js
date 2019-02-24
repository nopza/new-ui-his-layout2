import React, { Component } from 'react';
import '../css/test.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/home"> SUTH HIS </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-home"></i> <b>Home</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">


                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <span className="text-uppercase text-white">เวชระเบียน</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/register"><i class="fas fa-user"></i> ทะเบียนผู้ป่วย</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/sendpatient"><i class="fas fa-user-injured"></i> ส่งตรวจผู้ป่วย</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white">OPD</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/examination"><i class="fas fa-user-nurse"></i> งานหน้าห้องตรวจ</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/examdoctor"><i class="fas fa-user-md"></i> ห้องตรวจแพทย์</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/dispensing"><i class="fas fa-capsules"></i> หน้าห้องจ่ายยา</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white"> Radiology</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/xray"><i class="fas fa-x-ray"></i> งานหน้าห้อง X-ray</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white">Finance</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/finance"><i class="fas fa-coins"></i> งานห้องการเงิน</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4">
                        <span className="text-uppercase text-white">Appointment</span>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="/manage"><i class="far fa-calendar-alt"></i> Manage Session</a>
                          </li>
                        </ul>
                      </div>



                    </div>
                  </div>


                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="far fa-folder-open"></i> <b>Master</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">

                    </div>
                  </div>


                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-file-alt"></i> <b>Report</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">

                    </div>
                  </div>


                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-cog"></i> <b>Setting</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="container">
                    <div className="row">

                    </div>
                  </div>


                </div>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i> Search</button>
            </form>
            &nbsp;
            <a href="/"><button className="btn btn-danger my-2 my-sm-0 "><i class="fas fa-sign-out-alt"></i> Logout</button></a>
          </div>


        </nav>
      </div>
    );
  }
}

export default Header;