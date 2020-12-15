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
    const updateBike = {
        bikeId: req.body.transactionInfor.bikeId,
        stationId: req.body.transactionInfor.stationId,
    }
    try {
        BikeModel.returnBike(updateBike).then(async () => {
            const kq = await TransactionModel.updateTransaction(req.body.transactionInfor);
            res.send({ data: kq, status: 200 });
        });
    }
    catch (err) {
        res.send({ msg: "Fail to finish!! Try again" });
    }
}

export {
    addTransaction,
    updateTransaction
}