module.exports =  {

    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.getAllProducts()
            .then(response => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: "Something is wrong"})
            })
    },
    createOneProduct: (req,res,next) => {
        const db = req.app.get('db');
        console.log(req.body)
        const {productName, productPrice, imageUrl}= req.body
        console.log(productName)
        db.createOneProduct({productName, productPrice, imageUrl})
            .then((res) => res.sendStatus(200).send(res))
            .catch(err => {
                res.status(500).send({errorMessage: "Something is wrong"})
            })
    }

}
