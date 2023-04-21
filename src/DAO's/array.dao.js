export class UsersDaoArray {
    constructor() {
        this.users = []
    }

    get = async () => {
        return this.users
    }

    insert = async (user) => {
        if(this.users.length === 0) user.id = 1
        else user.id = this.users[this.users.length - 1].id + 1
        this.users.push(user)
        return user
    }


    getById = async (id) => {
        if(this.users.length === 0) return null
        const user = this.users.filter(user => user.id === id )
        return user
    }

    findByUser = async (username) => {
        if(this.users.length === 0) return null
        const user = this.users.filter(user => user.username === username)
    }
}