/* Handler function starts here */
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: `Welcome - ${event.message}`
    }
}
/* Handler function ends here */