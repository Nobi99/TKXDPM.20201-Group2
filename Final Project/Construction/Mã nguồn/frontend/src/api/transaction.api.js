import axios from "axios";
import crypto from "crypto";
import { interbankException } from "../exceptions/exceptions";

let card = {
    cardCode: "118609_group2_2020",
    owner: "Group 2",
    cvvCode: 546,
    dateExpired: 1125,
}

let baseUrl = 'https://ecopark-system-api.herokuapp.com';

let makeTransaction = (command, amount, createdAt, content) => {
    const transaction = {
        command: `${command}`,
        cardCode: "118609_group2_2020",
        owner: "Group 2",
        cvvCode: 546,
        dateExpired: 1125,
        transactionContent: content,
        amount: amount,
        createdAt: createdAt // time
    }
    console.log(transaction);
    return transaction;


}

const makeHashCode = (transaction) => {
    const hashObject = {
        secretKey: 'B0F8jDFXayo=',
        transaction: transaction
    }
    let transactionJson = JSON.stringify(hashObject);
    const hashCode = crypto.createHash('md5').update(transactionJson).digest('hex');
    console.log(hashObject);
    return hashCode;
}
/**
 * 
 * @param {*} command 
 * @param {*} amount 
 * @param {*} content 
 * @returns result from interbank api
 */

const payingCommand = async (command, amount, createdAt, content) => {
    const transaction = makeTransaction(command, amount, createdAt, content);
    const body = {
        version: "1.0.1",
        transaction: transaction,
        appCode: 'pdUeA3+12w==',
        hashCode: makeHashCode(transaction)
    }
    const result = await axios.patch(`${baseUrl}/api/card/processTransaction`, body);
    switch (result.data.errorCode) {
        case '01': throw new interbankException("");
        case '02': throw new interbankException("");
        case '03': throw new interbankException("");
        case '04': throw new interbankException("");
        case '05': throw new interbankException("");

        default:
    }
    return result;
}

const resetBalance = async () => {
    let resetBalanceBody = {
        cardCode: "118609_group2_2020",
        owner: "Group 2",
        cvvCode: 546,
        dateExpired: 1125
    };
    const result = await axios.patch(`${baseUrl}/api/card/reset-balance`, resetBalanceBody);
    console.log(result);
}

// const transaction = {
//     transactionId: 1,
//     userName: "Chiến Nobi",
//     startTime: 151416,
//     endTime: 141414,
//     bikeId: 1,
//     name: "Xe đạp đơn",
//     bikeCode: "C1N001",
//     hiringFee: 45000,
//     statusCode: 0, // 
//     message: "Giao dịch thành công"
// }

export {
    resetBalance,
    payingCommand
}