import { validate } from "../src/client/js/validateURL"

describe("Testing the validation functionality", () => {
    test("Testing the validate() function", () => {
           expect(validate(`https://api.meaningcloud.com/sentiment-2.1?lang=en&model=general&txt=some text`)).toEqual(true);
           expect(validate(`some text not a url`)).toEqual(false);
})});