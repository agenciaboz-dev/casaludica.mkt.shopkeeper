export class Session {
    static key = `casaludica.mkt:user`
    static clear() {
        localStorage.removeItem(Session.key)
    }
    static get() {
        const data = localStorage.getItem(Session.key)
        if (data) {
            const user = JSON.parse(data) as User
            return user
        }
    }

    constructor(user: User) {
        localStorage.setItem(Session.key, JSON.stringify(user))
    }
}
