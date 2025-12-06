import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
   const [todoData, setTodoData] = useState([
 { id: 1, text: "Clean my computer", completed: false },
 { id: 2, text: "Buy a keyboard", completed: false },
 { id: 3, text: "Write something", completed: true }
 ]);
 const [showBox, setShowBox] = useState<boolean>(false);
 const addTodoFn = (val: string) => {
   if (val.trim() === "") return;

const newObj = {
 id: Date.now(),
text: val,
 completed: false
};

 setTodoData([...todoData, newObj]);
 setShowBox(false);
};
const toggleFn = (id: number) => {
const arr = todoData.map((t) => {
 if (t.id === id) {
return { ...t, completed: !t.completed };
 }
 return t;
 });
setTodoData(arr);
  };

 return (
   <div className="p-6 max-w-xl mx-auto">
<h1 className="text-4xl border-b border-gray-400 pb-1">XTodo</h1> 
 <h1 className="text-3xl font-bold mb-6">Things to get done</h1>
<button className="text-2xl border-2 px-2 py-2 rounded-lg bg-yellow-500">Refresh</button>

{showBox ? (
 <AddTodo 
  onSave={addTodoFn} 
 onCancel={() => setShowBox(false)} 
 />
 ) : (
 <TodoList 
todos={todoData} 
 toggleTodo={toggleFn}
 showAdd={() => setShowBox(true)}
 />
 )}
  </div>
  );
}

export default App;