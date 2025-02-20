<template>
  <v-dialog
    v-model="isVisible"
    width="auto"
    backgroung-color="#eafaf1"
    height="500px"
    scrollable
  >
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="main-btn">Добавить человека</v-btn>
    </template>
    <v-card>
      <div class="new-person">
        <v-form class="input-person">
          <v-text-field
            variant="solo"
            flat="true"
            v-model="person.name"
            placeholder="Введите имя"
            density="comfortable"
            class="name"
          />
          <v-btn text="Добавить" id="name-btn" class="btn" @click="addPerson" />
        </v-form>
        <div
          lines
          class="name-list"
          v-for="person in personsStore.persons"
          :key="person.id"
        >
          <v-list-item class="names">{{ person.name }}</v-list-item>
          <div>
            <v-btn
              block
              text="Удалить"
              class="btn"
              @click="personsStore.deletePerson(person)"
            />
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { usePersonsStore } from "../stores/personsStore";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const personsStore = usePersonsStore();
const route = useRoute();

let isVisible = ref(false);
let person = ref({
  name: "",
  wastes: 0,
  creditors: [],
});

const personsList = computed(()=>{
  let pers=[];
  if (!route.params.id){
    return [];
  }
})

function addPerson() {
      person.value.id = Date.now();
      if (route.params.id){
        person.value.checkId = route.params.id;
      }
      personsStore.addPerson(person.value);
      person.value = {
        name: "",
        wastes: 0,
        creditors: [],
      };
    }
</script>

<style scoped lang="scss">
.main-btn {
  width: 15vw;
  min-height: 70px;
  font-weight: 500;
  font-size: 1vw;
  border: 1px #148f77 solid;
  border-radius: 15px;
  &:hover {
    background: #eafaf1;
  }
}

.new-person {
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: #eafaf1;
}

.input-person {
  width: 100%;
  max-height: 50px;
  display: flex;
  align-items: center;
}

.btn {
  margin: 0px;
  width: 105px;
  min-height: 50px;
  font-weight: 600;
  border-radius: 0px 15px 15px 0px;
  border: 1px solid #148f77;
  &:hover {
    background: #eafaf1;
  }
}

#name-btn {
  color: #ffffff;
  background: #148f77;
}

.name {
  padding-left: 10px;
  width: 295px;
  background: #ffffff;
  max-height: 50px;
  border-radius: 15px 0px 0px 15px;
  border: 1px solid #148f77;
}

.name-list {
  margin-top: 20px;
  display: flex;
}

.names {
  width: 295px;
  height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border: 1px solid #148f77;
  border-radius: 15px 0px 0px 15px;
  font-family: Arial;
}
</style>
