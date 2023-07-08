export default function Modal(props) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-content">
            <div className="close-icon">
              <button
                className="close from-middle"
                data-animation="spread"
                onClick={props.toggle}
              >
                <span />
              </button>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
