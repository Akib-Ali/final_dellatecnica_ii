import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
const MetaTags = () => {
    const location = useLocation();
  
    // Define the meta tags for different pages
    const metaTags = {
      '/': {
        title: 'Best Woodworking and Panel Processing Machines | DELLATECNICA',
        keywords: 'Best Woodworking and Panel Processing Machines, Panel Processing Machines, Woodworking Machinery in India, Woodworking Machines, DELLATECNICA, Woodworking equipments, PROMAC Panel Processing, HOLZMAC Panel Processing Machines, CNC Machine Manufacturers in Ludhiana, Panel saw, Automatic Throughfeed edge banding Machine, Corner Rounding Machine, Dust Collectors, CNC Machines, High tech CNC Machines, Best Woodworking Machine Brands, Woodworking tools, Panel Processing Woodworking Machinery, Durable Woodworking Machines, Woodworking machine manufacturer, Woodworking machines in India',
        description: 'DELLATECNICA provides best variety of Woodworking and Panel Processing Machines. We offer top quality woodworking equipments of Holzmac and Promac Brand having machines like Panel saw, Beam Saw, Curvilinear Edge Bander, Automatic Throughfeed edge banding  Machine, CNC Nesting Machine and many more.'
      },
      '/about-us': {
        title: 'About-Us | DELLATECNICA',
        keywords: 'About us, about DELLATECNICA, about DELLATECNICA machines',
        description: 'At DELLATECNICA, we understand the importance of quality in the woodworking industry, which is why we only offer the highest quality machines to our customers.'
      },
      // Add more pages and their respective meta tags here
    };
  
    // Get the current page's meta tags
    const currentPageMetaTags = metaTags[location.pathname] || {};
  
    return (
      <Helmet>
        <title>{currentPageMetaTags.title}</title>
        <meta name="keywords" content={currentPageMetaTags.keywords} />
        <meta name="description" content={currentPageMetaTags.description} />
      </Helmet>
    );
  };

  
  export default MetaTags