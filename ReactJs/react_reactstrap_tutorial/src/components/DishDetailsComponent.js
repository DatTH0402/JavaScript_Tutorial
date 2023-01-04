import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function DishInfo({ dish }) {
    return (
        <Card key={dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function DishComment({ comment }) {
    return (
        <Card key={comment.id}>
            <CardBody>
                <CardText>{comment.comment}</CardText>
                <CardText>{comment.author}{" -- "}{comment.date}</CardText>
            </CardBody>
        </Card>
    )
} 

function DishDetails(props) {
    const dish = props.dish;
    if (dish != null) {
        const comments = dish.comments.map(
            (comment) => {
                return (
                    <DishComment comment={comment} />
                )
            }
        )
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <DishInfo dish={dish} />
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
    } else {
        return (
            <div></div>
        );
    }


}

export default DishDetails;
