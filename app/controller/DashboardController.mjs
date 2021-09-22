import DataDiri from "../model/mongo-model/service.mjs"

const DashboardController = {
    async getDataDiri(req, res) {
        const data = await DataDiri.find({})
        res.render('../views/backend/page/dataDiri/index.ejs', { datas: data })
    },

    dashboard(req, res) {
        res.render('../views/backend/page/home.ejs')
    },
}

export default DashboardController