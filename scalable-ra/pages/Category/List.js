import ContentArea from "../Components/ContentArea"
import { Button, Checkbox, Form } from "semantic-ui-react"
import { Link } from "react-router-dom";

export default function Category() {
    return (
    <ContentArea heading={"list"}> 
        <div>
          <ul>
       
         <li>Category 1</li>
         <li>Category 2</li>
         <li>Category 3</li>
         <li>Category 4</li>
         <li>Category 5</li>
         <li>Category 6</li>

          </ul>

          {/* <Link to={'/list'}>Visit List</Link> */}

        </div>
    </ContentArea>
    );
}