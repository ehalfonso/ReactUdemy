/**@jest-ebvironment jsdom*/
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Test in <FirstApp/>", () => {
  const title = "Hello,I'm Iron man";
  const subtitle = "I'm subtitue";
  test("should match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('should show a message "Hello, I\'m Iron MAn"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("should show the title in a h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("should show the sent subtitle by props", () => {
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
