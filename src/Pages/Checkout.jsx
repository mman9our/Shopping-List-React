import React, { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted: ${name}, ${email}`);
  }

  return (
    <>
        <div className="header-checkout">
            <h2 className='checkout-title'>Order Details</h2>
        </div>

        <form onSubmit={handleSubmit}>
        <div>
            <h4 htmlFor="name">Name:</h4>
            <input
                    type="text"
                    placeholder='Enter your full name'
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <h4 htmlFor="email">Email:</h4>
            <input
                type="email"
                placeholder='Enter your email'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button className='btn-submit' type="submit">Checkout</button>
        </form>
    </>
);
}

export default Checkout;
