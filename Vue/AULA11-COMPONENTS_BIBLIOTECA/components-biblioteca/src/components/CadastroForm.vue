<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- lazy-validation = validação preguiçosa -->
    <v-text-field
      v-model="operacao"
      label="Operação"
      required
    ></v-text-field>

    <!-- duração -->
    <VueTimepicker v-model="duracao"
      format="HH"
      :minute-step="60"      
      :show-seconds="false"  
      placeholder="Escolha a hora"
      type="text"
    ></VueTimepicker>

<!--     <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
 -->
  </v-form>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
  data() {
    return {
      operacao: "", 
      duracao: null,
      valid: true
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
      }
    },
  },
  components: {VueTimepicker}
};
</script>