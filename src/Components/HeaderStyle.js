import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #1b1b32;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0px 3px 6px 0 #1b1b32;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  color: #1b1b32;
  background-color: white;
`;

const HeaderStyle = {
  Header,
  AppNameComponent,
  SearchComponent,
  AppIcon,
  SearchIcon,
  SearchInput,
};

export default HeaderStyle;
