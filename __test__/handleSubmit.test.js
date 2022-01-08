// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"


// running the test causes a regeneratorRuntime error. Not sure what that is.
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
})});