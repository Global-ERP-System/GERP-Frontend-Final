import React, { useState } from 'react';
import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap';

const MainModal2 =(props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);
    return (
        <div>
        <input onClick={toggle} className="btn btn-danger mx-3" type='button' value="Block" />
        <Modal
        isOpen={open} toggle={toggle}
      >
        <ModalBody>
          Are you sure?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            No
          </Button>
          <Button color="primary" onClick={toggle}>Yes</Button>
        </ModalFooter>
      </Modal>
      </div>
    )
}

export default MainModal2;