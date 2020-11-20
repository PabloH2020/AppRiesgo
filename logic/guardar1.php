
<?php

include("conexion.php");

if( isset($_POST['final']) ){


    $name = trim($_POST['name']);
    $actprinc = trim($_POST['actprinc']);
    $partpr = trim($_POST['partpr']);
    $actsec = trim($_POST['actsec']);
    $partsec = trim($_POST['partsec']);
    $personal = trim($_POST['personal']);
    $activos = trim($_POST['activos']);
    $activosText = trim($_POST['activosText']);
    $dem = trim($_POST['dem']);
    $riesgos = trim($_POST['riesgos']);
    $v2 = trim($_POST['v2']);
    $v1 = trim($_POST['v1']);
    $vactual = trim($_POST['vactual']);
    $ml2 = trim($_POST['ml2']);
    $ml1 = trim($_POST['ml1']);
    $mlactual = trim($_POST['mlactual']);
    $vml2 = trim($_POST['vml2']);
    $vml1 = trim($_POST['vml1']);
    $ventasml = trim($_POST['ventasml']);
    $mex2 = trim($_POST['mex2']);
    $mex1 = trim($_POST['mex1']);
    $mexterno = trim($_POST['mexterno']);
    $vme2 = trim($_POST['vme2']);
    $vme1 = trim($_POST['vme1']);
    $ventasme = trim($_POST['ventasme']);
    $vprom2 = trim($_POST['vprom2']);
    $vprom1 = trim($_POST['vprom1']);
    $vpromedio = trim($_POST['vpromedio']);
    $res2 = trim($_POST['res2']);
    $res1 = trim($_POST['res1']);
    $res = trim($_POST['res']);
    $resVts2 = trim($_POST['resVts2']);
    $resVts1 = trim($_POST['resVts1']);
    $resVts = trim($_POST['resVts']);
    $gan2 = trim($_POST['gan2']);
    $gan1 = trim($_POST['gan1']);
    $ganancias = trim($_POST['ganancias']);
    $actpas2 = trim($_POST['actpas2']);
    $actpas1 = trim($_POST['actpas1']);
    $actpas = trim($_POST['actpas']);
    $comm = trim($_POST['comm']);
    $deuda = trim($_POST['deuda']);
    $prestamo = trim($_POST['prestamo']);
    $deudacp = trim($_POST['deudacp']);
    $vposteriores = trim($_POST['vposteriores']);
    $vultimo = trim($_POST['vultimo']);
    $dtvp = trim($_POST['dtvp']);
    $dtvu = trim($_POST['dtvu']);
    $povp = trim($_POST['povp']);
    $povu = trim($_POST['povu']);
    $financ = trim($_POST['financ']);
    $fechaRegistro = date("d/m/y");

    $insertar = "INSERT INTO empresas(nombre, actPrincipal, participacionActPrincipal, actSecundaria, participacionActSecundaria, personalEmpleado, activos, activosDescripcion, demanda, riesgos, ventas2, ventas1, ventasActual,mercadoLocal2, mercadoLocal1, mercadoLocalActual, PorcentajeVtasMercadoLocal2,PorcentajeVtasMercadoLocal1, PorcentajeVtasMercadoLocalActual, mercadoExterno2, mercadoExterno1, mExternoActual, PorcentajeVtasMExterno2, PorcentajeVtasMExterno1, PorcentajeVtasMExternoActual, VtasPromedio2, VtasPromedio1,VtasPromedioActual, resultado2, resultado1, resultadoActual, rentabilidadSobreVtas2, rentabilidadSobreVtas1, rentabilidadSobreVtasActual, ganancias2, ganancias1, gananciasActual, pasivoSobreActivo2, pasivoSobreActivo1, pasivoSobreActivoActual, situacionPatrimonial, deudaConOtrasEntidades, prestamo, deudaConPrestamo, VtasPromedioPosteriores, VtasPromedioUltimo, deudaSobreVentasPosteriores, deudaSobreVtasUltimo, prestamoSobreVentasPosteriores, prestamoSobreVentasUltimo, PorcentajeFinanciacionSobreTotalDeDeuda, fechaRegistro) VALUES ('$name','$actprinc','$partpr','$actsec','$partsec','$personal','$activos','$activosText','$dem','$riesgos','$v2','$v1','$vactual','$ml2','$ml1','$mlactual','$vml2','$vml1','$ventasml','$mex2','$mex1','$mexterno','$vme2','$vme1','$ventasme','$vprom2','$vprom1','$vpromedio','$res2','$res1','$res','$resVts2','$resVts1','$resVts','$gan2','$gan1','$ganancias','$actpas2','$actpas1','$actpas','$comm','$deuda','$prestamo','$deudacp','$vposteriores','$vultimo','$dtvp','$dtvu','$povp','$povu','$financ','$fechaRegistro')";

    $query = mysqli_query($conectar, $insertar);
    
    
    
    if($query){   
        
        
        echo "El ingreso ha sido correcto";
        if ( ( $activos + $res ) > ( $deudacp )  &&    ( $partpr + $partsec ) > 30   &&   ( $deudacp / $vposteriores ) < 0.5    &&   ( $deudacp / $vultimo ) < 0.5   ){
            $texto = "*Los activos y el resultado del último ejercicio superan a la deuda con el préstamo considerado.<br><br><br>* Tiene un gran porcentaje de participación en los sectores en los que participa, mayor al 30% en la suma.<br><br><br>* La tasa que se compone de Deuda Total / Ventas Proyectadas Posteriores  , es menor al 50%.<br><br><br>* La tasa que se compone de Deuda Total / Ventas en el Último ejercicio  , es menor al 50%.<br><br><br><b>RESULTADO : ASEGURABLE !!!</b>";
            $body = $texto;
            $color = 'Verde';
            $insercion = "INSERT INTO resultadosanalisis( nombre, resultadoAnalisis,Color) VALUES ('$name','$texto','$color')";

            header("Location: ../verde.html");
            
            
        }else if ( ( ( $activos + $res ) > ( $deudacp )  && ( $deudacp / $vposteriores ) < 0.5  ) || ( ( $activos + $res ) > ( $deudacp )  && ( $deudacp / $vultimo ) < 0.5  )){
           $texto = "* Los activos y el resultado del último ejercicio superan a la deuda con el prestamo considerado.<br><br><br>* * Una de las tasas que analiza Deuda Total / Ventas Proyectadas es menor al 50%.<br><br><br><b>RESULTADO : ASEGURABLE INICIALMENTE !!!  DEBE ESTIMARSE CON PRECISIÓN EL NIVEL DE VENTAS Y LOS COSTOS OPERATIVOS </b>.";
           $body = $texto;
           $color = 'Amarillo';
           $insercion = "INSERT INTO resultadosanalisis(nombre, resultadoAnalisis,Color) VALUES ('$name','$texto','$color')";

           header("Location: ../amarillo.html");

           
        }else if( ( $activos + $res ) <= ( $deudacp ) ){
            $texto = "* Los activos y el resultado del último ejercicio fallan en superar a la sumatoria de las deudas.<br><br><br>* Debe analizarse el proyecto de inversión cuidadosamente, y realizar un análisis de mercado para preveer aumentos en ventas que puedan cubrir el costo financiero.<br><br><br><b>RESULTADO : NO ASEGURABLE !!!  DEBEN CONTROLARSE ASIMISMO LOS COSTOS OPERATIVOS Y EL MARGEN DE GANANCIA </b>."; 
           $body = $texto;
           $color = 'Rojo';
           $insercion = "INSERT INTO resultadosanalisis( nombre, resultadoAnalisis,Color) VALUES ('$name','$texto','$color')";

           header("Location: ../rojo.html");

        };
        
        $query = mysqli_query($conectar, $insercion);

        //header("Location: ../index.html");
    }else{
        echo "incorrecto";
    }

}


?>