import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { AuthContext } from '../contexts/AuthContext';
import { PostContext } from "../contexts/PostContext";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SinglePost from '../components/posts/SinglePost';

const Dashboard = () => {
    // context
    const { authState: { user: { username } } } = useContext(AuthContext)
    const { postState: { posts, postsLoading }, getPosts } = useContext(PostContext)
    //start : get all post
    useEffect(() => getPosts(), [])

    let body = null
    if (postsLoading) {
        body = (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (posts.length === 0) {
        <>
            <Card className='text=center mx-5 my-5' >
                <Card.Header as='h1'> Hi {username}</Card.Header>
                <Card.Body>
                    <Card.Title>Welcome to LearnIt</Card.Title>
                    <Card.Text>
                        Click the button below to track your first skill to learn
                    </Card.Text>
                    <Button variant='primary'>LearnIt</Button>
                </Card.Body>
            </Card>
        </>
    } else {
        <>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                {posts.map(post => {
                    return (
                        <Col key={post._id} className='my-2'>
                            <SinglePost post={post}></SinglePost>
                        </Col>
                    )
                })}
            </Row>

        </>
    }
    const body1 = <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
        {posts.map(post => {
            return (
                <Col key={post._id} className='my-2'>
                    <SinglePost post={post}></SinglePost>
                </Col>
            )
        })}
    </Row>


    return <>
        {body1}
    </>
}

export default Dashboard
