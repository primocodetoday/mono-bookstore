import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import { basketArrayGrid as grid } from 'constants/basketArrayGrid';
import { priceWithComma } from 'helpers/priceWithComma';
import { OrderContext } from 'context/OrderContext';
import { actionType } from 'reducers';

export const BasketItem = ({ title, quantity, price, id }) => {
  const { dispatch } = React.useContext(OrderContext);

  return (
    <ListGroup.Item variant="secondary" as="li" className="mb-3 px-3 rounded border">
      <Row className=" align-items-center">
        <Col xs={grid.col1.xs} sm={grid.col1.sm} md={grid.col1.md}>
          <p className="h6 text-left">{title}</p>
        </Col>
        <Col xs={grid.col2.xs} sm={grid.col2.sm} md={grid.col2.md}>
          <p className="h6 text-center">{quantity}</p>
        </Col>
        <Col xs={grid.col3.xs} sm={grid.col3.sm} md={grid.col3.md}>
          <p className="h6 text-center">{priceWithComma(price)} zł</p>
        </Col>
        <Col xs={grid.col4.xs} sm={grid.col4.sm} md={grid.col4.md} className=" d-flex justify-content-center">
          <Button
            className="text-center"
            variant="danger"
            size="sm"
            onClick={() => dispatch({ type: actionType.removeBook, payload: { id } })}
          >
            <i className="fas fa-times " />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

BasketItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
