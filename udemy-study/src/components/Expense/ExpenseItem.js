import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  const clickhandler = () => {
    console.log("dsjkldjlks");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <div>{props.date.toLocaleString()}</div>
      </div>
      <button onClick={clickhandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
