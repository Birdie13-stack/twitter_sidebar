import "./sidebarLink.css";
 
function SidebarLink(
     { text, Icon } // <-- This is the prop
) {
  return (
    <div className="link">
     <Icon />
     <h2>{ text }</h2>

    </div>
  );
}

export default SidebarLink;