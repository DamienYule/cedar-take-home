import { render } from "@testing-library/react";
import AppointmentItem from "../AppointmentItem"


describe("renders a single list item", () => {
  it("renders properly", () => {
    render(<AppointmentItem />);
  });
//   it("has a list container", () => {
//     const { getByTestId } = render(<AppointmentItem />);
//    expect(getByTestId('appointments')).toBeInTheDocument();
//   });
});
