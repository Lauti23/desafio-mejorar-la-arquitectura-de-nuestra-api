const render = (req, res) => {
    return res.render("login.hbs")
} 

const loginFailed = (req, res) => {
    return res.render("loginFailed.hbs")
}

export default {
    render,
    loginFailed
}