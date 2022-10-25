import StyledComponent from '../lib/StyledComponent';

export const Gallery = {
  Container: StyledComponent.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: StyledComponent.h1`
    font: 250% sans-serif;
  `,
  Result: StyledComponent.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `,
  Pagination: StyledComponent.div``,
};
