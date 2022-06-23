const API = "https://graph.facebook.com/";
const token ="EAAIKN9Hj2f0BADd9GQCp5tcERyjAWlCyaVhErKdQV6dLFS4D9CoZAZAGPIUOBnOXJSfpJZARmqy5sKZBLLyZCnq5KDttNeNvOZBqAJ8KQhjotlmzdFZAcyXD34zMS8dSFFSwhodPUjLyjCqWxoUFnBtFZCrTC32lUkIf2i7ZChPRdJwZDZD"
// Se corto la funcion y se pega en el metodo

const app1 = Vue.createApp({
    data() {
        return {
          busqueda : null,
          result : null,
          error : null,
        }
      },

    // La palabra ya no es necesaria ya que se usa un meotod
      methods: {
        async Buscar(){
          // esta supeditado depende del error
          this.result = this.error = null
          try {
            const response = await fetch(API + this.busqueda + "?fields=id,name,email,picture&access_token=" + token)
            if (!response.ok) throw new Error("Usuario no encontrado")
            console.log(response)
            //ahora quiero traer la info en formato json
            const data = await response.json()
            console.log(data)
            this.result = data //cambiar true por data
          } catch (error) {
            this.error = error
          } 

        }// Aqui se cerro el metodo buscar   
      }
}) // Montamos esta informacion en el html o en el div app

/*const Api =" https://graph.facebook.com/"
const token ="EAAIKN9Hj2f0BAIsIZAZCbf2xillBUyOnQQ4SytD0fWj30wzdZAM9RirceOwnSa1iWGaV8ZBSerVbFbdZAjh4LC5MGpLAocgeXu3t8Ovz01p9VlXXedZC36KXbz0Fp55Fi8mVEhEtpCeLYWkPu69hfzkXo4d3gFwd5k1gna4HZBICgZDZD"

const app = Vue.createApp({
    data() {
        return {
            busqueda : null,
            result : null,
            error : null,
        }
    },
    methods: {
        async Buscar(){
            this.result = this.error = null
            try {
                const response = await fetch(Api + this.busqueda  + "?fields=id,name,email,picture&access_token=" + token)
                if (!response.ok) throw new Error("Usuario no encontrado")
                const data = await response.json()
                console.log(data)
                this.result = data 
            }
            catch {
                this.error = error
            }
      }
    }
})
        v-brind:src=""
         */


