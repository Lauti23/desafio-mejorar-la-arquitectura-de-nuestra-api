const render = (req, res) => {
    res.render("chat.hbs", { user: req.user.username })
}

export default {
    render
}