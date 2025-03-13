import "./NameModal.css"

const NameModal=({showModal,closeModal,showLoading})=>{
    

    if (showModal){
        return (
            <div className="modal-component">


{!showLoading && <div className="info-container">
            <div className="description">
                <h3>Software Developer</h3>
                <h3>Mathematician</h3>
            </div>
            <div className="name-and-action-container">
            <div className="name-container">
                <h4 className="item-1">Name : </h4>
                <h4 className="item-2">_ </h4>
                <h4 className="first-name item-3">Ansuman </h4>
                <h4 className="second-name item-4"> Samal</h4>
            </div>
            

            <div className="action-buttons">
                    <span className="action-button" id="ok-continue" onClick={closeModal}> &lt; Enter &gt; OK </span>
            </div>
            </div>
            </div>}
            {showLoading &&
            <div className="close-modal">
                <div className="loader">
                    <div className="progress-bar">
                    
                    </div>
                </div>

            </div>
            }
            
            </div>)
    }
     
}


export default NameModal;
