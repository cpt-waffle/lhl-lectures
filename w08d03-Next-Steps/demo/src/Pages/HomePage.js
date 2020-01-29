import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



export default function HomePage(props) {

  const [open, toggleModal] = useState(false);
  return (
    <div>
      <h2>
        This is my home page !!!!!

        Check out this Crazy Modal;
        <button onClick={() => toggleModal(prev => !prev)}>OPEN ME</button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => toggleModal(prev => !prev)}
      >
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
      </h2>
    </div>
  )
}