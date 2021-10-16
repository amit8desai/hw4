const Helpers = require("./Helpers")
// @ponicode
describe("Helpers.geocodeAndGetWeather", () => {
    test("0", async () => {
        await Helpers.geocodeAndGetWeather("0.0.0.0")
    })

    test("1", async () => {
        await Helpers.geocodeAndGetWeather("192.168.1.5")
    })

    test("2", async () => {
        await Helpers.geocodeAndGetWeather(undefined)
    })
})

// @ponicode
describe("Helpers.icon", () => {
    test("0", () => {
        let callFunction = () => {
            Helpers.icon("Investment Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Helpers.icon("clear-night")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Helpers.icon("snow")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Helpers.icon("clear-day")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Helpers.icon("wind")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Helpers.icon(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
