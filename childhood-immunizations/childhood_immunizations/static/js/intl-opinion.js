var divElement = document.getElementById('viz1583953293342');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='1280px';vizElement.style.height='769px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);