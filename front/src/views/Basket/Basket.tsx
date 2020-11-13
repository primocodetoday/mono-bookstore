import React from 'react';
import { Col, ListGroup, Button } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContextProvider';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Header, BasketHeader, BasketItem } from 'components';
import { Link } from 'react-router-dom';
import { priceWithComma } from 'helpers/priceWithComma';
import { summaryBalance } from 'helpers/summaryBalance';
import { routes } from 'routes';
import { BasketItemProps } from 'components/BasketItem/BasketItem';
import { IItem } from 'context/reducers';

export interface BasketItemType extends BasketItemProps {
  author: string;
  cover_url: string;
  currency: string;
  pages: number;
  price: number;
}

const Basket: React.FC = () => {
  const { state } = React.useContext(OrderContext);

  const [basket, setBasket] = React.useState([] as BasketItemProps[]);

  // Huge state and book combiner
  React.useEffect(() => {
    const result = [];
    const items = state.order;

    const shot = (element: IItem): Promise<BasketItemType> => {
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
    <Col xs={12} md={10} lg={10} xl={8} className="px-1 mx-auto">
      <Header>Koszyk</Header>
      {!basket.length ? (
        <p className="mb-4 text-uppercase font-weight-bolder text-center">
          Nie dodałeś jeszcze nic do koszyka. Dodaj pozycje na stronie <Link to={routes.shop}>sklepu</Link>
        </p>
      ) : (
        <Col as="section" className="px-0 mb-5">
          <BasketHeader />
          <ListGroup as="ul">{basketList}</ListGroup>
          <div className="mt-2 flex-column d-flex justify-content-end align-items-end">
            <p className="h6">
              Wartość twoich zakupów to{' '}
              <strong>{summaryBalance(basket) ? priceWithComma(summaryBalance(basket)) : 0} zł</strong>
            </p>
            <Button
              className="mt-2 text-uppercase font-weight-bolder ml-auto"
              variant="outline-warning"
              as={Link}
              to={routes.order}
            >
              Zamawiam
            </Button>
          </div>
        </Col>
      )}
    </Col>
  );
};

export default Basket;
