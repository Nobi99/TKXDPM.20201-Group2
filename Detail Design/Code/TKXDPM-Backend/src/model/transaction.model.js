import connection from '../config/database.config';

const addTransaction = (transaction) => {
    const query = `INSERT INTO transaction (username, bike_id, created_at, user_id) VALUES("${transaction.username}", ${transaction.bikeId}, ${transaction.createdAt}, ${transaction.userId})`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result, kq) => {
            if (err) throw err;
            resolve(result);
        });
    })
}

const updateTransaction = (data) => {
    const query = `UPDATE transaction SET fee = ${data.fee}, end_at = ${data.endAt} WHERE id = ${data.transactionId}`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result, kq) => {
            if (err) throw err;
            else resolve(result);
        });
    })
}

const TransactionModel = {
    addTransaction,
    updateTransaction
}

export default TransactionModel;