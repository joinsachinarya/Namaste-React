import { render } from "@testing-library/react";
import Header from "../Header";
import store from "../../store/store"
import { Provider } from "react-redux";


test("logo should be in the header", () => {
    const header = render(<Provider store={store}>
        <Header />
    </Provider>)
    console.log(header);
})
