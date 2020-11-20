<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/styles3.css">
</head>
<body>
    <header>
        <div class="contPrincipal">
            <div class="up1">
                <img src="img/bank.svg" alt="imagen banco">
                <h1>Análisis de Riesgo Crediticio</h1>
            </div>

            <div class="down1">
                <ul>
                    <li>
                        <img src="img/sheet.svg" alt="nuevo documento">
                        <a href="appRiesgoCrediticio/newAnalysis.html" id="new"><p>Nuevo Análisis</p></a>
                    </li>
                    <li>
                        <img src="img/archives.svg" alt="listado de analisis">
                        <a href="appRiesgoCrediticio/analisisAnteriores.php" id="otros"><p>Ver Análisis Anteriores</p></a>
                    </li>
                    <li>
                        <img src="img/ayuda.svg" alt="ayuda">
                        <a href="appRiesgoCrediticio/help.html" id="help"><p>Help</p></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <div class="enter">
        <input id="ingreso" type="text" placeholder="Ingrese nombre del cliente">
        <button id="buscar" >Buscar</button>
    </div>
    



    <script>
        
        window.addEventListener('load',()=>{
            history.replaceState("","anteriores","/AnalisisAnteriores");
        })


        let but = document.querySelector('#buscar');

        but.addEventListener('click',()=>{

            let cardName = Array.from(document.querySelectorAll('h2'));
            let inp = document.querySelector('#ingreso');
            
            cardName.forEach( (card)=>{
                if ( card.innerHTML != inp.value ){
                    let box = document.querySelector(`.${card.innerHTML}`);
                    box.style.display = "none";
                    card.style.display ="none";
                }
            });

            
        })

    </script>

    <?php include("logic/extraer.php"); ?>
    
</body>
</html>

