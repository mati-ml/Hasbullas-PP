import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);

    if (item === "Internship Regulations" || item === "Reglamento de pasantia") {
      // Open the link in a new tab/window using window.location.href (full page reload)
      window.location.href = "https://alumnosfic.uai.cl/static/media/Reglamentopasantia2023.03a7175a58d5eebf27ea.pdf";
    } else {
      // Replace with actual URL generation logic based on the selected item (if needed)
      const targetUrl = `https://alumnosfic.uai.cl/static/media/Reglamentopasantia2023.03a7175a58d5eebf27ea.pdf/${item.toLowerCase()}`; // Example (optional)

      // Option 1: Using window.location.href (full page reload)
      window.location.href = targetUrl;

      // Option 2: Custom event and parent component handling (for potential SPA behavior)
      // window.dispatchEvent(new CustomEvent("navigate", { detail: targetUrl })); // Dispatch event (example)
    }

    setIsOpen(false);
  };

  return (
    <>
      <div style={{ backgroundColor: 'blue', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Welcome to UAI Internships</h1>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" onClick={toggleDropdown}>
            {selectedItem || "Select an item"}
          </button>
          {isOpen && (
            <ul className="dropdown-menu" style={{ display: "block" }}>
              {items.map((item, index) => (
                <li className="dropdown-item" key={item} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default ListGroup;

