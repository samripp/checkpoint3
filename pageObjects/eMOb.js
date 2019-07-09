var emCommand = {
    changeName: function (array) {
        this
            .waitForElementPresent('@hulk', 25000)
            .click('@hulk')
            .click('@name')
            .clearValue('@name')
            .setValue('@name', array.name)
            .click('@phone')
            .clearValue('@phone')
            .setValue('@phone', array.phone)
            .click('@email')
            .clearValue('@email')
            .setValue('@email', array.email)
            .click('@title')
            .clearValue('@title')
            .setValue('@title', array.title)
            .click('@save')
            .pause(2000)
        return this
    },
    addName: function (array) {
        this
            .waitForElementPresent('@addEmployee', 25000)
            .click('@addEmployee')
            .waitForElementPresent('@newEmployee', 25000)
            .click('@newEmployee')
            .click('@name')
            .clearValue('@name')
            .setValue('@name', array.name)
            .click('@phone')
            .clearValue('@phone')
            .setValue('@phone', array.phone)
            .click('@email')
            .clearValue('@email')
            .setValue('@email', array.email)
            .click('@title')
            .clearValue('@title')
            .setValue('@title', array.title)
            .click('@save')
            .click('@hulk')
            .click('@groot')
            .verify.valueContains('@name', 'Groot')
            .click('@deleteBtn')
            .api.acceptAlert()
        return this
    },
}


module.exports = {

    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [emCommand],
    elements: {

        id: '#employeeID',
        name: '[name="nameEntry"]',
        phone: '[name="phoneEntry"]',
        email: '[name="emailEntry"]',
        title: '[name="titleEntry"]',
        save: '#saveBtn',
        deleteBtn: '[name="delete"]',
        cancel: '[name="cancel"]',
        addEmployee: '[name="addEmployee"]',
        hulk: '[name="employee88894"]',
        newEmployee: {
            selector: '//*[text()="New Employee"]',
            locateStrategy: "xpath"
        },
        groot: {
            selector: '//*[text()="Groot"]',
            locateStrategy: "xpath"
        },

    }
}