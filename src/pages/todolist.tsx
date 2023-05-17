import { useState } from "react";
import trash from "./../assets/trash.svg";

type ToDoListItem = {
  id: number;
  item: string;
  done: boolean;
};

const testData: ToDoListItem[] = [
  {
    id: 1,
    item: "nauči pisati objekte",
    done: false,
  },
  {
    id: 2,
    item: "vježbaj",
    done: false,
  },
];

const ToDoList = () => {
  const [listItems, setListItems] = useState<ToDoListItem[]>(testData);

  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <span className="todolist__list">My list of things...</span>
      <div className="todolist__header">
        <input className="todolist__input" type="text" />
        <button className="todolist__btn">Add</button>
      </div>
      <div className="todolist__item__wrapper">
        {listItems.map((listItem: ToDoListItem) => {
          return (
            <div className="todolist__item" key={listItem.id}>
              <div className="todolist__item__item">{listItem.item}</div>
              <div className="todolist__item__remove">
                <img src={trash} alt="trash" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
