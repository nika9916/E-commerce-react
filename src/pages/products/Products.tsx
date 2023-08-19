import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
import { styled } from "styled-components";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiData: any = axios
        .get("https://fakestoreapi.com/products")
        .then((response: AxiosResponse) => {
          setProducts(response.data);
          console.log(response.data);
        });
      if (apiData.status === 200) {
        setProducts(apiData.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
