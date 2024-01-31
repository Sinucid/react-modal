import { isFirefox } from "./isFirefox";

describe("isFirefox", () => {
    const mockedAgent = jest.spyOn(window.navigator, 'userAgent', 'get');

    test("when browser is firefox", () => {
        mockedAgent.mockImplementation(() => 'Firefox');
        expect(isFirefox()).toBe(true);
    });

    test("when browser is not firefox", () => {
        mockedAgent.mockImplementation(() => 'Safari');
        expect(isFirefox()).toBe(false);
    });
});