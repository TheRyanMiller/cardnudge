import React, { useState, useEffect } from 'react';

const Modal = props => {

  useEffect(() => {
    console.log("Fetch all mailing data for this recipient");
  });

  return (
    <div id={props.modalId} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {props.body}
            </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;
