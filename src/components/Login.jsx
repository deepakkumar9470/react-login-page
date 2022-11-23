
import { Container, Left, Right,Form, AnchorLink,Inputs,ChangePass, Input, Button, Label, Title, Para, Image,RememberSpan } from './login'
import bg from '../images/bg.png'

const Login = () => {

    return (
        <Container>

            <Left>
        
                <Image src={bg} alt="bg" />
            </Left>

            <Right>
                <Form>
                    <Title>Login</Title>


                    <Inputs>
                        <Label htmlFor="email">Login ID</Label>
                        <Input type="text" name="email" placeholder="Enter Login ID" />
                    </Inputs>



                    <Inputs>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" placeholder="Enter Password" />
                    </Inputs>

                    <Inputs>
                    
                    
                    <Input type="checkbox" />
                    <span>Remember Me</span>          
                    <ChangePass>Change Password</ChangePass> 
                    </Inputs>


                    <Inputs>
                       
                        <Input type="checkbox" />
                        <span>Agree to <AnchorLink href="#">Terms & Conditions</AnchorLink></span>
                        

                    </Inputs>

                    <Button>Login</Button>
                    <span>Don’t have an account? <AnchorLink href="#">Register Here</AnchorLink></span>

                </Form>
            </Right>
        </Container>
    )
}

export default Login