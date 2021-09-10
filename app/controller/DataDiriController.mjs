import service from "../model/mongo-model/service.mjs"

const DataDiriController = {

    async index (req, res) {
        try {
            const data = await service.find({})
            res.json({
                status: true,
                data: data
            })
        } catch (error) {
            res.json({
                status: false,
                data: error.message
            })
        }
    }
}

export default DataDiriController