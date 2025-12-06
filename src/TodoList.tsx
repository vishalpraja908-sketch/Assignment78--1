type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  showAdd: () => void;
};

function TodoList(props: TodoListProps) {
  const pending = props.todos.filter((t) => !t.completed);
  const done = props.todos.filter((t) => t.completed);
 return (
 <div>
  <h2 className="text-xl font-semibold mb-3">Things to do</h2>

 <div className="mb-5 space-y-2">
   {pending.map((item) => (
    <div key={item.id} className="flex items-center gap-2">
   <input
  type="checkbox"
   className="w-4 h-4"
   onChange={() => props.toggleTodo(item.id)}
  />
   <span>{item.text}</span>
 </div>
  ))}
  </div>

 <button
 onClick={props.showAdd}
  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
 >
 + Add a todo
</button>

<h2 className="text-xl font-semibold mt-8 mb-3">Things done</h2>

<div className="space-y-2">
{done.map((d) => (
 <div key={d.id} className="flex items-center gap-2">
  <input
 type="checkbox"
checked={true}
 className="w-4 h-4"
  onChange={() => props.toggleTodo(d.id)}
 />
 <span className="line-through text-gray-500">{d.text}</span>
  </div>
 ))}
</div>
 </div>
  );
}

export default TodoList;
