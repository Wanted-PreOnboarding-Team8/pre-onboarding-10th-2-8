import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchSuggestionListItem from "./SearchSuggestionListItem";

const StyledSearchSuggestionModal = styled.div`
  background-color: white;
  width: 450px;
  min-height: 210px;
  max-height: 300px;
  position: absolute;
  top: 103px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: left;
  padding-left: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  .modalText {
    color: #6a737b;
    font-size: 12px;
  }
`;

const StyledSearchSuggestionList = styled.ul`
  margin-top: -10px;
  margin-left: -19px;

  & > span {
    margin-left: 19px;
  }
`;

SearchSuggestionModal.propTypes = {
  focusIdx: PropTypes.number.isRequired,
  suggestions: PropTypes.array.isRequired,
  setSearchName: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  searchName: PropTypes.string.isRequired,
  setFocusIdx: PropTypes.func.isRequired,
  searchRef: PropTypes.object,
};

export default function SearchSuggestionModal({
  focusIdx,
  suggestions,
  setSearchName,
  openModal,
  searchName,
  setFocusIdx,
  searchRef,
}) {
  if (!openModal) return null;

  return (
    <StyledSearchSuggestionModal>
      <span className="modalText">추천 검색어</span>
      <StyledSearchSuggestionList>
        {suggestions?.length > 0 && searchName ? (
          suggestions?.map((suggestion, idx) => (
            <SearchSuggestionListItem
              key={suggestion.id}
              name={suggestion.name}
              focus={focusIdx === idx}
              handleMouseOver={() => setFocusIdx(idx)}
              handleMouseOut={() => setFocusIdx(-2)}
              setSearchName={setSearchName}
              searchRef={searchRef}
            />
          ))
        ) : (
          <span>검색어 없음</span>
        )}
      </StyledSearchSuggestionList>
    </StyledSearchSuggestionModal>
  );
}
