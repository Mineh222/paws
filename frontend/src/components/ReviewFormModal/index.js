import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="leave-review-modal-button" onClick={() => setShowModal(true)}>
        <div className="review-button">
          <StarOutlineIcon />
          <div>Write a review</div>
        </div>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;
