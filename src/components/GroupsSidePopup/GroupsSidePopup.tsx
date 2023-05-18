import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as selectedOrderActions } from '../../Redux/reducers/selectedOrderReduser';
import { RootState } from '../../Redux/store';
import { OrderWithProducts } from '../../types';
import { GroupsSideContent } from '../GroupsSideContent';
import './GroupsSidePopup.scss';

type Props = {
  order: OrderWithProducts | undefined;
};

export const GroupsSidePopup: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector<RootState>(state => state.selectedOrder);
  const currentProducts = order?.products;

  useEffect(() => {
    const keyDownClose = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(selectedOrderActions.unselect());
      }
    };

    window.addEventListener('keydown', keyDownClose);

    return () => {
      window.removeEventListener('keydown', keyDownClose);
    };
  }, [selectedOrder]);

  return (
    <div className="modal-group">
      <button
        className="modal-group__close-btn"
        type="button"
        onClick={() => dispatch(selectedOrderActions.unselect())}
      >
        <img src="./images/close-icon.svg" width="15px" alt="close icon" />
      </button>
      <div className="modal-group__content">
        <div className="modal-group__header">
          <h1 className="modal-group__modal-title">{order?.title}</h1>
          <div className="modal-group__add-container">
            <button className="modal-group__add-button" type="button">
              +
            </button>
            <span className="modal-group__add-text">Add product</span>
          </div>
        </div>
        <div className="modal-group__list">
          {currentProducts?.map(product => (
            <GroupsSideContent
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
