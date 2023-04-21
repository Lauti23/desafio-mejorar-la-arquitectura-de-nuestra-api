const render = (req, res) => {
    res.render("index.hbs", {user: req.user})
}


export default {
    render
}