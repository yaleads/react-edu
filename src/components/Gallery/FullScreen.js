import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalBody } from 'reactstrap';
import Image from '../shared/Image'

const FullScreen =( { location: { state }, history } ) => {

  if (state) {
    const image = state.image;

    let goBack = e => {
      e.stopPropagation();
      history.goBack();
    };

    return (
      <div>
        {ReactDOM.createPortal(
          <div>
            <Modal isOpen={true} toggle={goBack} className={'modal-lg'}>
              <ModalBody>
                <Image src={image.url} width={'100%'} alt={image.title}/>
                <p>{image.title}</p>
              </ModalBody>
            </Modal>
          </div>,
          document.getElementById('fullScreenGalleryContainer')
        )}
      </div>
    )
  }
  else
  {
    return null
  }
};

export default FullScreen;