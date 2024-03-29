import React from "react";
import styled from "styled-components";
import Title from "../Title";

export default function Service() {
  const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: 45px;
    flex-wrap: wrap;
    @media (max-width: 576px) {
      margin-top: 20px;
    }
  `;
  const Item = styled.div`
    background: rgba(230, 230, 230, 0.25);
    box-shadow: 0px 0px 15px 5px rgba(203, 203, 203, 0);
    border-radius: 12px;
    width: 24%;
    height: 120px;
    margin-right: 1%;
    transition: 0.38s ease-in-out;
    cursor: pointer;
    margin-bottom: 10px;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: 0px 0px 15px 5px rgba(203, 203, 203, 0.46);
    }
    @media (max-width: 768px) {
      width: 49%;
    }
    @media (max-width: 576px) {
      width: 49%;
      height: 100px;
    }
  `;
  return (
    <div className="card-min">
      <Title title="Оплата услуг" />
      <Flex>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Flex>
    </div>
  );
}
