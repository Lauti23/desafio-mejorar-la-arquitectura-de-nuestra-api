export const render = (req, res) => {
    console.log(req.user)
    res.render("profile.hbs", { user: req.user.username })
}