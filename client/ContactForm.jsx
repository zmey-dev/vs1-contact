import React from "react";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contact_name: "",
    phone: "",
    email_from: "",
    partner_name: "",
    subject: "plan_to_use",
    company_size: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // IP detection effect
  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch("https://ipinfo.io", {
          headers: { Accept: "application/json" },
        });
        const data = await response.json();

        if (data.country === "AU") {
          const privacyDocOz = document.getElementById("privacydoc-oz");
          const legalOz = document.getElementById("legal-oz");
          if (privacyDocOz) privacyDocOz.style.display = "block";
          if (legalOz) legalOz.style.display = "block";
        } else if (data.country === "ZA") {
          const privacyDocZa = document.getElementById("privacydoc-za");
          const legalZa = document.getElementById("legal-za");
          if (privacyDocZa) privacyDocZa.style.display = "block";
          if (legalZa) legalZa.style.display = "block";
        } else if (["USA", "MEX", "CAN"].includes(data.country)) {
          const privacyDocUsa = document.getElementById("privacydoc-usa");
          const legalUsa = document.getElementById("legal-usa");
          if (privacyDocUsa) privacyDocUsa.style.display = "block";
          if (legalUsa) legalUsa.style.display = "block";
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    checkLocation();
  }, []);

  return (
    <div className="vs1-contact-page">
      {/* Header Section */}
      <header id="header" className="py-3 w-100 fixed-top bg-white">
        <div className="container-fluid d-flex flex-row align-items-center">
          <h1 className="ps-5 m-0">
            <a href="/">
              <img src="/images/VS1logo.png" height="30" alt="VS1 Logo" />
            </a>
          </h1>

          <nav className="ms-auto">
            <ul className="list-unstyled d-flex align-items-center m-0 gap-2">
              <li className="me-4">
                <a href="/" className="text-decoration-none header-title">
                  About Us
                </a>
              </li>
              <li className="me-4">
                <a href="/" className="text-decoration-none header-title">
                  Apps
                </a>
              </li>
              <li className="me-4">
                <a href="/" className="text-decoration-none header-title">
                  Contact
                </a>
              </li>
              <li className="me-4">
                <a href="/" className="text-decoration-none header-title">
                  EDI
                </a>
              </li>
              <li className="me-4 dropdown">
                <a
                  href="/"
                  className="text-decoration-none header-title header-arrow dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="12"
                    viewBox="0 0 16 7"
                  >
                    <path
                      fill="#000"
                      hover="#F00"
                      d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
                    />
                  </svg>
                  MODULES
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ maxHeight: "90vh", overflow: "auto" }}
                >
                  <li className="dropdown-item">
                    <a
                      href="accounts.php"
                      className="text-decoration-none header-title"
                    >
                      Accounts
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="appointments.php"
                      className="text-decoration-none header-title"
                    >
                      Appointments
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="chatapp.php"
                      className="text-decoration-none header-title"
                    >
                      Chat App
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="construction.php"
                      className="text-decoration-none header-title"
                    >
                      Construction Jobs
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="crm.php"
                      className="text-decoration-none header-title"
                    >
                      CRM
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="departmentreporting.php"
                      className="text-decoration-none header-title"
                    >
                      Departments
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="edi.php"
                      className="text-decoration-none header-title"
                    >
                      EDI
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="financials.php"
                      className="text-decoration-none header-title"
                    >
                      Financials
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="fixedassets.php"
                      className="text-decoration-none header-title"
                    >
                      Fixed Assets
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="forex.php"
                      className="text-decoration-none header-title"
                    >
                      Forex
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="humanresources.php"
                      className="text-decoration-none header-title"
                    >
                      Human Resources
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="inventory.php"
                      className="text-decoration-none header-title"
                    >
                      Inventory
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="jobcosting.php"
                      className="text-decoration-none header-title"
                    >
                      Job Costing
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="leads.php"
                      className="text-decoration-none header-title"
                    >
                      Leads
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="manufacturing.php"
                      className="text-decoration-none header-title"
                    >
                      Manufacturing
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="manufacturing_jobs.php"
                      className="text-decoration-none header-title"
                    >
                      Manufacturing Jobs
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="mobile.php"
                      className="text-decoration-none header-title"
                    >
                      Mobile App
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="https://gusto.com/product#payroll"
                      className="text-decoration-none header-title"
                      target="_blank"
                    >
                      Payroll
                      <img src="images/payroll/gusto.png" height="20px" />{" "}
                      (Add-on)
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="productionplanning.php"
                      className="text-decoration-none header-title"
                    >
                      Production Planning
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="purchasing.php"
                      className="text-decoration-none header-title"
                    >
                      Purchasing
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="repairs.php"
                      className="text-decoration-none header-title"
                    >
                      Repairs
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="reporting.php"
                      className="text-decoration-none header-title"
                    >
                      Reporting
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="sales.php"
                      className="text-decoration-none header-title"
                    >
                      Sales
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="servicecalls.php"
                      className="text-decoration-none header-title"
                    >
                      Service Calls
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="stockadjustments.php"
                      className="text-decoration-none header-title"
                    >
                      Stock Adjustments
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="websiteintegration.php"
                      className="text-decoration-none header-title"
                    >
                      Website Integration
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="workshop.php"
                      className="text-decoration-none header-title"
                    >
                      Workshop Repairs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="me-4 dropdown">
                <a
                  href="/"
                  className="text-decoration-none header-title header-arrow dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="12"
                    viewBox="0 0 16 7"
                  >
                    <path
                      fill="#000"
                      hover="#F00"
                      d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"
                    />
                  </svg>
                  SEVICES
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ maxHeight: "90vh", overflow: "auto" }}
                >
                  <li className="dropdown-item">
                    <a
                      href="accounts.php"
                      className="text-decoration-none header-title"
                    >
                      REPORTING & ANALYTICS
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="appointments.php"
                      className="text-decoration-none header-title"
                    >
                      BLOG
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="chatapp.php"
                      className="text-decoration-none header-title"
                    >
                      WHY VS1?
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="construction.php"
                      className="text-decoration-none header-title"
                    >
                      FIND A PARTNER
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#00a3d3ba",
                    border: "1px solid #00a3d3",
                    boxShadow: "0 4px 4px 2px #a6a6a6",
                    borderRadius: "5px 15px",
                  }}
                >
                  <a
                    href="https://login.vs1cloud.com:3000/"
                    className="fw-bold header-button text-decoration-none"
                    rel="noopener noreferrer"
                  >
                    VS1 LogIn
                  </a>
                </button>
              </li>
              <li>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#00a3d3ba",
                    border: "1px solid #00a3d3",
                    boxShadow: "0 4px 4px 2px #a6a6a6",
                    borderRadius: "5px 15px",
                  }}
                >
                  <a
                    href="https://login.vs1cloud.com:3000/"
                    className="fw-bold header-button text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PORTAL LOGIN
                  </a>
                </button>
              </li>
              <li>
                <button
                  className="btn primary small purchase"
                  style={{
                    backgroundColor: "#017e84",
                    border: "1px solid #00a3d3",
                    boxShadow: "0 4px 4px 2px #a6a6a6",
                    borderRadius: "5px 15px",
                  }}
                >
                  <a
                    href="https://login.vs1cloud.com:3000/"
                    className="fw-bold header-button text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PURCHASE
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5">
        <div className="container-fluid px-5">
          <div className="row">
            {/* Form Column */}
            <div className="col-lg-8">
              <h2
                className="text-center mb-4 fs-1 fw-bold"
                style={{
                  color: "#00a3d3",
                  paddingTop: "70px",
                  fontFamily: "cursive",
                }}
              >
                Reach Out to Us
              </h2>
              <hr
                className="w-50 mx-auto"
                style={{ borderTop: "2px solid #00a3d3", marginBottom: "50px" }}
              />
              <form onSubmit={handleSubmit} className="pe-lg-5 fw-bold">
                {/* Name Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Name *</span>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="contact_name"
                        value={formData.contact_name}
                        onChange={handleChange}
                        className="form-control"
                        required
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Phone Number</span>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Email *</span>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        name="email_from"
                        value={formData.email_from}
                        onChange={handleChange}
                        className="form-control"
                        required
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Company</span>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        name="partner_name"
                        value={formData.partner_name}
                        onChange={handleChange}
                        className="form-control"
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Subject *</span>
                    </label>
                    <div className="col-sm-9">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-select"
                        style={{ borderRadius: "15px" }}
                      >
                        <option value="plan_to_use">
                          Use VS1 in my Company
                        </option>
                        <option value="plan_to_sell">
                          Offer VS1 services to other companies
                        </option>
                        <option value="plan_to_test_student">
                          I am a student
                        </option>
                        <option value="plan_to_test_teacher">
                          I am a teacher
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Company Size Field */}
                <div className="mb-4">
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>
                        Your Company Size
                      </span>
                    </label>
                    <div className="col-sm-9">
                      <select
                        name="company_size"
                        value={formData.company_size}
                        onChange={handleChange}
                        className="form-select"
                        required
                        style={{ borderRadius: "15px" }}
                      >
                        <option value="">Select size</option>
                        <option value="1-5">less than 5 employees</option>
                        <option value="5-20">5-20 employees</option>
                        <option value="20-50">20-50 employees</option>
                        <option value="50-250">50-250 employees</option>
                        <option value="250-over">
                          more than 250 employees
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <div className="row">
                    <label className="col-sm-3 col-form-label">
                      <span style={{ fontSize: "16px" }}>Question *</span>
                    </label>
                    <div className="col-sm-9">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        required
                        rows="5"
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row fw-bolder">
                  <div className="col-sm-auto" style={{ width: "200px" }}></div>
                  <div className="col-sm py-2" style={{ paddingLeft: "0px" }}>
                    <div className="form-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#000"
                          fillRule="evenodd"
                          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2zM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      We will handle your personal data as described in our{" "}
                      <a
                        href="downloads/VS1%20Privacy%20Oz.pdf"
                        style={{ color: " #00a3d3" }}
                        download=""
                      >
                        Privacy Policy
                      </a>
                      , to answer your question and provide information about
                      our products and services.
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        backgroundColor: "#017e84",
                        color: "white",
                        border: "1px solid #017e84",
                        boxShadow: "0 4px 7px 4px #a6a6a6",
                        borderRadius: "10px 30px",
                        width: "180px",
                        height: "60px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Cards Column */}
            <div className="col-lg-4">
              <div
                className="contact-card d-flex flex-column d-justify-content-center align-items-center mt-5 p-3"
                style={{
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #00a3d3",
                  boxShadow: "0 4px 7px 4px #a6a6a6",
                  borderRadius: "15px 50px",
                }}
              >
                <h3 className="h3 mb-3">Direct Contacts</h3>
                <p className="text-muted small">
                  Call or Schedule a video conference
                </p>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1497e0"
                      d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
                    />
                  </svg>
                  <a
                    href="tel:+18665579903"
                    className="text-decoration-none"
                    style={{ color: "#00a3d3" }}
                  >
                    +1 866 557 9903
                  </a>
                </div>
              </div>
              <div
                className="contact-card d-flex flex-column d-justify-content-center align-items-center mt-4 p-3"
                style={{
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #00a3d3",
                  boxShadow: "0 4px 7px 4px #a6a6a6",
                  borderRadius: "15px 50px",
                }}
              >
                <h3 className="h3 mb-2">Meet an Expert</h3>
                <img src="images/contact/handshake.png" loading="lazy" />
                <p
                  className="small m-0 text-600"
                  style={{ fontSize: "14px", color: "#00a3d3" }}
                >
                  To assess your project &amp; get a tailored Demo
                </p>
              </div>
              <div
                className="contact-card d-flex flex-column d-justify-content-center align-items-center mt-4 p-3"
                style={{
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #00a3d3",
                  boxShadow: "0 4px 7px 4px #a6a6a6",
                  borderRadius: "15px 50px",
                }}
              >
                <h3 className="h3 mb-2">Become a Partner</h3>
                <img src="images/contact/partner.png" loading="lazy" />
                <p
                  className="small m-0 text-600"
                  style={{ fontSize: "14px", color: "#00a3d3" }}
                >
                  Appointment with a partner manager
                </p>
              </div>
              <div
                className="contact-card d-flex flex-column d-justify-content-center align-items-center mt-4 p-3"
                style={{
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #00a3d3",
                  boxShadow: "0 4px 7px 4px #a6a6a6",
                  borderRadius: "15px 50px",
                }}
              >
                <h3 className="h3 mb-2">Find a VS1 Partner</h3>
                <img src="images/contact/support.png" loading="lazy" />
                <p
                  className="small m-0 text-600"
                  style={{ fontSize: "14px", color: "#00a3d3" }}
                >
                  To discuss your unique software and business needs
                </p>
              </div>
              <div
                className="contact-card d-flex flex-column d-justify-content-center align-items-center mt-4 p-3"
                style={{
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #00a3d3",
                  boxShadow: "0 4px 7px 4px #a6a6a6",
                  borderRadius: "15px 50px",
                }}
              >
                <h3 className="h3 mb-2">Support Requests</h3>
                <img src="images/contact/support.png" loading="lazy" />
                <p
                  className="small m-0 text-600"
                  style={{ fontSize: "14px", color: "#00a3d3" }}
                >
                  Need help? Have a question?
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="offices" className="bg-200">
          <div
            className="container-fluid d-flex flex-column d-justify-content-center align-items-center pt-4 pb-4"
            style={{
              fontSize: "16px",
              backgroundColor: "#f2f2f2",
              border: "1px solid #00a3d3",
              borderRadius: "15px 50px",
              textAlign: "center",
              boxShadow: "0 4px 7px 4px #a6a6a6",
              marginTop: "50px",
            }}
          >
            <h4
              className="fw-bold mb-4"
              style={{
                color: "#00a3d3",
                fontFamily: "cursive",
              }}
            >
              VS1 Offices
            </h4>
            <div className="d-flex flex-row justify-content-center align-items-center gap-5">
              <div>
                <div style={{ fontSize: "18px" }}>
                  <img
                    src="images/flags/us.png"
                    height="20"
                    className="me-2 align-baseline"
                    alt="US flag"
                    loading="lazy"
                  />
                  United States
                </div>
                <div>
                  <span
                    className="badge border border-delta text-delta"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SALES
                  </span>
                  <span
                    className="badge border border-primary text-o-color-1"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SERVICES
                  </span>
                </div>
                <div>108 Wild Basin Rd South</div>
                <div>Austin</div>
                <div>TX 78746</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M5 9.86a18.47 18.47 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355z"
                    />
                  </svg>
                  <a
                    className="text-decoration-none"
                    href="tel:+18665579903"
                    dir="ltr"
                  >
                    +1 866 557 9903
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "18px" }}>
                  <img
                    src="images/flags/united_kingdom.png"
                    height="20"
                    className="me-2 align-baseline"
                    alt="US flag"
                    loading="lazy"
                  />
                  United Kingdom
                </div>
                <div>
                  <span
                    className="badge border border-delta text-delta"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SALES
                  </span>
                  <span
                    className="badge border border-primary text-o-color-1"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SERVICES
                  </span>
                </div>
                <div>124 City Road</div>
                <div>London</div>
                <div>EC1V 2NX</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M5 9.86a18.47 18.47 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355z"
                    />
                  </svg>
                  <a
                    className="text-decoration-none"
                    href="tel:+18665579903"
                    dir="ltr"
                  >
                    +44 (0)23 476 9000
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "18px" }}>
                  <img
                    src="images/flags/au.png"
                    height="20"
                    className="me-2 align-baseline"
                    alt="US flag"
                    loading="lazy"
                  />
                  Australia
                </div>
                <div>
                  <span
                    className="badge border border-delta text-delta"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SALES
                  </span>
                  <span
                    className="badge border border-primary text-o-color-1"
                    style={{ backgroundColor: "#017e84" }}
                  >
                    SERVICES
                  </span>
                </div>
                <div>52 Castle Hill Drive Sth</div>
                <div>Gaven</div>
                <div>QLD 4211</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      d="M5 9.86a18.47 18.47 0 0 0 9.566 9.292l.68.303a3.5 3.5 0 0 0 4.33-1.247l.889-1.324a1 1 0 0 0-.203-1.335l-3.012-2.43a1 1 0 0 0-1.431.183l-.932 1.257a12.14 12.14 0 0 1-5.51-5.511l1.256-.932a1 1 0 0 0 .183-1.431l-2.43-3.012a1 1 0 0 0-1.335-.203l-1.333.894a3.5 3.5 0 0 0-1.237 4.355z"
                    />
                  </svg>
                  <a
                    className="text-decoration-none"
                    href="tel:+18665579903"
                    dir="ltr"
                  >
                    +61 (0)7 5581 2500
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="d-flex flex-wrap justify-content-center align-items-center py-3 py-4 border-top gap-4"
        style={{ backgroundColor: "#1d27261c" }}
      >
        <div style={{ height: "150px" }}>
          <h2
            className="fs-3 fw-bold"
            style={{
              color: "#00a3d3",
              fontFamily: "cursive",
            }}
          >
            Company
          </h2>
          <div>About</div>
          <div>Contact</div>
          <div>License Agreement</div>
        </div>
        <div style={{ height: "150px" }}>
          <h2
            className="fs-3 fw-bold"
            style={{
              color: "#00a3d3",
              fontFamily: "cursive",
            }}
          >
            Product
          </h2>
          <div>Modules</div>
          <div>Reporting & Analytics</div>
        </div>
        <div style={{ height: "150px" }}>
          <h2
            className="fs-3 fw-bold"
            style={{
              color: "#00a3d3",
              fontFamily: "cursive",
            }}
          >
            Resources
          </h2>
          <div>Apps</div>
          <div>Blog</div>
          <div>EDI</div>
          <div>Find a Partner</div>
        </div>
        <div style={{ height: "150px" }}>
          <img src="images/VS1logo.png" alt="VS1 Logo" width="200" />
          <div className="py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
                />
                <path d="m2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8" />
              </g>
            </svg>
          </div>

          <div>© VS1 Cloud. 2020. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
