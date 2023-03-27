import React, { useMemo, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserData } from './UserData';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CardPost = ({ posts }) => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const slicedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return posts.slice(startIndex, endIndex);
  }, [currentPage, posts]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <>
      {
        <>
          <Container>
            <Button className='m-1' disabled={currentPage === 1} onClick={handlePrevPage}>
              {<IoIosArrowBack size={25} />}
            </Button>
            <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
              {<IoIosArrowForward size={25} />}
            </Button>
          </Container>
          <Container>
            {slicedItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <Card.Body>
                  <Card.Title>{formatText(item.title)}</Card.Title>
                  <Card.Subtitle className="mb-2 ">
                    <Row className='text-muted mb'>
                      <Col className='d-flex'>
                        <FaRegUserCircle className='mx-1' size={20} />
                        {<UserData userId={item.userId} />}
                      </Col>
                    </Row>
                  </Card.Subtitle>
                  <Card.Text className="mb-2 text-muted">
                    {formatText(item.body)}
                  </Card.Text>
                  <Button variant="outline-primary" onClick={() => navigate(`/${item.id}`)}>{<BiCommentDetail size={25} />}</Button>
                </Card.Body>
              </Card>
            ))}
          </Container>
        </>
      }
    </>
  );
}