
var listItems = document.querySelectorAll("#myList li");

listItems.forEach(function(item) {
    
    item.addEventListener("click", function() {
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        
        item.style.backgroundColor = randomColor;
    });
});
