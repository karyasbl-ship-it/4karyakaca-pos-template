import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("barang");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Isi nama & harga dulu kak!");

    onAdd({
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      stock: parseInt(stock) || 0,
    });

    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-4 grid gap-2"
    >
      <input
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="barang">Barang</option>
        <option value="jasa">Jasa</option>
      </select>
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded"
      />
      {category === "barang" && (
        <input
          type="number"
          placeholder="Stok"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 rounded"
        />
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Tambah Produk
      </button>
    </form>
  );
}
