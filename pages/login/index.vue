<template>
  <div class="parent-sign-up">
    <v-card class="child-sign-up mt-8 pt-4">
      <v-card-text>
        <v-row class="px-6">
          <v-col cols="12" md="12" lg="12">
            <v-text-field
              label="Enter User Name"
              type="text"
              v-model="userName"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12" lg="12">
            <v-text-field
              label="Enter Password"
              type="password"
              v-model="password"
            ></v-text-field>
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

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
const userName = ref("");
const password = ref("");

const user = ref({
  username: "emilys",
  password: "emilyspass",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
  }
};

definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
</script>

<style lang="scss" scoped></style>
