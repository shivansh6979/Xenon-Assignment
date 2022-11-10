import React from "react";
import { Row, Col } from "react-bootstrap";
import Element from "../components/Element";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
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
          {products.map((product) => {
            return (
              <Col sm={12} mg={6} lg={4} xl={3} key={product.id}>
                <Element product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
