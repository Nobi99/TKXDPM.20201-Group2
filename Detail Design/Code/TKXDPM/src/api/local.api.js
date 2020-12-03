import axios from "axios";
import baseUrl from "./environment";

const addTransaction = async (transactionInfor) => {
    let body = {
        username: "Trần Thế Chiến",
        createdAt: transactionInfor.createdAt,
        userId: transactionInfor.userId,
        bikeId: transactionInfor.bikeId,
        deposite: transactionInfor.deposite
    }
    try {
        const result = await axios.post(`${baseUrl}/transaction/add`, { body });
        // const resultData = result.data.data;
        return result;
    } catch (err) {
        console.log(err);
    }
}

const updateTransaction = async (transactionInfor) => {
    try {
        const result = await axios.post(`${baseUrl}/transaction/update`, { transactionInfor });
        console.log(result)
        console.log("update transaction");
    } catch (err) {
        console.log(err);
    }
}

export {
    addTransaction,
    updateTransaction
}