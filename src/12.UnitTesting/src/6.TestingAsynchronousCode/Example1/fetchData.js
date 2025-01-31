export const fetchData = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!')
        }, 1000)
    })
}