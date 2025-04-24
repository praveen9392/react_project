import { useState } from "react";
import "./navbar.css";
import { Card } from "./Cards";

export function Navigation() {
    const [items, setItems] = useState([
        {
            title: "Apple iPhone15",
            description: "iPhone 15 is Apple's latest phone with a sleek design, Dynamic Island, and a powerful A16 Bionic chip...",
            price: "70,000 - 80,000 /-",
            imageUrl: "data:image/jpeg;base64,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",
            link: "https://www.apple.com/in/shop/buy-iphone/iphone-15"
        }
    ]);
    return (
        <>
            <header>
                <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" alt="Logo" width="50" />
                <nav>
                    <ul>
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Updates</li>
                    </ul>
                </nav>
            </header>

            <img className="img" src="/all_colors__fdpduog7urm2_large_2x.jpg" alt="iPhone colors" />
            <AddItem items={items} setItems={setItems} />
            <div className="card-list">
                {items.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </>
    );
}
function AddItem({ items, setItems }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            imageUrl: event.target.imageUrl.value,
            link: event.target.link.value,
        };

        setItems((prevItems) => [...prevItems, item]);
        event.target.reset();
    };

    return (
        <div className="container mt-4">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" name="price" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="imageUrl" name="imageUrl" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label">Product Link</label>
                    <input type="url" className="form-control" id="link" name="link" required />
                </div>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
        </div>
    );
}
