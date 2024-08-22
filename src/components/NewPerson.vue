<template>
  <div class="new-person">
    <v-form class="input-person">
      <v-text-field 
      variant="plain"
      v-model="person.name" 
      placeholder="Введите имя" 
      density="comfortable"
      class="name" />
      <v-btn 
      text="Добавить"
      id = "name-btn"
      class="btn" 
      @click="addPerson"/> 
    </v-form>
    <div 
    lines 
    class="name-list" 
    v-for="person in personsStore.persons" 
    :key="person.id">
      <v-list-item class="names">{{ person.name }}</v-list-item>
      <div>
        <v-btn 
        block 
        text="Удалить"
        class="btn"
        @click="personsStore.deletePerson(person)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { usePersonsStore } from "../stores/personsStore";
export default {
  setup() {
    const personsStore = usePersonsStore();
    return {
      personsStore,
    }
  },
  data() {
    return {
      person: {
        name: "",
        wastes: 0,
        creditors: []
      },
    };
  },
  methods: {
    addPerson() {
      this.person.id = Date.now();
      this.personsStore.addPerson(this.person);
      this.person = {
        name: "",
        wastes: 0,
        creditors: []
      };
    },
  }
};
</script>

<style scoped lang="scss">
.new-person{
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
  color:#ffffff;
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