import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import React from "react";
import IProduct from "../../src/interfaces/products";
import { useRouter } from "next/router";
const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  const {isFallback} = useRouter()
  if(isFallback){
    return <>loading</>
  }
  return (
    <>
      <h1>{product.name}</h1>
      <h4>{product.description}</h4>
    </>
  );
};

export default ProductDetails;

export const getStaticProps: GetStaticProps<
  ProductDetailsProps,
  { productId: string }
> = async ({ params }) => {
  const product = await axios
    .get<IProduct>(`http://localhost:4200/products/${params?.productId}`)
    .then((product) => product.data)
    .catch(() => {});

  if (!product) {
    return { notFound: true, revalidate: 10 };
  }
  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<{
  productId: string;
}> = async () => {
  return { paths: [{ params: { productId: "1" } }], fallback: true };
};

interface ProductDetailsProps {
  product: IProduct;
}
