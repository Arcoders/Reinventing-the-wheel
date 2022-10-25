import StyledComponent from '../lib/StyledComponent';

export const List = {
  Container: StyledComponent.ul`
    display: flex;
    list-style: none;
  `,
  Item: StyledComponent.li`
    padding: 15px;
    cursor: pointer;
    color: ${(props) => (props.active ? 'black' : '#414345')};
    ${(props) => props.active && 'text-decoration: overline'};
  `,
  Navigate: StyledComponent.li`
    cursor: pointer;
    font-weight: bold;
    padding: 4px;
    font-size: 30px;
  `,
};

export const Modal = {
  Container: StyledComponent.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    background-color: rgba(56, 55, 55, 0.8);
  `,
  Container: StyledComponent.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    background-color: rgba(56, 55, 55, 0.8);
  `,
  Content: StyledComponent.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 5px;
    z-index: 10;
    background-color: transparent;
    min-width: 100%;
    color: white;
    max-width: 90%;
  `,
};

export const Character = {
  Container: StyledComponent.div`
    border-radius: 10px;
    background-color: #414345;
    padding: 15px;
    width: 170px;
    cursor: pointer;
    margin: 7px;
  `,
  Image: StyledComponent.img`
    border-radius: 50%;
    background-size: cover;
    width: 100%;
  `,
  Title: StyledComponent.h2`
    font: 150% sans-serif;
    font-size: 1rem;
    color: white;
    text-align: left;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  `,
  Origin: StyledComponent.span`
    font-style: normal;
    font: 150% sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #a7a7a7;
    text-align: left;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  `,
};

export const Info = {
  Container: StyledComponent.div`
    padding: 2.5rem;
    background: linear-gradient(180deg, #232526 0%, #414345 100%);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px;
    position: relative;
    min-width: 500px;
  `,
  Close: StyledComponent.button`
    position: absolute;
    color: white;
    right: 10px;
    top: 10px;
    border: 0;
    font-size: 35px;
    padding: 3px 10px;
    background-color: transparent;
    cursor: pointer;
    outline: 0;
  `,
  Image: StyledComponent.img`
    background-size: cover;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  `,
  Title: StyledComponent.h2`
    font-size: 1.3rem;
    font: 150% sans-serif;
    color: white;
    border-bottom: 1px solid white;
    padding-bottom: 25px;
  `,
  Location: StyledComponent.p`
    color: #a7a7a7;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  `,
  Residents: StyledComponent.div`
    display: flex;
  `,
  ResidentImage: StyledComponent.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    margin: 10px;
  `,
};
