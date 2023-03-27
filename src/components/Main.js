import api from '../services/api'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CardPost } from './CardPost'

export const Main = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  return (
    <>
      <Container fluid="lg">
        <Row>
          <Col>
            <h1 className='m-3 display-3'>AlkaBlog</h1>
            {
              !posts
                ? <h1>Not found</h1>
                : <CardPost posts={posts} />
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
