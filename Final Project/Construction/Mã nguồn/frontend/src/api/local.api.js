import axios from "axios";
import baseUrl from "./environment";

const addTransaction = async (transactionInfor) => {
    // let body = {
    //     username: "Trần Thế Chiến",
    //     createdAt: transactionInfor.createdAt,
    //     userId: transactionInfor.userId,
    //     bikeId: transactionInfor.bikeId,
    // }

    const formData = new URLSearchParams();

    formData.append("username", "Tran The Chien");
    formData.append("createdAt", transactionInfor.createdAt);
    formData.append("userId", transactionInfor.userId);
    formData.append("bikeId", transactionInfor.bikeId);

    // console.log(formData);

    try {
        return await axios.post(`${baseUrl}/transaction/add`, formData);
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