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
        const kq = await axios.post(`${baseUrl}/transaction/add`, formData);
        console.log(kq);
        return kq;
    } catch (err) {
        console.log(err);
    }
}

const updateTransaction = async (bikeId, endAt, transactionId, stationId, fee) => {
    const formData = new URLSearchParams();

    formData.append("bikeId", bikeId);
    formData.append("transactionId", transactionId);
    formData.append("endAt", endAt);
    formData.append("stationId", stationId);
    formData.append("fee", fee);


    try {
        const result = await axios.post(`${baseUrl}/transaction/update`, formData);
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