import { render } from "@testing-library/react";
import AppointmentItem from "../AppointmentItem"


describe("display a list of apointments", () => {
  it("renders properly", () => {
    render(<AppointmentItem />);
  });
//   it("has a list container", () => {
//     const { getByTestId } = render(<AppointmentItem />);
//    expect(getByTestId('appointments')).toBeInTheDocument();
//   });
});
