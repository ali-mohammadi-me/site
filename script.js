window.addEventListener('DOMContentLoaded', (event) => {
    fetch('config.txt')
        .then(response => response.text())
        .then(base64Url => {
            var targetUrl = atob(base64Url.trim());
            
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", targetUrl);
            ifrm.setAttribute("id", "_view_frame");
            ifrm.style.width = "100%";
            ifrm.style.height = "100%";
            ifrm.style.border = "none";
            
            var container = document.getElementById("app_container");
            if (container) {
                container.appendChild(ifrm);
            }

            // این خط لودینگ را بعد از ساخته شدن iframe مخفی می‌کند
            var loader = document.getElementById('loader');
            if (loader) {
                loader.style.display = 'none';
            }
        })
        .catch(err => console.error("Error loading config:", err));
});
