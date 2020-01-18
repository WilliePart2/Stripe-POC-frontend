const logger = groupName => ({
    log(message) {
        groupName && console.group(groupName);

        message && console.log(message);

        groupName && console.groupEnd(groupName);
    },
});

module.exports = logger;
