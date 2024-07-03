<template>
  <div class="parent-sign-up">
    <v-card class="child-sign-up mt-8">
      <v-card-title>User Sign Up</v-card-title>
      <v-row class="px-6">
        <v-col cols="12" md="6" lg="6">
          <v-text-field
            label="Enter First Name"
            type="text"
            v-model="firstName"
            required
          ></v-text-field>
          {{ firstName }}
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-text-field
            label="Enter Last Name"
            type="text"
            v-model="lastName"
          ></v-text-field>
          {{ lastName }}
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-text-field
            label="Enter your email address"
            type="text"
            v-model="email"
            email
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-radio-group v-model="gender" inline>
            <v-radio label="Male" value="male"></v-radio>
            <v-radio label="Female" value="female"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <span>
            <label for="">How did you know us?</label>
          </span>
          <v-row>
            <v-col cols="6">
              <v-checkbox
                value="facebook"
                v-model="infos"
                label="Facebook"
              ></v-checkbox>
              <v-checkbox
                value="instagram"
                v-model="infos"
                label="Instagram"
              ></v-checkbox>
            </v-col>
            <v-col cols="6">
              <v-checkbox value="ads" v-model="infos" label="Ads"></v-checkbox>
              <v-checkbox
                value="friends"
                v-model="infos"
                label="Friends"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            label="I have read terms and policies"
            v-model="termsPolicies"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const gender = ref("male");
const email = ref("");
const termsPolicies = ref("");
const infos = ref([]);
</script>

<style lang="scss" scoped></style>
