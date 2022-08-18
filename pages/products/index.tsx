import axios from "axios";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next/types";
import React from "react";
import IProduct from "../../src/interfaces/products";

const Products: NextPage<ProductsProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} passHref href={`/products/${product.id}`}>
          <div>
            {product.id}- {product.name}
            {product.price}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const products = await axios
    .get<IProduct[]>("http://localhost:4200/products")
    .then((products) => products.data);

  return { props: { products }, revalidate: 10 };
};

interface ProductsProps {
  products: IProduct[];
}
