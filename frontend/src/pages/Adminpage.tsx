import { Pen, Plus, Trash2 } from "lucide-react";
import type { Items } from "../components/Item";

export default function Adminpage({ products }: { products: Items[] }) {
  return (
    <div className="Admin Center">
      <div className="top">
        <h1>Admin Panel</h1>
        <button className="add border">
          <Plus /> Add Product
        </button>
      </div>
      <br />
      <div className="list">
        <div className="top"></div>
        <div className="products border">
          <span>Product Inventory</span>
          <br />
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr className="border-b">
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="border-b">
                  <td
                    className="icon"
                    style={{ width: "4rem", marginBottom: "0" }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        display: "block",
                      }}
                    />
                  </td>
                  <td style={{ fontSize: "1.05em" }}>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}DH</td>
                  <td>{item.qte}</td>
                  <td>
                    <div className="actions">
                      <Pen className="action" />
                      <Trash2 className="action" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
