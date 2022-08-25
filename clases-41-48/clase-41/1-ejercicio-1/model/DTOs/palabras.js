function palabraDTO(palabra, id, timestamp) {
    return {
        ...palabra,
        id,
        timestamp
    }
}

export default palabraDTO