import { TransactionModel } from '../model/model';

const addTransaction = (req, res) => {
    //     try {
    //         console.log(req.body);
    //         const kq = await TransactionModel.addTransaction();
    //         res.send({ data: kq, status: 200 });
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    console.log(req.body);
    res.send(req.body);
}

const updateTransaction = (req, res) => {
    console.log(req.body);

}

export {
    addTransaction,
    updateTransaction
}