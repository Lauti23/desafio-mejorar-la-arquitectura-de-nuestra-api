export const render = (req, res) => {
    const { name, surname, email, phone, username, image } = req.user
    const user = {
        name,
        surname,
        email,
        phone,
        username,
        image
    }
    res.render("profile.hbs", { currentUser: user })
}