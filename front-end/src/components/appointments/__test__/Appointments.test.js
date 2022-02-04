import { render } from "@testing-library/react";
import Appointments from "../Appointments";


describe("display a list of apointments", () => {
  it("renders properly", () => {
    render(<Appointments />);
  });
  it("has a list container", () => {
    const { getByTestId } = render(<Appointments />);
   expect(getByTestId('appointments')).toBeInTheDocument();
  });
});
