// src/components/Cart.js
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "./Cart.css";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    // const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,"")); 
    return total + (item.price * item.quantity);
  }, 0);  

  const handlePlaceOrder = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
    setErrors({});
    setIsOrderSuccessful(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);  // Start loading
      try {
        const response = await fetch("https://cholo-kini-api-production.up.railway.app/404/api/send-order-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems,
            totalAmount,
            customerDetails: formData,
          }),
        });

        console.log("Cart Items:", cartItems);
        console.log("Total Amount:", totalAmount);
        console.log("Customer Details:", formData);

        if (response.ok) {
          setIsOrderSuccessful(true);
          alert("Order placed successfully! Check your email for confirmation.");
        } else {
          alert("There was an error placing your order. Please try again.");
        }
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Failed to place order.");
      } finally {
        setIsLoading(false);  // Stop loading
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const generateInvoice = () => {
    const dateTime = new Date().toLocaleString().replace(/[/,:]/g, '-'); // Format date and time
    const docDefinition = {
        content: [
            { text: 'Cholo Kini - Order Invoice', style: 'header' },
            { text: `Date: ${new Date().toLocaleString()}`, style: 'subheader' },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Name', bold: true }, formData.name],
                        [{ text: 'Address', bold: true }, formData.address],
                        [{ text: 'Phone', bold: true }, formData.phone],
                        [{ text: 'Email', bold: true }, formData.email],
                    ],
                },
                layout: 'lightHorizontalLines', // Layout for table with light horizontal lines
            },
            {
                text: 'Order Summary',
                style: 'subheader',
                margin: [0, 20, 0, 8],
            },
            {
                table: {
                    widths: ['*', 'auto', 'auto'],
                    body: [
                        [{ text: 'Product', bold: true }, { text: 'Quantity', bold: true }, { text: 'Price', bold: true }],
                        ...cartItems.map(item => [item.name, item.quantity, item.price*item.quantity]),
                        [{ text: 'Total', bold: true, colSpan: 2 }, {}, { text: totalAmount.toFixed(2) }], // Show total amount here
                    ],
                },
                layout: 'lightHorizontalLines',
            },
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                margin: [0, 0, 0, 10],
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5],
            },
        },
    };

    pdfMake.createPdf(docDefinition).download(`Invoice_${dateTime}.pdf`);
};

  if (cartItems.length === 0) {
    return <p className="empty-cart">No items in cart.</p>;
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h2>{item.name}</h2>
            <p>Price: BDT {item.price}</p>
            <div className="cart-item-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total Amount: BDT {totalAmount}</h2>
        <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Summary</h2>
            <div>
              <h3>Products:</h3>
              {cartItems.map((item) => (
                <p key={item.id}>{item.name} (BDT {item.price} x {item.quantity} piece)</p>
              ))}
              <h3>Total Amount: BDT {totalAmount}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}

              {/* Show loading spinner or Place Order button */}
              {isLoading ? (
                <div className="loading-spinner">Placing Order...</div>
              ) : isOrderSuccessful ? (
                <button type="button" onClick={generateInvoice} className="download-invoice-button">Download Invoice</button>
              ) : (
                <button type="submit">Place Order</button>
              )}

              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;