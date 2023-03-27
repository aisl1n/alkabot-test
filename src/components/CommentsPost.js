import api from '../services/api'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { Button, Container, Row, Col, Card} from 'react-bootstrap'

export const CommentsPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get(`/posts/${id}/comments`);
      setPost(res.data);
    }
    fetch();
  }, []);

  const handleBack = () => {
    return navigate("/");
  }

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className='m-3 display-3'>Comentários</h1>
            <Button
              className='mb-2'
              variant="outline-primary"
              onClick={handleBack}
            >{<BiArrowBack size={30}/>}</Button>
            {
              (!post) ? <p>Not found</p> : (
                post.map((comment) => {
                  return (
                    <Card key={comment.id} className="mb-2">
                      <Card.Header>{comment.email}</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>
                            {formatText(comment.body)}
                          </p>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  )
                })
              )
            }
          </Col>
        </Row>
      </Container>

    </>
  )
}
