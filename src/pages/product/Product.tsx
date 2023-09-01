import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import axios from "axios";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

export function Product() {
  const [product, setProduct]: any = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const apiData = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response: AxiosResponse) => {
          setProduct(response.data);
        });
      const apiData1 = await axios
        .get(`https://fakestoreapi.com/products?limit=5`)
        .then((response: AxiosResponse) => {
          setSimilarProducts(response.data);
        });
    }
    fetchData();
  }, []);
  return (
    <ProductsContainer>
      <MainProduct>
        <MainImg src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>{product.price}</span>
      </MainProduct>
      <SimProductsContainer>
        {similarProducts.length > 0 ? (
          similarProducts.map((product: Product) => (
            <SimilarCard key={product.id}>
              <SimilarImg src={product.image} alt={product.title} />
              <SimilarTitle>{product.title}</SimilarTitle>
              <span>{product.price}</span>
            </SimilarCard>
          ))
        ) : (
          <p>Loading</p>
        )}
      </SimProductsContainer>
    </ProductsContainer>
  );
}

const MainProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MainImg = styled.img`
  width: 30rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const SimProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SimilarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SimilarImg = styled.img`
  width: 120px;
  max-width: 80%;
  height: 180px;
`;

const SimilarTitle = styled.p`
  width: 12rem;
  overflow: hidden;
`;

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
