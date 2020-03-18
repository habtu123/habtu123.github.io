<div>no ul here </div>
<div>
    This does contain a ul.
    <ul>
        <li>the first item</li>
        <li>the second item</li>
    </ul>
</div>
<script>
$("div:has(ul)").css("color", "blue");
</script>