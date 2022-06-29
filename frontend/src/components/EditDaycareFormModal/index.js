import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDaycareForm from './EditDaycareForm';

function DaycareFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>+</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditDaycareForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DaycareFormModal;
