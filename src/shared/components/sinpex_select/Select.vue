  <template>
    <div class="center">
      <vs-select placeholder="Select" v-model="value">
        <!-- maybe next time -->
        <!-- <vs-option v-for="(user, i) in users" :key="i" :label="`User &{i}`" :value="i">
          {{user.name}}
        </vs-option> -->
        <vs-option label="User 1" value="1">
          User 1
        </vs-option>
        <vs-option label="User 2" value="2">
          User 2
        </vs-option>
        <vs-option label="User 3" value="3">
          User 3
        </vs-option>
        <vs-option disabled label="User 4" value="4">
          User 4
        </vs-option>
        <vs-option label="User 5" value="5">
          User 5
        </vs-option>
        <vs-option label="User 6" value="6">
          User 6
        </vs-option>
      </vs-select>
    </div>
  </template>

  <script>
    export default {
      data:() => ({
        value: '',
      })
    }
  </script>

