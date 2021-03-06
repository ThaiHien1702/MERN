import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'


const SinglePost = ({ post: { _id, title, status, url, description } }) => {
    return (

        <Card
            className='shadow'
            border={status === 'LEARNED'
                ? 'success'
                : status === 'LEARNING'
                    ? 'warning'
                    : 'danger'}>
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            <p className='post-title'>{title}</p>
                            <Badge pill variant={
                                status === 'LEARNED'
                                    ? 'success'
                                    : status === 'LEARNING'
                                        ? 'warning'
                                        : 'danger'
                            }>
                                {status}
                            </Badge>
                        </Col>
                        <Col className='text-right'>
                            buttons
                    </Col>
                    </Row>
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}

export default SinglePost
