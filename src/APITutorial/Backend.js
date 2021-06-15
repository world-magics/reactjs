import React from 'react'
import {Card,CardBody, CardHeader, Container, Row,Col } from 'reactstrap';
import axios from 'axios'
class Backend extends React.Component {
   

        state = {
            // user:[]
            post:[]
        }
        // componentDidMount(){
        //     fetch('https://jsonplaceholder.typicode.com/photos ')
        //     .then((response)=>response.json()) 
        //     .then(data=>{
        //         console.log(data);
        //         this.setState({user:data}) 
        //     })      
        // }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            const post=res.data;
            console.log(res)
            this.setState({post})
            
                })
        }

                    
    render() {
        return (
            <>
{/* <Container>
    <Row>
       {this.state.user.map((photos)=>(
            <Col md="4">
            <Card key={photos.albumId}>
                <CardHeader>
                    <h2>
{photos.title}
                    </h2>
                    <h2>
{photos.thumbnailUrl}

                    </h2>
                </CardHeader>
                <CardBody>
              <h3> {users.phone}</h3> 
                <br/>
           <h3>     {users.email}</h3>
           <p>{users.username}</p>
           <h2>{users.company.name}</h2>
           <h2>{users.company.bs}</h2>
           <h2>{photos.url}</h2>
                </CardBody>
            </Card>
        </Col>
       ))}
    </Row>
</Container> */}
<Container>
    <Row>
       {this.state.post.map((posts)=>(
            <Col md="4">
            <Card key={posts.id}>
                <CardHeader>
                 <h2>      {posts.title}</h2> 
                </CardHeader>
                <CardBody>
                     <p>  {posts.body}</p>
                </CardBody>
            </Card>
        </Col>
       ))}
    </Row>
</Container>
            </>
        )
    }
}

export default Backend