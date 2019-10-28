import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FormAdd = props => {
    return (
        <Modal show={props.show} onHide={props.onHide} >
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-add">
                    <form>
                        <div className="title">Add new product</div>
                        <div className="form-group">
                            <label >Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" name="name" />
                            <div className="form-group">
                                <label >Color</label>
                                <select className="form-control" id="color" name="color">
                                    <option value="White/ Converse Black/White">White/ Converse Black/White</option>
                                    <option value="Converse Black/Mason/White">Converse Black/Mason/White</option>
                                    <option value="White/Black/White">White/Black/White</option>
                                    <option value="Coastal Pink/Light Redwood">Coastal Pink/Light Redwood</option>
                                    <option value="Optical White">Optical White</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label >Size</label>
                                <select className="form-control" id="size" name="size">
                                    <option value="3.5US - 6.5US Men (5.5US-8.5US Women)">3.5US - 6.5US Men (5.5US-8.5US Women)</option>
                                    <option value="4.5US-5.5US, 7.5US-8.5US">4.5US-5.5US, 7.5US-8.5US</option>
                                    <option value="3.5US - 9US Men (5.5US-11.US Women)">3.5US - 9US Men (5.5US-11.US Women)</option>
                                    <option value="3.5US - 6.5US">3.5US - 6.5US</option>
                                    <option value="3US - 10US">3US - 10US</option>
                                </select>
                            </div>
                            <div
                                className="form-group">
                                <label >Gender</label>
                                <select className="form-control" id="gender" name="gender">
                                    <option value="Women">Women</option>
                                    <option value="Men">Men</option>
                                    <option value="Womenn &amp; Men">Womenn &amp; Men</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >Material</label>
                                <select className="form-control" id="material" name="material">
                                    <option value="Canvas">Canvas</option>
                                    <option value="Leather">Leather</option>
                                    <option value="Poly Denim">Poly Denim</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label >Price</label>
                                <input className="form-control" id="pirce" type="number" placeholder="Price" name="pirce" />
                            </div>
                            <div className="form-group">
                                <label >Images</label>
                                <input className="form-control" id="image" type="file" name="image" placeholder="chose file" />
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>Close</Button>
                <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormAdd;