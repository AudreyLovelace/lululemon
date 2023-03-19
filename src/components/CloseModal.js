import React, { Component } from 'react';
import CloseModal from "./CloseModal";
import './feedback.scss';
class Modal extends Component {
    state = {
        isModalVisible: false
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    render() {
        const { isModalVisible } = this.state;

        return (
            <div >
                <button onClick={this.toggleModal} className='close'>X</button>

                {isModalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                            {/*<h2>Modal Title</h2>*/}
                            {/*<button onClick={this.toggleModal}>Close Modal</button>*/}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Modal;
