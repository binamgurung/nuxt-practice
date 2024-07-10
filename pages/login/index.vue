<template>
  <div class="parent-sign-up">
    <v-card class="child-sign-up mt-8 pt-4">
      <v-card-text>
        <v-row class="px-6">
          <v-col cols="12" md="12" lg="12">
            <v-text-field
              label="Enter User Name"
              type="text"
              v-model="user.username"
            ></v-text-field>
            <span v-for="error in v$.username.$errors" style="color: red">
              {{ error.$message }}</span
            >
          </v-col>
          <v-col cols="12" md="12" lg="12">
            <v-text-field
              label="Enter Password"
              type="password"
              v-model="user.password"
            ></v-text-field>
            <span v-for="error in v$.password.$errors" style="color: red">
              {{ error.$message }}</span
            >
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="mb-6">
        <v-btn
          class="px-6 ml-4"
          color="primary"
          style="width: 95%; background: black"
          @click.prevent="login"
          >Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = reactive({
  username: "",
  password: "",
});

const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage("The email field is required", required),
    },
    password: {
      required: helpers.withMessage("The password field is required", required),
    },
  };
});
const v$ = useVuelidate(rules, user);

const router = useRouter();

const login = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    await authenticateUser(user);
    if (authenticated) {
      router.push("/").catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped></style>
