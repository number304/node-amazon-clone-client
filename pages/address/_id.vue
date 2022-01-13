<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>New Address</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Update address</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>
                  Or pick up your packages at your convenience from our
                  self-service locations. To add an Amazon Pickup Point or
                  Locker, click
                  <a href="#">here</a>.
                </b>
              </div>
              <!-- Error Message -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <!-- Country / Region -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Country/Region</label>
                    <select class="a-select-option" v-model="country">
                      <option
                        v-for="country in countries"
                        :key="country.alpha2Code"
                        :value="country.name"
                      >
                        {{ country.name }}
                      </option>
                      <option></option>
                    </select>
                  </div>
                  <!-- Full name -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Full Name</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="fullname"
                      :placeholder="address.fullname"
                    />
                  </div>
                  <!-- Street Address -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Street Address</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.streetAddress"
                      v-model="streetAddress1"
                    />
                    <!-- Street Address 2 -->
                    <input
                      type="text"
                      class="a-input-text a-spacing-top-small"
                      style="width: 100%"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      v-model="streetAddress2"
                    />
                  </div>
                  <!-- City -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">City</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.city"
                      v-model="city"
                    />
                  </div>
                  <!-- State -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >State / Province / Region</label
                    >
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.state"
                      v-model="state"
                    />
                  </div>
                  <!-- Zip Code -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Zip Code</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.zipcode"
                      v-model="zipcode"
                    />
                  </div>
                  <!-- Phone Number -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Phone Number</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.phoneNumber"
                      v-model="phoneNumber"
                    />
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini"
                        >May be used to assist delivery</span
                      >
                    </div>
                  </div>
                  <div class="a-spacing-base a-spacing-top-medium">
                    <h3>Add delivery instructions</h3>
                  </div>
                  <!-- Delivery Instruction -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Do we need additional instructions to find this
                      address?</label
                    >
                    <textarea
                      style="height: 6em; width: 100%"
                      :placeholder="address.deliverInstructions"
                      v-model="deliverInstructions"
                    ></textarea>
                  </div>
                  <!-- Security code -->
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Do we need a security code or a call box number to access
                      this building?</label
                    >
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.securityCode"
                      v-model="securityCode"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Weekend delivery</label>
                    <a href="#">
                      <i class="fas fa-angle-down"></i> Which days can you
                      receive packages?
                    </a>
                  </div>
                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Make sure your address is correct</b>
                    </span>
                  </div>
                  <div>
                    <span
                      >If the address contains typos or other errors, your
                      package may be undeliverable.</span
                    >
                  </div>
                  <div class="a-spacing-top-small">
                    <span>
                      <a href="#">Tips for entering addresses</a>
                    </span>
                    <span>|</span>
                    <span>
                      <a href="#">APO/FPO address tips</a>
                    </span>
                  </div>
                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" @click="onUpdateAddress"
                          >Update address</span
                        >
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let countries = $axios.get("api/countries");
      let singleAddress = $axios.get(`api/address/${params.id}`);

      let [countriesResponse, addressResponse] = await Promise.all([
        countries,
        singleAddress,
      ]);

      return {
        countries: countriesResponse.data,
        address: addressResponse.data.address,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data: () => ({
    country: "United States of America",
    fullname: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber: "",
    deliverInstructions: "",
    securityCode: "",
  }),
  methods: {
    async onUpdateAddress() {
      try {
        let data = {
          country: this.country,
          fullname: this.fullname,
          streetAddress: this.streetAddress1 + ", " + this.streetAddress2,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliverInstructions,
          securityCode: this.securityCode,
        };

        let response = await this.$axios.put(
          `api/address/${this.$route.params.id}`,
          data
        );

        if (response.data.success) this.$router.push("/address");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
