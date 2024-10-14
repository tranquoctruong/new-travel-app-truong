// Import the js file to test
import { validateInput } from "../../client/js/validateInput.js";

// Client side test for input validation
describe("Testing for the input validate function", () => {
    test("Testing the validateInput() function", () => {
        // Added mock alert to suppress jest error
        window.alert = jest.fn();

        const userInput = 
        { 
            to: "hanoi",
            from: "danang",
            startDate: "",
            endDate: ""
        }
        expect(validateInput(userInput)).toBe(false);
    })
});