import styled from 'styled-components'


export const Container = styled.div`
  display  : flex;
  height: 100vh;
`

export const Left = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: #FFFFFF;
padding: 5.4rem 1rem;
flex: 2;
background-repeat: no-repeat;
background-size: cover;

`
export const Image = styled.img`
width: 60%;
height: 400px;
object-fit: cover;
margin: 0 auto;
`
export const Title = styled.h2`
font-family: Poppins;
font-size: 34px;
font-weight: 600;
line-height: 53px;
letter-spacing: 0em;
text-align: center;

`


export const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin : 1.6rem;
flex-direction: column;
flex: 3;
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
border-radius: 8px;

@media screen and (max-width:768px) {
   width: 100%;
}
`


export const Form = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const Inputs = styled.div`
width: 600px;
`
export const Label = styled.label`
font-size: 18px;
color: #474444;
font-weight:700;
padding: 0.5rem 0;
margin-bottom: 1rem;
font-family: 'Poppins', sans-serif;
`




export const Input = styled.input`
width: 100%;
outline: none;
padding: 0.6rem 2.5rem;
color: #474444;
border: none;
border-radius: 5px;
border: 1px solid #6360AB;
display: flex;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
align-items: center;
`

export const RememberSpan = styled.div`
display: flex;
justify-content:space-between;

`

export const Button = styled.button`
width: 300px;
padding: 0.8rem 5.5rem;
border-radius: 8px;
background: #1575A7;
border-radius: 8px;
color: #fff;
margin: 0.8rem;
border:none;
cursor: pointer;
`

export const AnchorLink = styled.a`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #F78719;
text-decoration: underline;
`
export const ChangePass = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #F78719;
`