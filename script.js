fetch('config.txt')
    .then(response => response.text())
    .then(base64Url => {
        var targetUrl = atob(base64Url.trim());
        var ifrm = document.createElement("iframe");
        
        // ۱. تعریف تابع حذف لودینگ در لحظه لود شدن کامل سایت
        ifrm.onload = function() {
            // یک تاخیر کوتاه برای اطمینان از رندر شدن کامل صفحه
            setTimeout(function() {
                var loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 500); 
        };

        ifrm.setAttribute("src", targetUrl);
        ifrm.setAttribute("id", "_view_frame");
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        ifrm.style.border = "none";
        ifrm.style.opacity = "0"; // ابتدا آی‌فریم را نامرئی می‌کنیم تا فلش سفید ایجاد نشود
        ifrm.style.transition = "opacity 0.5s ease"; // افکت ظاهر شدن نرم برای سایت
        
        var container = document.getElementById("app_container");
        if (container) {
            container.appendChild(ifrm);
            
            // ۲. بعد از لود شدن، آی‌فریم را ظاهر می‌کنیم
            ifrm.onload = function() {
                ifrm.style.opacity = "1"; // ظاهر کردن سایت
                setTimeout(function() {
                    var loader = document.getElementById('loader');
                    if (loader) {
                        loader.classList.add('hidden'); // محو کردن لودینگ
                    }
                }, 300);
            };
        }
    })
    .catch(err => console.error("Error:", err));


