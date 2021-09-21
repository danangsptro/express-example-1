const DashboardController = {
    Hallo (req, res){
        res.render('../views/backend/page/dataDiri/index.ejs')
    },

    testAja(req, res){
        res.render('../views/backend/page/home.ejs')
    },
}

export default DashboardController