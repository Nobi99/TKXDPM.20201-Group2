const Transaction = {
    id: 'id INT AUTO_INCREMENT PRIMARY KEY',
    name: 'username VARCHAR(255) NOT NULL',
    hiringFee: 'fee INT NULL',
    bikeId: 'bike_id INT NOT NULL',
    userId: 'user_id INT NOT NULL',
    createdAt: 'create_at TIMESTAMP NOT NULL',
    endAt: 'end_at TIMESTAMP NULL',
    foreignKey: 'FOREIGN KEY (bike_id) REFERENCES bike(bike_id) ON  DELETE CASCADE'
}

let createTransactionTableSQL =
    `CREATE TABLE transaction (${Transaction.id}, ${Transaction.name}, ${Transaction.hiringFee}, ${Transaction.bikeId}, ${Transaction.userId}, ${Transaction.createdAt}, ${Transaction.endAt}, ${Transaction.foreignKey})`;
export default createTransactionTableSQL;