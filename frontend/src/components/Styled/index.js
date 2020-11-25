import styled from 'styled-components';


export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  padding: 0 100px 0 100px;

  img {
    height: 140px;
    width: 150px;
    padding-left: 100px;
  }

  .header-search {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      color: #fd3a69;
    }

    input {
      border-style: none;
      outline: none;
      border-bottom: 2px solid #fd3a69;
      padding: 5px 15px;
    }
  }

  .header-menu ul {
    list-style: none;
    display: flex;
    
    li {
      margin: 0 10px;
      padding: 0 3px 3px 3px;
      border-bottom: 2px solid #7e7474;
    }
  }
`;

export const StyledCategory = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  padding: 0 100px 0 100px;
  font-weight: 600;
  font-size: 20px;

  div {
    display: flex;
    align-items: center;
    
    svg {
      font-size: 25px;
      margin-right: 5px;
      margin-top: 3px;
    }

    padding: 0 20px 8px 20px;
    border-bottom: 2px solid #7e7474;
  }
`;