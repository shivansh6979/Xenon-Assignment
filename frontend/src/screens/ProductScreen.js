import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Rating from "../components/Rating";
import "./Productscreen.css";

import { useParams } from "react-router-dom";
import { listProductDetails } from "../actions/ProductAction";

const ProductScreen = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.ProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>

      {loading ? (
        <Spinner
          animation="grow"
          variant="light"
          role="status"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
          }}
        />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          <Col md={5}>
            <Image
              className="product-img"
              src={product.image}
              alt={product.name}
              fluid
            ></Image>
          </Col>

          <Col md={4} className="column-feature">
            <ListGroup variant="flush" className="product-detail">
              <ListGroup.Item>
                <h2>{product.title}</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product?.rating?.rate}
                  text={`${product?.rating?.count} reviews`}
                ></Rating>
              </ListGroup.Item>

              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3} className="product-price">
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>$ {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product?.rating?.count > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.count === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
