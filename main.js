function cafetera(aguaInicial) {
    let agua = aguaInicial;
    const capacidadMaxima = aguaInicial;
    
    function actualizarTanque() {
        let porcentaje = (agua / capacidadMaxima) * 100;
        document.getElementById('agua').style.height = porcentaje + "%";
    }
    
    return {
        hacerCafe: function() {
            if (agua >= 200) {
                agua -= 200;
                actualizarTanque();
                document.getElementById('status').innerText = `☕ Café servido.`;
            } else {
                document.getElementById('status').innerText = "⚠️ No hay suficiente agua para hacer café.";
            }
        },
        verAgua: function() {
            document.getElementById('status').innerText = `🔍 Agua disponible: ${agua}ml`;
        }
    };
}

const miCafetera = cafetera(1000);
function hacerCafe() { miCafetera.hacerCafe(); }
function verAgua() { miCafetera.verAgua(); }