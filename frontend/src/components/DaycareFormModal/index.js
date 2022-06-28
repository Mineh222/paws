import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DaycareForm from './DaycareForm';

function DaycareFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>+</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DaycareForm />
        </Modal>
      )}
    </>
  );
}

export default DaycareFormModal;
