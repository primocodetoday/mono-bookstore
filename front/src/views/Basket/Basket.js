﻿import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/basketStyles.css';

export const Basket = () => {
  const { state, dispatch } = React.useContext(OrderContext);
  const [basket, setBasket] = React.useState([]);

  // TODO Refactor this
  React.useEffect(() => {
    setBasket([]);
    state.order.forEach((element) => {
      bookstoreAPI
        .get(`book/${element.id}`)
        .then((response) => {
          const { data } = response.data;
          const { quantity } = element;
          setBasket((prevState) => [...prevState, { ...data, quantity }]);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err));
    });
  }, [state]);

  const basketList = basket.length
    ? basket.map(({ title, quantity, price, id }) => {
        return (
          <CSSTransition key={id} timeout={500} classNames="item">
            <Row className="mb-3 pt-3 border-bottom border-top border-dark">
              <Col xs={9} className="h4">
                <p>{title}</p>
              </Col>
              <Col xs={1}>
                <p>{quantity}</p>
              </Col>
              <Col xs={1}>
                <p>{price}</p>
              </Col>
              <Col xs={1}>
                <Button
                  variant="light"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_BOOK', payload: { id } })
                  }
                >
                  <i className="fas fa-times" />
                </Button>
              </Col>
            </Row>
          </CSSTransition>
        );
      })
    : null;

  // TODO Separate this and splice, write function who add coma
  const sum = basket.length
    ? basket
        .reduce((prev, acc) => {
          return prev + acc.price * acc.quantity;
        }, 0)
        .toString()
    : 0;

  return (
    <>
      <h4 className="mb-5">Koszyk</h4>
      <Row className="mb-0 pt-0 ">
        <Col xs={9}>
          <p className="text-uppercase h6">tytuł</p>
        </Col>
        <Col xs={1} className="text-uppercase h6">
          <p>ilość</p>
        </Col>
        <Col xs={1} className="text-uppercase h6">
          <p>cena</p>
        </Col>
        <Col xs={1} className="text-uppercase h6">
          <p>usuń</p>
        </Col>
      </Row>
      <TransitionGroup>{basketList}</TransitionGroup>
      <div className="d-flex justify-content-end align-items-center">
        <p className="">
          Wartość twoich zakupów to <strong>{sum} zł</strong>
        </p>
        {basket.length ? (
          <Button className="ml-4" variant="warning" as={Link} to="/order">
            Zamawiam
          </Button>
        ) : null}
      </div>
    </>
  );
};
