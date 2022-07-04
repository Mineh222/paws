import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DaycareForm from './DaycareForm';

function DaycareFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="add-daycare-button" onClick={() => setShowModal(true)}>Add Your Doggy Daycare</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DaycareForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DaycareFormModal;
