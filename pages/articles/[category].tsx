import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import IArticle from "../../src/interfaces/articles";

const ArticleListByCategory: NextPage<ArticleByCategoryProps> = ({
  articles,
  category,
}) => {
  console.log(articles);
  return (
    <>
      <span>
        <b>{category}</b> news
      </span>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </div>
      ))}
    </>
  );
};

export default ArticleListByCategory;

export const getServerSideProps: GetServerSideProps<
  ArticleByCategoryProps,
  { category: string }
> = async (context) => {
  const { params,req } = context;
  console.log({req})
  const category = params?.category;
  const articles = await axios
    .get<IArticle[]>(`http://localhost:4200/articles?category=${category}`)
    .then((articles) => articles.data)
    .catch(() => {});

  if (!articles || !category) {
    return { notFound: true };
  }
  return { props: { articles, category } };
};

interface ArticleByCategoryProps {
  articles: IArticle[];
  category: string;
}
