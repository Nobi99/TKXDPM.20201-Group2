const Transaction = {
    id: 'id INT AUTO_INCREMENT PRIMARY KEY',
    name: 'username VARCHAR(255) NOT NULL',
    hiringFee: 'fee INT NULL',
    bikeId: 'bike_id INT NOT NULL',
    userId: 'user_id INT NOT NULL',
    createdAt: 'created_at CHAR(255) NOT NULL',
    endAt: 'end_at CHAR(255) NULL',
    interbankTransactionId: 'interbank_transaction_id CHAR(255) NULL',
    foreignKey: 'FOREIGN KEY (bike_id) REFERENCES bike(bike_id) ON  DELETE CASCADE',
    foreignKeyUser: 'FOREIGN KEY (user_id) REFERENCES user(user_id) ON  DELETE CASCADE'
}

let createTransactionTableSQL =
    `CREATE TABLE transaction (${Transaction.id}, ${Transaction.name}, ${Transaction.hiringFee}, ${Transaction.bikeId}, ${Transaction.userId}, ${Transaction.createdAt}, ${Transaction.endAt}, ${Transaction.foreignKey})`;
export default createTransactionTableSQL;