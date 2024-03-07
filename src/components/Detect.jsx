import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Detect() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [pendingTransactions, setPendingTransactions] = useState([]);

  useEffect(() => {
    // Fetch and update pending transactions on component mount
    const fetchPendingTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pending-transactions');
        setPendingTransactions(response.data);
      } catch (error) {
        console.error('Error fetching pending transactions:', error.message);
      }
    };

    fetchPendingTransactions();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const createTransaction = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create-transaction', { amount, description });
      console.log('Transaction created:', response.data);

      // Update the list of pending transactions after creating a new one
      setPendingTransactions([...pendingTransactions, response.data]);
    } catch (error) {
      console.error('Error creating transaction:', error.message);
    }
  };

  const approveTransaction = async (id) => {
    try {
      await axios.put(`http://localhost:3000/approve-transaction/${id}`);
      console.log('Transaction approved and completed.');

      // Remove the approved transaction from the list of pending transactions
      setPendingTransactions(pendingTransactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error('Error approving transaction:', error.message);
    }
  };

  return (
    <div>
      <h1>Transaction Approval App</h1>
      <div>
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button onClick={createTransaction}>Create Transaction</button>
      </div>
      <div>
        <h2>Pending Transactions</h2>
        <ul>
          {pendingTransactions.map(transaction => (
            <li key={transaction.id}>
              Amount: {transaction.amount}
              <input/>, Description: {transaction.description}<input/>
              <button onClick={() => approveTransaction(transaction.id)}>Approve</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detect;
