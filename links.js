document.addEventListener("DOMContentLoaded", () => {
    // Array of link objects
    const links = [
        { url: "https://edu.tatuarte.cl/", text: "Edu Tatuarte" },
        { url: "https://learning.tatuarte.cl/", text: "Learning Tatuarte" },
        { url: "https://cascadingstylesheets.mciahh.org/", text: "Cascading Stylesheets" },
    ];

    // Create a container for the links
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    container.style.gap = "15px";
    container.style.margin = "20px";
    container.style.padding = "10px";
    document.body.appendChild(container);

    // Generate each link with styling and a close button
    links.forEach(link => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.width = "300px";
        wrapper.style.height = "100px";
        wrapper.style.display = "flex";
        wrapper.style.flexDirection = "column";
        wrapper.style.justifyContent = "center";
        wrapper.style.alignItems = "center";
        wrapper.style.transition = "transform 0.3s";
        wrapper.style.color = "white";
        wrapper.style.fontSize = "16px";

        // Create the link element
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.style.textDecoration = "none";
        linkElement.style.color = "white";
        linkElement.style.fontWeight = "bold";

        // Close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.style.position = "absolute";
        closeButton.style.top = "5px";
        closeButton.style.right = "5px";
        closeButton.style.background = "transparent";
        closeButton.style.color = "red";
        closeButton.style.border = "none";
        closeButton.style.fontSize = "18px";
        closeButton.style.cursor = "pointer";

        // Close button functionality
        closeButton.addEventListener("click", () => {
            container.removeChild(wrapper);
        });

        // Add hover effect to the box
        wrapper.addEventListener("mouseover", () => {
            wrapper.style.transform = "scale(1.05)";
        });
        wrapper.addEventListener("mouseout", () => {
            wrapper.style.transform = "scale(1)";
        });

        // Append the link and close button to the wrapper
        wrapper.appendChild(linkElement);
        wrapper.appendChild(closeButton);

        // Append the wrapper to the container
        container.appendChild(wrapper);
    });
});
