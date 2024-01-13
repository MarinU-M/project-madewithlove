import "./CardModal.css";
import close from "../../images/close.svg";

function CardModal({ selectedCard, onClose }) {
  const { name, photo, link } = selectedCard;

  return (
    <div className="card-modal" onClick={onClose}>
      <div
        className="card-modal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="card-modal__close" type="button" onClick={onClose}>
          <img src={close} alt="close button" />
        </button>
        <img className="card-modal__image" src={photo} alt={name} />

        <div className="card-modal__description">
          <p className="card-modal__title">{name}</p>
          <span className="card-modal__shadow">
            <a
              className="card-modal__link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
