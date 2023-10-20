import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";

function DynamicStyling() {
   return(
    <div>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
    </div>
   );
 }
 export default DynamicStyling;