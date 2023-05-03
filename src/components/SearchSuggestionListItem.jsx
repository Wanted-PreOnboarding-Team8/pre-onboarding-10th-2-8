import React from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
import PropTypes from "prop-types";

const StyledSearchSuggestionListItem = styled.li`
  background-color: ${(props) => (props.focus ? "#eeeeee;" : null)};
  line-height: 40px;
  display: flex;
  padding-left: 20px;

  div:first-child {
    margin-top: 1px;
    color: #a6afb7;
  }

  span {
    margin-left: 9px;
  }
`;

SearchSuggestionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired,
};

export default function SearchSuggestionListItem({ name, focus }) {
  return (
    <StyledSearchSuggestionListItem focus={focus}>
      <SearchIcon />
      <span>{name}</span>
    </StyledSearchSuggestionListItem>
  );
}