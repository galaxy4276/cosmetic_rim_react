import { BsSearch } from 'react-icons/bs';
import { StyledHeader } from './Styled';


const Header = () => {
  return (
    <StyledHeader>
      <div className="header-search">
        <BsSearch />
        <input className="header-search--input" />
      </div>
      <div className="header-logo" >
        <img 
          className="header-search-logo"
          src="http://localhost:8001/image/logo.png"
          alt="logo"
        />
      </div>
      <div className="header-menu" >
        <ul>
          <li>회원가입 / 로그인</li>
          <li>조회</li>
          <li>고객센터</li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;