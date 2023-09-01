import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Loader } from "../../global";

export function Products() {
  const [products, setProducts] = useState([]);
  const [backUp, setBackUp] = useState([]);
  const [limit, setLimit] = useState(4);
  const action = () => {
    if (products.length > 0) {
      let newProducts = [...products];
      newProducts.shift();
      setProducts(newProducts);
    }
  };
  const reset = () => {
    setProducts(backUp);
  };

  const loadMore = () => {
    setLimit(limit + 5);
  };
  useEffect(() => {
    const fetchData = async () => {
      const apiData: any = axios
        .get(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((response: AxiosResponse) => {
          setProducts(response.data);
          setBackUp(response.data);
        });
    };
    fetchData();
  }, [limit]);
  return (
    <div>
      <div>
        <button onClick={action}>Action</button>
        <button onClick={reset}>reset</button>
        <button onClick={loadMore}>Load more</button>
        <span>Loaded : {limit} products</span>
      </div>
      {products.map((product: Product) => (
        <ProductCards key={product.id}>
          <Img src={product.image} alt={product.title} />
          <Header>{product.title}</Header>
          <Description>{product.description}</Description>
          <Price>{product.price}</Price>
          <Link to={`/products/${product.id}`}>Details</Link>
        </ProductCards>
      ))}
    </div>
  );
}

const ProductCards = styled.div`
  display: grid;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1%;
  flex-wrap: wrap;
  width: 30%;
`;

const Img = styled.img`
  width: 120px;
`;

const Header = styled.h2`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Price = styled.span`
  font-size: 1rem;
`;
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
