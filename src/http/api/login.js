import service from '../index'

export function loginData(url, data) {
    return new Promise((resolve, reject) => {
        service.post(url, data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}