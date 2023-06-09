import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as orderActions } from '../../Redux/reducers/orderReducer';
import { OrderWithProducts } from '../../types/OrderWithProducts';
import { OrderItem } from '../OrederItem';
import { Modal } from '../Modal';
import { getCurrentOrder } from '../../utils';
import deleteIcon from '../../images/delete.png';
import './OrdersList.scss';

type Props = {
  orders: OrderWithProducts[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  const dispatch = useDispatch();

  const handleDeleteOrder = (orderId: number) => {
    setActiveModal(true);
    setIdToDelete(orderId);
  };

  const orderToDelete = getCurrentOrder(orders, idToDelete);

  return (
    <>
      <table className="ordersList">
        <tbody>
          {orders.map(order => (
            <OrderItem
              key={order.id}
              order={order}
              onDelete={() => handleDeleteOrder(order.id)}
            />
          ))}
        </tbody>
      </table>
      {activeModal && (
        <Modal onClose={() => setActiveModal(false)}>
          <div className="modal__content-wrapper">
            <div className="item-to-delete">
              <h1 className="item-to-delete__order-name">
                {orderToDelete?.title}
              </h1>
            </div>
          </div>
          <div className="modal__button-container">
            <button
              className="modal__button modal__button--cancel"
              type="button"
              onClick={() => {
                setActiveModal(false);
              }}
            >
              cancel
            </button>
            <button
              className="modal__button modal__button--delete"
              type="button"
              onClick={() => {
                setActiveModal(false);
                dispatch(orderActions.remove(idToDelete));
              }}
            >
              <img
                src={deleteIcon}
                height="10px"
                alt="delete icon"
              />
              {' '}
              delete
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
