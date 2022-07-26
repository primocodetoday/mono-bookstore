import * as React from 'react';
import { Col, ListGroup, Button } from 'react-bootstrap';
import { bookstoreAPI } from 'services/bookstoreAPI';
import { Header, BasketHeader, BasketItem } from 'components';
import { Link } from 'react-router-dom';
import { priceWithComma } from 'helpers/priceWithComma';
import { summaryBalance } from 'helpers/summaryBalance';
import { ROUTES } from 'routes';
import { BasketItemProps } from 'components/BasketItem/BasketItem';
import { IItem } from 'context/reducers';
import { useOrderContext } from 'hooks/useOrderContext';
import { useTranslation } from 'react-i18next';

export interface BasketItemType extends BasketItemProps {
  author: string;
  cover_url: string;
  currency: string;
  pages: number;
  price: number;
}

const Basket = () => {
  const { state } = useOrderContext();
  const { t } = useTranslation();

  const [basket, setBasket] = React.useState([] as BasketItemProps[]);

  // TODO refactor this
  React.useEffect(() => {
    const result = [];
    const items = state.order;

    const shot = (element: IItem): Promise<BasketItemType> => {
      return new Promise((resolve) =>
        resolve(
          bookstoreAPI
            .get(`book/${element._id}`)
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
        setBasket(() => {
          return [...data];
        });
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [state]);

  const basketList = React.useMemo(() => {
    const list = basket.length
      ? basket.map(({ title, quantity, price, _id }) => {
          return <BasketItem key={_id} title={title} quantity={quantity} price={price} _id={_id} />;
        })
      : null;
    return list;
  }, [basket]);

  return (
    <Col xs={12} md={10} lg={10} xl={8} className="px-1 mx-auto">
      <Header>{t('shared.basket')}</Header>
      {!basket.length ? (
        <p className="mb-4 text-uppercase font-weight-bolder text-center">
          {t('basket.no_items_1')} <Link to={ROUTES.SHOP}>{t('basket.no_item_2')}</Link>
        </p>
      ) : (
        <Col as="section" className="px-0 mb-5">
          <BasketHeader />
          <ListGroup as="ul">{basketList}</ListGroup>
          <div className="mt-2 flex-column d-flex justify-content-end align-items-end">
            <p className="h6">
              {t('basket.value')}{' '}
              <strong>{summaryBalance(basket) ? priceWithComma(summaryBalance(basket)) : 0} zł</strong>
            </p>
            <Button
              className="mt-2 text-uppercase font-weight-bolder ml-auto"
              variant="outline-warning"
              as={Link}
              to={ROUTES.ORDER}
            >
              {t('basket.order')}
            </Button>
          </div>
        </Col>
      )}
    </Col>
  );
};

export default Basket;
