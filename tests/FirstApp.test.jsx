/**@jest-ebvironment jsdom*/
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Test in <FirstApp/>", () => {
  // test("should be match with the snapshot", () => {
  //   const title = "Hello, I'm Iron man";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });
  test("should show the title in h1", () => {
    const title = "Hello, Im Iron Man";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });
  test("should show the sent subtitle by props", () => {
    const title = "I'm iron man";
    const subtitle = "I'm subtitue";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
