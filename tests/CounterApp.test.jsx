import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/components/CounterApp";

describe("Test in CounterApp", () => {
  const initialValue = 10;
  test("should do to match with snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });
  test("should show the initial value 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });
  test("should add with the button +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });
  test("should subtract with the button -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    // screen.debug();
    expect(screen.getByText("9")).toBeTruthy();
  });
  test("should work the reset button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("10")).toBeTruthy();
  });
});
