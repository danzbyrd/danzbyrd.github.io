        // function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('hwtheme', themeName);
            document.documentElement.className = themeName;
        }
        // function to toggle between light and dark theme
        function toggleTheme() {
            if (localStorage.getItem('hwtheme') === 'hw-theme-dark') {
                setTheme('hw-theme-light');
            } else {
                setTheme('hw-theme-dark');
            }
        }
        // Immediately invoked function to set the theme on initial load
        (function () {
	   if (localStorage.getItem('hwtheme') === 'hw-theme-dark') {
                setTheme('hw-theme-dark');
                document.getElementById('darkslider').checked = false;
            } else {
                setTheme('hw-theme-light');
              document.getElementById('darkslider').checked = true;
            }
	})();

function showDataWithImagesHW(topic) {
        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        function reportStatus() {
            if (oXHR.readyState == 4)               // Request completed.
                showTheList(this.responseText);     // All set. Now show the data.
        }
        oXHR.onreadystatechange = reportStatus;
        oXHR.open("GET", "/ads/table/json/"+topic+".json", true);   // true = asynchronous request, false = synchronous request.
        oXHR.send();
        function showTheList(json) {
            var arrItems = [];
            arrItems = JSON.parse(json);        // Populate array with JSON data.
            var div = document.getElementById('slider_'+topic);     // The parent <div>. 
            div.innerHTML = '';
            // Loop through data in the JSON array.
            for (i = 0; i <= arrItems.length - 1; i++) {
                // Create two <div> elements, one for the name and the other to show the image.
                var xname = arrItems[i].title;
                var ximg = '/ads/data/'+arrItems[i].path;                // The image source from JSON array.
                var xurl=arrItems[i].url;
                var slide  ='<div style=\"margin:2px;\"><a href="' + xurl  + '"><img src="' + ximg + '" style="height:90px" title="'+xname+'"  alt="' + xname+'"></a></div> ';
                div.innerHTML = div.innerHTML + slide;
            }
        }
    }


