import { useState } from "react";

export default function ProductList({ products, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (p) => {
    setEditId(p.id);
    setEditForm({ ...p });
  };

  const saveEdit = () => {
    onUpdate(editId, editForm);
    setEditId(null);
  };

  return (
    <div className="grid gap-2">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white p-3 rounded shadow flex justify-between items-center"
        >
          {editId === p.id ? (
            <div className="flex gap-2 items-center">
              <input
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="border p-1 rounded"
              />
              <input
                type="number"
                value={editForm.price}
                onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                className="border p-1 rounded w-20"
              />
              {p.category === "barang" && (
                <input
                  type="number"
                  value={editForm.stock}
                  onChange={(e) =>
                    setEditForm({ ...editForm, stock: e.target.value })
                  }
                  className="border p-1 rounded w-16"
                />
              )}
              <button onClick={saveEdit} className="bg-green-500 text-white px-2 rounded">✔</button>
            </div>
          ) : (
            <>
              <div>
                <p className="font-bold">{p.name} ({p.category})</p>
                <p>Harga: Rp {p.price.toLocaleString()}</p>
                {p.category === "barang" && <p>Stok: {p.stock}</p>}
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-2 rounded">Edit</button>
                <button onClick={() => onDelete(p.id)} className="bg-red-500 text-white px-2 rounded">Hapus</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
