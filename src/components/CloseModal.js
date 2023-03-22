// import React, { Component } from 'react';
// import CloseModal from "./CloseModal";
// import './feedback.scss';
// import 'font-awesome/css/font-awesome.min.css';
// class Modal extends Component {
//     state = {
//         isModalVisible: false
//     }
//
//     toggleModal = () => {
//         this.setState({ isModalVisible: !this.state.isModalVisible });
//     }
//
//     render() {
//         const { isModalVisible } = this.state;
//
//         return (
//             <div >
//                 <button style={{outline: 'none'}}
//                         onClick={this.toggleModal}
//                         className='close'>
//                     <i className="fa fa-times"  ></i>
//                 </button>
//
//                 {isModalVisible && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             {/*<h2>Modal Title</h2>*/}
//                             {/*<button onClick={this.toggleModal}>Close Modal</button>*/}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }
//
// export default Modal;
