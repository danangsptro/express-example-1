import DataDiri from "../model/mongo-model/service.mjs"

const DataDiriController = {

    async index(req, res) {
        try {
            const data = await DataDiri.find({})
            res.json({
                code: 200,
                status: true,
                data: data
            })
        } catch (error) {
            res.json({
                status: false,
                data: error.message
            })
        }
    },
    async store(req, res) {
        try {
            const params = {
                name: req.body.name,
                umur: req.body.umur,
                alamat: req.body.alamat
            }
            const test = new DataDiri(params)
            const result = await test.save()
            res.json({
                code: 201,
                status: true,
                data: result
            })

        } catch (error) {
            res.json({
                code: 404,
                status: false,
                data: error
            })
        }
    },

    async edit(req, res) {
        try {
            const id = req.params.id
            const { name, umur, alamat } = req.body
            let { type } = req.body

            const result = await DataDiri.findOneAndUpdate(
                { _id: id },
                {
                    name,
                    umur,
                    alamat
                }
            );
            if (typeof type === 'undefined' || typeof type === null || typeof type === '') {
                res.json({
                    status: 400,
                    message: "erorr gan"
                })
            } else{
                res.json({
                    status: 200,
                    message: "sukses gan",
                    data: result,
                })
            }
            result.save()
        } catch (error) {
            res.json({
                status: 401,
                status: false,
                data: error.message
            })
        }
    },

    async destroy(req, res) {
        try {
            const videoId = req.params.id
            const product = await DataDiri.deleteOne({ _id: videoId })
            if (product) {
                res.json({
                    code: 200,
                    status: true,
                    data: 'Data Diri has deleted'
                })
            } else {
                res.send({
                    code: 400,
                    status: false,
                    data: 'Failed'
                })
            }
        } catch (error) {
            res.send({
                code: 401,
                status: false,
                data: error.message
            })
        }
    },
}

export default DataDiriController