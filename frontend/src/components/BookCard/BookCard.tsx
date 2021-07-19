import * as React from 'react';
import { Button, Row, Col, Media, Card } from 'react-bootstrap';
import { SnackBar } from 'components/SnackBar/SnackBar';
import { addBook } from 'context/actions';
import { Book } from 'views/Bookstore/Bookstore';
import { useOrderContext } from 'hooks/useOrderContext';
import { useTranslation } from 'react-i18next';

export type BookCardProps = {
  book: Book;
};

export const BookCard = ({ book }: BookCardProps) => {
  const { dispatch } = useOrderContext();
  const [isAdded, setIsAdded] = React.useState(false);
  const { t } = useTranslation();
  const { id, title, cover_url: coverUrl, author, pages } = book;

  return (
    <Card className=" p-2 mx-auto d-flex align-items-stretch h-100">
      <Row xs={1} sm={2} className="px-2 ">
        <Col sm={5}>
          <Media>
            <img className="img-fluid rounded border mx-auto mb-3" src={coverUrl} alt={title} />
          </Media>
        </Col>
        <Col sm={7} className="d-flex flex-column justify-content-between">
          <div>
            <p className="h6 mx-auto mb-2 text-uppercase">{book.title}</p>
          </div>
          <p>
            {t('item.authors')}: <strong>{author}</strong>
          </p>
          <p>
            {t('item.page_number')}: <strong>{pages}</strong>
          </p>
        </Col>
      </Row>
      <Button
        className="ml-auto mt-auto mb-2 mr-2 text-uppercase font-weight-bolder"
        variant="outline-warning"
        onClick={() => {
          dispatch(addBook(id));
          setIsAdded(true);
        }}
      >
        {t('item.add_to_basket')}
      </Button>
      <SnackBar toast={isAdded} setToast={setIsAdded} color="success">
        {t('item.item_has_been_added')}
      </SnackBar>
    </Card>
  );
};
