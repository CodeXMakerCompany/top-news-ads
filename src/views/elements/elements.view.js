import React, { useEffect } from "react";
import { ElementsList } from "./components/elements.list";

const ElementsView = () => {
  const list = [
    { id:1 , element: "hye codex" },
    { id:2 , element: "hye codex" },
    {id:3 , element: "hye codex" },
    { id:4 ,element: "hye codex" },
    { id:5 ,element: "hye codex" },
    { id:6 ,element: "hye codex" },
    { id:7 ,element: "hye codex" },
    { id:8 ,element: "hye codex" },
    { id:9 ,element: "hye codex" },
    { id:10 ,element: "hye codex" },
    { id:11 ,element: "hye codex" },
    { id:12 ,element: "hye codex" },
    { id:13 ,element: "hye codex" },
    { id:14 ,element: "hye codex" },
    { id:15 ,element: "hye codex" },
    { id:16 ,element: "hye codex" },
  ];
  useEffect(() => {
    console.log("vive");
  }, []);
  return (
    <>
      <ElementsList list={list} />
    </>
  );
};

export default ElementsView;
