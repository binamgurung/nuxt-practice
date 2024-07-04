<template>
  <div class="parent-sign-up">
    <v-card class="child-sign-up mt-8" title="User Login">
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
          style="width: 95%; background: #005b96"
          @click.prevent="login"
          >Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
const userName = ref("");
const password = ref("");

const user = ref({
  username: "mor_2314",
  password: "83r5^_",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped></style>
