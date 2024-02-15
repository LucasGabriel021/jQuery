# jQuery Object

<ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
</ul>
<script js="jquery.js"></script>
<script>
    $('li').dblclick(function() {

    var $this = $(this); // Trnaformando um elemento do DOM this em jQuery Object.

    $this.fadeOut(function() {
        $this.remove();
    })
});
</script>