<template>
  <v-app>
    <!-- Abrir o popup (dialogo) -->
    <v-btn @click="dialog = true">
      Abrir Formmulario de Cadastro
    </v-btn>

    <!-- Definindo o popup (dialogo) -->
     <v-dialog v-model="dialog" max-width="500px" >
        <v-card height="300px">
          <v-card-title id="headline">Cadastro</v-card-title>

          <v-card-text>
            <CadastroForm @click="handleSubmit"/>
          </v-card-text>

          <v-card-actions>
            <v-btn color="red" text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="blue" @click="handleSubmit">Enviar</v-btn>
          </v-card-actions>

        </v-card>
     </v-dialog>

  </v-app>
</template>

<script>
import CadastroForm  from "@/components/CadastroForm.vue"

export default {
  name: 'HomeView',
  components:{
    CadastroForm
  },
  data(){
    return {
      dialog: false,
    };
  },
  methods: {
    handleSubmit(data){
      console.log("Cadastro realizado!!", data);
      this.dialog = false; /* fecha o popup */
    }
  }
}
</script>

<style scoped>
.v-card-actions {
  display: flex;
  justify-content: space-between;
}
</style>
