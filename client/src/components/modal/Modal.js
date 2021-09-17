import React from 'react';

import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <div className='opacity'
                 style={{
                     display: props.state.isShowing ? 'block' : 'none',
                     opacity: props.state.isShowing ? '1' : '0'
                 }}> </div>
            <div className="modal-wrapper"
                 style={{
                     transform: props.state.isShowing ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: props.state.isShowing ? '1' : '0'
                 }}>
                <div className="modal-header">
                    <h2>{props.state.modal_title}</h2>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        Are you sure want to delete ?
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="delete-yes" onClick={() => {
                        if(props.state.delete_type_for_modal === 'quiz') {
                            props.deleteQuiz(props.state.quizId)
                        } else if(props.state.delete_type_for_modal === 'question'){
                            props.deleteQuestion(props.state.questionId)
                        }
                    }}>Yes</button>
                    <button type="button" className="delete-no" onClick={() => {
                        props.closeModalHandler();
                    }}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
