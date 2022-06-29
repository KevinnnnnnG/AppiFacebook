const API = "https://graph.facebook.com/";
const TOKEN = "?fields=id,name,email,picture&access_token=EAAIKN9Hj2f0BAB61nTlhGWeI3lZB2MvF9GtVOCzpfUBcRG7SrBj3XbA5zeAF9LTyNkJHj0MiMJbv4VeKlmArvfC3nRkd3lOkd58vrrMSH20tBCK4gqwVGtldi8xX7BUZAFYGpMiomI2ePRmwxZAri4kgsB24uZCDqKsE3i18QQZDZD"
// Se corto la funcion y se pega en el metodo

const app1 = Vue.createApp({
    data() {
        return {
          busqueda : null,
          result : null,
          error : null,
          favoritos: new Map()
        }
      },

      create(){
        const FavoritosGuardados = JSON.parse(window.localStorage.getItem("misfavoritos"))
         if (FavoritosGuardados?.length){
          const favoritosNew =  new Map (
           FavoritosGuardados.map(alias=>[alias.id, alias])
          )
          this.favoritos = favoritosNew
        }
      },

      computed:{
        estaFavoritos(){
          return this.favoritos.has(this.result.id);
        },
        TodosFavoritos (){
          // Pasamos la informaion a un autentico array
          return Array.from(this.favoritos.values());
          // el metodo values() traera los valores sin las clave
        }
      },

    // La palabra ya no es necesaria ya que se usa un meotod
      methods: {
        async Buscar(){
          // esta supeditado depende del error
          this.result = this.error = null
          try {
            const response = await fetch(API + this.busqueda  + TOKEN)
            if (!response.ok) throw new Error("Usuario no encontrado")
            console.log(response)
            //ahora quiero traer la info en formato json
            const data = await response.json()
            console.log(data)
            this.result = data //cambiar true por data
          } catch (error) {
            this.error = error
          } 
          finally {
            this.busqueda = null
          }
        }, // Aqui se cerro el metodo buscar   
        addFavorito(){
          this.favoritos.set(this.result.id , this.result)
          this.actualizarStorage()
        },

        RemoveraFavorito(){
          this.favoritos.delete(this.result.id )
          this.actualizarStorage()
        },
        actualizarStorage(){
          window.localStorage.setItem('misfavoritos', JSON.stringify (this.TodosFavoritos))
        },

        mostrarFavorito(parametro){
          // tipo array con objetos de javaScript o otro ripo json
          this.result = parametro

        }
      }
}) // Montamos esta informacion en el html o en el div app


