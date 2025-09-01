import { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function Products() {
  const [products, setProducts] = useState([]);

  // Ambil data dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  // Simpan data ke localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => setProducts([...products, product]);
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  const updateProduct = (id, updated) =>
    setProducts(products.map(p => (p.id === id ? updated : p)));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manajemen Produk</h2>
      <ProductForm onAdd={addProduct} />
      <ProductList
        products={products}
        onDelete={deleteProduct}
        onUpdate={updateProduct}
      />
    </div>
  );
}
