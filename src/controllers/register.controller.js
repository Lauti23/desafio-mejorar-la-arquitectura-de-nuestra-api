const render = (req, res) => {
    return res.render("register.hbs")
} 

const registerFailed = (req, res) => {
    return res.render("registerFailed.hbs")
}

export default {
    render, registerFailed
}