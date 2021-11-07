import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import Image from 'next/image'
import FullWidth from "../components/FullWidth";

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 25}px;
  font-family:"Cera Pro",sans-serif;
`;

const Review = styled.div`
  width: ${(props) => props.scale * 350}px;
  display: flex;
  padding: ${(props) => props.scale * 25}px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.22);
  border: 5px solid orange;
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: ${(props) => props.scale * 58}px;
  height: ${(props) => props.scale * 58}px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${(props) => props.scale * 15}px;
  img {
    max-width: 100%;
    object-fit:cover
  }
`;

const Content = styled.div`
  p {
    width: ${(props) => props.scale * 250}px;
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-size: ${(props) => props.scale * 14}px;
    line-height: ${(props) => props.scale * 20}px;
    font-weight: 100;
    text-align: left;
  }
  h2{
    width: ${(props) => props.scale * 250}px;
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-size: ${(props) => props.scale * 14}px;
    line-height: ${(props) => props.scale * 20}px;
    font-weight: 100;
    text-align: left;
    font-weight:bold;
    text-transform:uppercase;
  }
`;

const portraits = [
  "/shoes.jpg",
  "/watch.jpg",
  "/ring.jpg",
  "/bracelet.jpg",
  "/lipstick.jpg",
];
const productContent = [
  "dolor sit amet consectetur, adipisicing elit.",
  "dolor sit amet consectetur, adipisicing elit.",
  "dolor sit amet consectetur, adipisicing elit.",
  "dolor sit amet consectetur, adipisicing elit.",
  "dolor sit amet consectetur, adipisicing elit.",
];
const Headers = [
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
  "Lorem ipsum",
];

const Reviews = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, setKey]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <Height height={450}>
        <Marquee
          key={key}
          scatterRandomly
          velocity={20}
          minScale={0.7}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(5, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <Image width="100" height="100" src={portraits[id]} alt="" />
                </Avatar>
                <Content scale={scale}>
                  <h2>{Headers[id]}</h2>
                  <p>
                    {productContent[id]} {id}
                  </p>
                </Content>
              </Review>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default React.memo(withSize()(Reviews));
