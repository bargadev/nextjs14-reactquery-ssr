// app/page.js
import dynamic from "next/dynamic";

// Dynamically import the Page component and disable SSR
const PageContent = dynamic(() => import("./page-content"), {
  ssr: false, // Disable SSR for this component
});

export default PageContent;
