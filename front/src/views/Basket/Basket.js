import React from 'react';
import { Col, Button, ListGroup } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Header, BasketHeader, BasketItem } from 'components';
import { Link } from 'react-router-dom';
import './styles/basketStyles.css';
import { priceWithComma } from 'helpers/priceWithComma';
import { summaryBalance } from 'helpers/summaryBalance';

export const Basket = () => {
  const { state } = React.useContext(OrderContext);
  const [basket, setBasket] = React.useState([]);

  // Huge state and book combiner
  React.useEffect(() => {
    const result = [];
    const items = state.order;

    const shot = (element) => {
      return new Promise((resolve) =>
        resolve(
          bookstoreAPI
            .get(`book/${element.id}`)
            .then((response) => {
              const { data } = response.data;
              const { quantity } = element;
              return { ...data, quantity };
            })
            // eslint-disable-next-line no-console
            .catch((err) => console.error(err)),
        ),
      );
    };
    const arrayFill = Promise.all(items.map(shot)).then((data) => {
      result.push(data);
      return Promise.all(data.map(shot));
    });
    arrayFill
      .then((data) => {
        setBasket(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [state]);

  const basketList = basket.length
    ? basket.map(({ title, quantity, price, id }) => {
        return <BasketItem key={id} title={title} quantity={quantity} price={price} id={id} />;
      })
    : null;

  return (
    <>
      <Header>Koszyk</Header>
      {!basket.length && (
        <p className="mb-4 text-center">
          Nie dodałeś jeszcze nic do koszyka. Dodaj pozycje na stronie <Link to="/shop/1">sklepu</Link>
        </p>
      )}
      <Col>
        <BasketHeader />
        <ListGroup as="ul">{basketList}</ListGroup>
        <div className="mt-3 d-flex justify-content-end align-items-center">
          <p className="h6">
            Wartość twoich zakupów to{' '}
            <strong>{summaryBalance(basket) ? priceWithComma(summaryBalance(basket)) : 0} zł</strong>
          </p>
          {basket.length ? (
            <Button className="ml-4 font-weight-bold text-light" variant="warning" as={Link} to="/order">
              Zamawiam
            </Button>
          ) : null}
        </div>
      </Col>
    </>
  );
};
