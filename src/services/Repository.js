export class Repository {
    constructor(dao, collection) {
        this.dao = dao
        this.collection = collection
    }

    get = async (params) => {
        return this.dao.get(params, this.collection)
    }

    save = async (data) => {
        return await this.dao.insert(data, this.collection)
    }

    update = async (id, data) => {
        return await this.dao.update(id, data, this.collection)
    }

    delete = async (id) => {
        return await this.dao.delete(id, this.collection)
    }

    getById = async (id) => {
        return await this.dao.getById(id, this.collection)
    }

    getByUser = async (username) => {
        return await this.dao.findByUser(username, this.collection)
    }

    delete = async (id) => {
        return await this.dao.remove(id, this.collection)
    }
}