import { userService } from "../services/services.config.js";

const getUsers = async (req, res) => {
    let results = await userService.get()
    res.send(results)
}

const saveUser = async (req, res) => {
    
}

const findByUser = async (req, res) => {
    let result = await userService.getByUser()
    res.send(result)
}

export default {
    findByUser
}