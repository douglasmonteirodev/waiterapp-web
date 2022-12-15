import React from "react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { OrderItemProps } from "../../pages/dashboard";
import styles from "./styles.module.scss";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishItem: (id: string) => void;
}

export default function ModalOrder({
  isOpen,
  onRequestClose,
  order,
  handleFinishItem,
}: ModalOrderProps) {
  const stylesModal = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      backgroundColor: "#1d1d2e",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={stylesModal}>
      <div className={styles.areaCloseBtn}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{
            background: "transparent",
            border: 0,
          }}
        >
          <FiX size={45} color="#f34748" />
        </button>
      </div>

      <div className={styles.container}>
        <h2>Detalhes do pedido</h2>
        <span className={styles.table}>
          Mesa: <strong> {order[0].order.table}</strong>
        </span>

        {order.map((item) => (
          <section key={item.id} className={styles.containerItem}>
            <span>
              {item.amount} - <strong>{item.product.name}</strong>
            </span>
            <span className={styles.description}>
              {item.product.description}
            </span>
          </section>
        ))}

        <button
          className={styles.btn}
          onClick={() => handleFinishItem(order[0].order_id)}
        >
          Concluir pedido
        </button>
      </div>
    </Modal>
  );
}
