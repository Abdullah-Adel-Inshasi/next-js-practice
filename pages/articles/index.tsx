import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import IArticle from "../../src/interfaces/articles";

const ArticleList: NextPage<ArticleListProps> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          {article.id}- {article.title}
          <hr />
        </div>
      ))}
    </>
  );
};

export default ArticleList;

export const getServerSideProps: GetServerSideProps<
  ArticleListProps
> = async () => {
  const articles = await axios
    .get<IArticle[]>("http://localhost:4200/articles")
    .then((articles) => articles.data);

  return { props: { articles } };
};

interface ArticleListProps {
  articles: IArticle[];
}
