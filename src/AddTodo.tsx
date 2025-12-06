import { useState } from "react";

function AddTodo({ onSave, onCancel }: { onSave: (text: string) => void; onCancel: () => void }) {
   const [txt, setTxt] = useState<string>("");
  
const saveHandler = () => { 
 onSave(txt);
 setTxt("");
 };

  return (
<div className="bg-white p-6 rounded-lg shadow border">
 <h2 className="text-xl font-semibold mb-4">Create a todo</h2>

<input
 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
 placeholder="Write here..."
 value={txt}
 onChange={(e) => setTxt(e.target.value)}
 />

<div className="flex gap-3">
 <button 
 onClick={saveHandler}
 className="bg-yellow-500 text-white px-5 py-2 rounded-lg"
>
 Save
 </button>
 <button 
  onClick={onCancel}
className="px-5 py-2 rounded-lg border border-gray-400"
 >
Cancel
</button>
 </div>
 </div>
  );
}

export default AddTodo;