import React from 'react';
import Table from '../../components/dashboard/Table';
import { Modal, Button } from 'react-bootstrap';
import FormAdd from './FormAdd';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false
        }
    }
    render() {
        return (
            <div>
                <Table showAdd={() => this.setState({ showEdit: true })} />
                <FormAdd show={this.state.showEdit} onHide={() => this.setState({ showEdit: false })} onClose={() => this.setState({ showEdit: false })} />
                {/* <Modal show={this.state.showEdit} onHide={() => this.setState({ showEdit: false })} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showEdit: false })}>Close</Button>
                        <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>
                </Modal> */}
            </div>

        )
    }
}

export default Admin;