export const formatErrorMessages = (messages) => {
    let errorMessage = ''
    if (typeof messages === 'string') {
        return messages
    }
    for (const key in messages) {
        errorMessage += `${messages[key].join(', ')}\n`
    }
    return errorMessage
}
