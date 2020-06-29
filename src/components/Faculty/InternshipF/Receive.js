import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Table } from 'reactstrap';

const Receive = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="secondary" onClick={toggle}>Computer Science-8A</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="assignment-modal">
      <ModalHeader toggle={toggle} close={closeBtn}>Computer Science-8A</ModalHeader>
      <ModalBody>
      
          <Table>
              <thead>
                  <tr>
                      <th>Received</th>
                      <th>Not Received</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>abc</td>
                      <td>xyz</td>
                  </tr>
                  <tr>
                      <td>def</td>
                      <td>uvw</td>
                  </tr>
                  <tr>
                    <td>ghi</td>
                    <td>rst</td>
                  </tr>
              </tbody>
          </Table>
          
          
          
    
      </ModalBody>
    </Modal>
  </div>
);
}

export default Receive;