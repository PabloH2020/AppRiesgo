<?php

$inc = include("conexion.php");

if($inc){
    $consulta = "SELECT * FROM resultadosanalisis";
    $resultado = mysqli_query($conectar,$consulta);
    if ( $resultado ){
        while( $row = $resultado->fetch_array() ){
            
            $id = $row['idresultadosAnalisis'];
            $nombre = $row['nombre'];
            $resultadoAnalisis = $row['resultadoAnalisis'];
            $color = $row['Color'];

            ?>
            <div id="tarjetas" class="<?php  echo $nombre;   ?>">
                <h2><?php  echo $nombre;   ?></h2>
                <div>
                    <p>
                        <b>ID: </b> <?php echo $id;   ?> <br>
                        <b>Resultado del Análisis: </b><br><br> <?php echo $resultadoAnalisis;   ?> <br><br>
                        <b>Color del semáforo: </b> <?php echo $color;   ?> <br>
                        
                    </p>
                </div>

            </div>

            <?php

        }
    }
}





?>