import { StyledCategory } from './Styled';
import { BsList } from 'react-icons/bs';

const Category = () => {
  return (
    <StyledCategory>
      <div>
        <BsList />
        카테고리
      </div>
      <div>
        SALE
      </div>
      <div>
        BEST
      </div>
      <div>
        NEW
      </div>
      <div>
        이벤트
      </div>
    </StyledCategory>
  );
};


export default Category;