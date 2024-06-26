import ReactDOM from "react-dom/client";
import { GlobalProvider } from "@/providers";
import App from "@/App";

import "@/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<GlobalProvider>
		<App />
	</GlobalProvider>
);
