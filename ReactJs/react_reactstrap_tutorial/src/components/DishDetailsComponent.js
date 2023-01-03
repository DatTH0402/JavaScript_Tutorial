import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const dish = this.props.dish
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <Card key={comment.id}>
                        <CardBody>
                            <CardText>{comment.comment}</CardText>
                            <CardText>{comment.author}{" -- "}{comment.date}</CardText>
                        </CardBody>
                    </Card>
                )
            }
            );
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>Comments</CardTitle>
                            </CardBody>
                        </Card>
                        {comments}
                    </div>
                </div>

            );
        }
            
        else
            return (
                <div></div>
            );
    }
}

export default DishDetails;
