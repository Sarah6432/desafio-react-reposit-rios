import styled from "styled-components";

export const ItemRepoContainer = styled.div`
    widht: 80%;
    margin: 0px 30px;
    

    h3{
      font-size: 32px;
      color: #fafafa;
    }

    p {
      font-size: 16px;
      color: #fafafa6b;
      margin-bottom: 20px;
    }

    a.remover {
      color: #ff0000;
      margin-top: 20px;
    }
    hr {
     color: #fafafa6b;
     margin: 20px 0;
    }
    
    button {
     border: none;
     border-radius: 15px;
     padding: 8px;
     margin-top: 5px;
     background-color:rgb(243, 88, 88);
     color: white;
     font-size: 12px;
     font-weight: bold;
     font-family: "Poppins", sans serif;

     &:hover{
      background-color:rgb(255, 83, 83);
     }
    }
`