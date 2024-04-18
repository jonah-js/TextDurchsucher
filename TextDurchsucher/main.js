var btn = document.getElementById('btn');
function scanner(){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var finish = input1.includes(input2);
    document.getElementById("p").textContent = finish;
}
btn.onclick = scanner;

/*
let hel = prompt("Welchen Text");
let input = prompt("wonach suchen?");
let hel1 = hel.includes(input);
console.log(hel1);*/







/*<script>
    $("#mybtn").click(function(){
        console.log('clicked')
    });
</script>*/

