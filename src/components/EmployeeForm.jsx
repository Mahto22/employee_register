import React, { useState } from "react";
import "./EmployeeForm.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { toast } from 'react-toastify';

function EmployeeForm() {
  const url = 'https://sweede.app/DeliveryBoy/Add-Employee/';

  const [formData, setFormData] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log(formData);
    await axios.post(url,{
      id: formData.id,
    FirstName: formData.FirstName,
    LastName: formData.LastName,
    DOB: formData.DOB,
    Study: formData.Study,
    StartDate: formData.StartDate,
    EndDate: formData.EndDate,
    CurrentSalary: formData.CurrentSalary,
    Description: formData.Description
    }).then(response=>{
      if (response.status === 201){
        //alert("successfully added");
        // Display success notification
    toast.success('Successfully Added!', {
      position: 'top-right',
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
      } else {
        console.log("Issue in adding");
      }
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <div className="main-content">
      <h2 className="main-heading">Employee Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="FirstName">
              <Form.Label className="text-color">First Name*</Form.Label>
              <Form.Control
                type="text"
                name="FirstName"
                className="input-box"
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="LastName">
              <Form.Label className="text-color">Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="LastName"
                className="input-box"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="DOB">
              <Form.Label className="text-color">DOB</Form.Label>
              <Form.Control
                type="date"
                name="DOB"
                className="input-box"
                value={formData.DOB}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="Study">
              <Form.Label className="text-color">Study</Form.Label>
              <Form.Select
                name="Study"
                className="select-box"
                value={formData.Study}
                onChange={handleChange}
                required
              >
                <option value="">Select Study</option>
                <option value="B.E.">B.E.</option>
                <option value="MTech">MTech</option>
                <option value="Science">Science</option>
                <option value="B.Com">B.Com</option>
                <option value="Doctor">Doctor</option>
                <option value="Arts">Arts</option>
              
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="StartDate">
              <Form.Label className="text-color">Start Date</Form.Label>
              <Form.Control
                type="date"
                name="StartDate"
                className="input-box"
                value={formData.StartDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="EndDate">
              <Form.Label className="text-color">End Date</Form.Label>
              <Form.Control
                type="date"
                name="EndDate"
                className="input-box"
                value={formData.EndDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="CurrentSalary">
              <Form.Label className="text-color">Current Salary</Form.Label>
              <Form.Control
                type="text"
                name="CurrentSalary"
                className="input-box"
                value={formData.CurrentSalary}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="Description">
              <Form.Label className="text-color">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="Description"
                className="input-box"
                value={formData.Description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="secondary" type="button" className="button-layout cancel-btn">
              Cancel
            </Button>
          </Col>

          <Col>
            <Button variant="primary" type="submit" className="button-layout submit-btn">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default EmployeeForm;
