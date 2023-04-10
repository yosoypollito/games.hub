import { Provider } from "react-redux";
import store from "@/redux/store";

import CreateAccount from "@/app/rooms/create.account";

export default function Room() {
  return (
    <Provider store={store}>
      <CreateAccount />
    </Provider>
  );
}
