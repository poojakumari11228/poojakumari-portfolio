// eslint-disable-next-line react/prop-types
const PopupAlert = ({ isOpen, message, onClose, title}) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{title}</h2>
                        </div>
                        <div className="modal-body">
                            <p>{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupAlert;
