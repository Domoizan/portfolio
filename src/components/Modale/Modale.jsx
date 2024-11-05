import { useState } from 'react';
import Modal from 'react-modal';
import Card from '../Card/Card';
import CardModale from '../CardModale/CardModale';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)



const Modale = ( info ) =>{
 
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //console.log(info)
  return (
    <>
      <Card Class='card' openModale={openModal} info={info}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <CardModale closeModal={closeModal} info={info}/>
      </Modal>
    </>
  );
}

export default Modale
