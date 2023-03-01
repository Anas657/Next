import ContentArea from "../Components/ContentArea"
import { Button, Checkbox, Form } from "semantic-ui-react"
import { Link } from "react-router-dom";



export default function Category() {
    return (
    <ContentArea heading={"create"}> 
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <br />
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <br />
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <br />
    <Button type='submit'>Submit</Button>
  
  </Form>
  {/* <Link to={'/'}>Visit Create</Link> */}
    </ContentArea>
    );
}