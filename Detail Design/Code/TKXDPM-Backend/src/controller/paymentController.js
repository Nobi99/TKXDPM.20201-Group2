import { TransactionModel } from '../model/model';
import { BikeModel } from '../model/model';


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * adding Transaction to db
 */
const addTransaction = async (req, res) => {
    try {
        const transaction = req.body.body;
        const kq = await TransactionModel.addTransaction(transaction);
        res.send({ data: kq, status: 200 });
    }
    catch (err) {
        console.log(err);
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * update the transaction
 */

const updateTransaction = async (req, res) => {
    console.log(req.body.transactionInfor);
    // const updateBike = await BikeModel.updateBike();
    res.send({ data: kq, status: 200 });
    const kq = await TransactionModel.updateTransaction(req.body.transactionInfor);
}

export {
    addTransaction,
    updateTransaction
}