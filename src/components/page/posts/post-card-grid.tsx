import React from "react";
import styled from "styled-components";

const StyledPostCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const PostCardGrid = () => {
  return <StyledPostCardGrid>PostCardGrid</StyledPostCardGrid>;
};

export default PostCardGrid;
