<template>

<v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar  color="#fd7132">
                            <v-toolbar-title>Sign Up</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation>
                                <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Name"
                                    required>
                                </v-text-field>
                                <v-text-field
                                    v-model="address"
                                    :rules="addressRules"
                                    label="Address"
                                    required>
                                </v-text-field>
                                <v-text-field
                                    v-model="bio"
                                    :rules="bioRules"
                                    label="Bio"
                                    required>
                                </v-text-field>
                                <v-text-field
                                    v-model="city"
                                    :rules="cityRules"
                                    label="City"
                                    required>
                                </v-text-field>

                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    required
                                ></v-text-field>
                        
                                <v-text-field
                                    v-model="phoneNum"
                                    :rules="phoneNumRules"
                                    label="Phone Number"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model="bannerUrl"
                                    label="Banner URL"
                                ></v-text-field>
                        
                                <v-text-field
                                    v-model="profileUrl"
                                    label="Profile URL"
                                ></v-text-field>
                                
                                <v-text-field
                                    v-model="password"
                                    :counter="10"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>

                                
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="restaurantSignUpRequest(name,address,bio,city,phoneNum,bannerUrl,profileUrl,email,password)">
                                Submit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
import { useRestaurantStore } from '@/stores/restaurantStore';
import { mapActions } from 'pinia';



    export default {
        name: 'RestaurantSignupComponent',
        data(){
            return{
            isAlert : false,
            valid: true,
            name: '',
            address: '',
            bio: '',
            city: '',
            phoneNum: '',
            email: '',
            password: '',
            bannerUrl: undefined,
            profileUrl: undefined,
            isValidCity: false,
            validCities: [
                "Calgary", 'Edmonton', 'Vancouver', 'Surrey', 'Winnipeg', 'Brandon', 'Moncton', 'Fredericton', "St. John's", "Mount Pearl",
                "Yellowknife", "Inuvik", "Halifax", "Sydney", "Iqaluit", "Arviat", "Toronto", "Ottawa", "Charlottetown", "Summerside", "Montreal",
                "Quebec City", "Saskatoon", "Regina", "Whitehorse", "Dawson City"
                ],
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            nameRules: [
                v => !!v || 'Name is required...',
            ],
            addressRules: [
                v => !!v || 'Address is required...',
            ],
            bioRules: [
                v => !!v || 'Bio is required...',
            ],
            phoneNumRules: [
                v => !!v || 'Phone Number is required...',
            ],
            cityRules: [
                v => !!v || 'City name is required...',
            ],
            passwordRules: [
                v => !!v || 'Password is required...',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],            
}
        },
        methods: {
        ...mapActions(useRestaurantStore,['restaurantSignUpRequest']),
        
        validate () {
            this.$refs.form.submit()
            },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
        },
}
</script>