        /*let numero1 = 5;
        let numero2 = 3;
        let suma = numero1 + numero2;
        console.log(typeof(suma));
        console.log(suma);*/

        //EL LINK DEMO DE LOS JQUERY ES RECOMENDABLE BORRAR YA QUE TRAEN PUBLICIDAD

        class Csuma{

            constructor(numero1, numero2){
                this.numero1=numero1;
                this.numero2=numero2;
            }

            sumaN(){
                return this.numero1+this.numero2;
            }

        }
        //funtion se usa cuando un metodo esta fuera de una clase
        function sumarNumeros(){
            let var1 = parseInt(document.getElementById("txtPrimerN").value);
            let var2 = parseInt(document.getElementById("txtSegundoN").value);
            let obj = new Csuma(var1,var2);
            document.getElementById("suma").innerText=obj.sumaN();
        }