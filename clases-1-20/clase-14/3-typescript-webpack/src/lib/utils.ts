export const getTime = () => {
    return {
        fyh: new Date().toLocaleString(),
        timestamp: Date.now()
    }
}