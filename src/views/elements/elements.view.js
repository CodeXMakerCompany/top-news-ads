import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../actions/articles.actions";
import { ElementsList } from "./components/elements.list";

const ElementsView = () => {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.data);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <>
      { Array.isArray(articles) ? <ElementsList list={articles} /> : 'no lo es'}
    </>
  );
};

export default ElementsView;
