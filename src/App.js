import { useState } from "react";

function App() {
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const selectSize = (e) => setSize(e.target.value);
  const updateContactField = (e) => setContactInfo(e.target.value);
  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={submitOrder}>
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size</label>
          <select
            id="select-size"
            value={size}
            onChange={selectSize}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <h3>Contact Info</h3>
          <input
            type="text"
            value={contactInfo}
            id="email"
            placeholder="email address"
            onChange={updateContactField}
          />
        </div>

        <div>
          <p>
            Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
          </p>
          <button type="submit">Submit Order</button>
        </div>
      </form>

      {orderIsSubmitted && <h2>Thanks for your order!</h2>}
    </div>
  );
}

export default App;
