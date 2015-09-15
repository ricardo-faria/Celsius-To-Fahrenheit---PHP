var main ={
    init: function(){
        main.setBehavior();
    },
    
    setBehavior:function(){        
        document.getElementById('calculate').addEventListener('click', function(){
            var form = document.querySelector('form');
            main.calculate(form);
        });
    },
    
    calculate: function(form){
        var temp = parseFloat(form.tempCelsius.value);
        $.ajax({
            url: "php/Calculate.php",
            data: {'temp':temp},
            success: function(fahrenheit){
                main.showResult(fahrenheit);
            },
            error: function(){
                alert('error');
            }
        });
    },
    
    showResult: function(result){
        document.getElementById("tempFahrenheit").innerHTML = result;
    }
}

main.init();