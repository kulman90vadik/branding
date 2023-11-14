import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader 
    speed={3}
    width={255}
    height={395}
    viewBox="0 0 255 395"
    backgroundColor="#5c5c5c"
    foregroundColor="#FFC700"
  >
    <rect x="0" y="0" rx="7" ry="7" width="240" height="240" /> 
    <rect x="20" y="254" rx="7" ry="7" width="210" height="17" /> 
    <rect x="47" y="332" rx="0" ry="0" width="40" height="25" /> 
    <rect x="105" y="332" rx="0" ry="0" width="40" height="25" /> 
    <rect x="167" y="332" rx="0" ry="0" width="40" height="25" /> 
    <rect x="70" y="295" rx="7" ry="7" width="100" height="17" /> 
    <rect x="0" y="369" rx="7" ry="7" width="240" height="18" />
  </ContentLoader>
  );
};

export default Loader;

