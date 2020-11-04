  <template>
    <div class="table center">
      <vs-table
        v-model="selected"
        >
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox
                :indeterminate="selected.length == users.length" v-model="allCheck"
                @change="selected = $vs.checkAll(selected, users)"
              />
            </vs-th>
            <vs-th>
              Name
            </vs-th>
            <vs-th>
              User Name
            </vs-th>
            <vs-th>
              Website
            </vs-th>
            <vs-th>
              Phone
            </vs-th>
            <vs-th>
              
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in users"
            :data="tr"
            :is-selected="!!selected.includes(tr)"
          >
            <vs-td checkbox>
              <vs-checkbox :val="tr" v-model="selected" />
            </vs-td>
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
            {{ tr.username }}
            </vs-td>
            <vs-td>
            {{ tr.website }}
            </vs-td>
            <vs-td>
            {{ tr.phone }}
            </vs-td>
            <vs-td>
            ...
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <span class="data">
        <pre>
  {{ selected.length > 0 ? selected : 'Select an item in the table' }}
        </pre>
      </span>
    </div>
  </template>

  <script>
    export default {
      data:() => ({
        allCheck: false,
        selected: [],
        users: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Sincere@april.biz",
            "website": "hildegard.org",
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Shanna@melissa.tv",
            "website": "anastasia.net",
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Nathan@yesenia.net",
            "website": "ramiro.info",
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Julianne.OConner@kory.org",
            "website": "kale.biz",
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Lucio_Hettinger@annie.ca",
            "website": "demarco.info",
          },
          {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Karley_Dach@jasper.info",
            "website": "ola.org",
          },
          {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Telly.Hoeger@billy.biz",
            "website": "elvis.io",
          },
          {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Sherwood@rosamond.me",
            "website": "jacynthe.com",
          },
          {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Chaim_McDermott@dana.io",
            "website": "conrad.com",
          },
          {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "phone" : '+1 - 444 - 888 - 222',
            "email": "Rey.Padberg@karina.biz",
            "website": "ambrose.net",
          }
        ]
      })
    }
  </script>

  <style scoped lang="scss">
.table {
  width: 100%;
}
</style>

