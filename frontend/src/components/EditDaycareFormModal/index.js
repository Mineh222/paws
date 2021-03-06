import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDaycareForm from './EditDaycareForm';

function EditDaycareFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="update-daycare-modal-button" onClick={() => setShowModal(true)}>Update your doggy daycare</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditDaycareForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditDaycareFormModal;
