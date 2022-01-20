<template>
  <div id="app" class="container mx-auto px-6 pt-6">
    <div class="topo">
      <div class="logo">
        <img src="~/assets/logo-damasiomotopecas.png" style="height: 4em" />
      </div>
      <div class="title">
        <h2
          class="
            inline-block
            mb-2
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            dark:text-white
          "
          id="content"
        >
          LEAD TIME DE ENTREGA
        </h2>
      </div>
    </div>
    <div class="corpo">
      <div class="item-corpo">
        <label
          for="tipo-leadtime"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-400
          "
          >Tipo</label
        >
        <div class="radio-group" id="tipo-leadtime">
          <div class="form-check">
            <input
              v-model="tipo"
              value="transportadora"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
              type="radio"
              name="tipoleadtime"
              id="flexRadioDefault1"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              TRANSPORTADORA
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="tipo"
              value="entrega"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
              type="radio"
              name="tipoleadtime"
              id="flexRadioDefault2"
              checked
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault2"
            >
              ENTREGA
            </label>
          </div>
        </div>
      </div>
      <div class="item-corpo">
        <!-- Entrada Nota Fiscal  -->
        <label
          for="countries"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-400
          "
          >Empresa</label
        >
        <select
          id="countries"
          v-model="empresa"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        >
          <option>Empresa 1</option>
          <option>Empresa 2</option>
          <option>Empresa 3</option>
          <option>Empresa 4</option>
        </select>
      </div>

      <div class="item-corpo">
        <!-- Entrada Nota Fiscal  -->
        <label
          for="base-input"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Número NF</label
        >
        <input
          v-model="numeronf"
          v-mask="['########']"
          type="text"
          id="base-input"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        />
        <p class="label-faturamento" v-if="datafaturamento">
          Data de faturamento:
          {{
            datafaturamento.getDate() +
            "/" +
            datafaturamento.getMonth() +
            1 +
            "/" +
            datafaturamento.getFullYear()
          }}
        </p>
      </div>

      <div v-if="tipo == 'transportadora'">
        <label
          for="tipo-motoboy"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-400
          "
          >Tipo Motoboy</label
        >
        <div class="radio-group" id="tipo-motoboy">
          <div class="form-check">
            <input
              v-model="tipoMotoboy"
              value="fixo"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
              type="radio"
              name="tipomotoboy"
              id="flexRadioDefault3"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault3"
            >
              FIXO
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="tipoMotoboy"
              value="aplicativo"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
              type="radio"
              name="tipomotoboy"
              id="flexRadioDefault4"
              checked
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault4"
            >
              APLICATIVO
            </label>
          </div>
        </div>

        <div class="datetime-container">
          <div class="item-corpo">
            <!-- Datepicker -->
            <label
              for="data-saida-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Data de Saída</label
            >
            <div class="relative">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                v-mask="'##/##/####'"
                v-model="dataSaida"
                id="data-saida-input"
                class="
                  data-input
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  pl-10
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="Data de Entrega"
              />
            </div>
          </div>

          <div class="space"></div>

          <div class="item-corpo">
            <!-- Entrada Nota Fiscal  -->
            <label
              for="horario-saida-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Horário de Saída</label
            >
            <input
              type="text"
              v-mask="'##:##'"
              v-model="horarioSaida"
              id="horario-saida-input"
              class="
                horario-input
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
        </div>

        <div class="datetime-container">
          <div class="item-corpo">
            <!-- Datepicker -->
            <label
              for="data-entrega-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Data de Entrega</label
            >
            <div class="relative">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                v-mask="'##/##/####'"
                v-model="dataEntrega"
                id="data-entrega-input"
                class="
                  data-input
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  pl-10
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="Data de Entrega"
              />
            </div>
          </div>

          <div class="space"></div>

          <div class="item-corpo">
            <!-- Entrada Nota Fiscal  -->
            <label
              for="horario-saida-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Horário de Entrega</label
            >
            <input
              type="text"
              v-mask="'##:##'"
              id="horario-entrega-input"
              v-model="horarioEntrega"
              class="
                horario-input
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
        </div>

        <div class="item-corpo">
          <div>
            <!-- Entrada Nota Fiscal  -->
            <label
              for="distancia-input"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Distância (Km)</label
            >
            <input
              type="text"
              v-mask="['########']"
              v-model="distancia"
              id="distancia-input"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
          </div>
        </div>
      </div>
      <div v-if="tipo == 'entrega'">
        <div class="item-corpo">
          <!-- Datepicker -->
          <label
            for="data-entrega-input"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Data de Entrega</label
          >
          <div class="relative">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              v-model="dataEntrega"
              datepicker
              v-mask="'##/##/####'"
              type="text"
              id="data-entrega-input"
              class="
                data-input
                bg-gray-50
                border border-gray-300
                text-gray-900
                sm:text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Data de Entrega"
            />
          </div>
        </div>
        <p
          v-if="
            this.dataEntrega.length == 10 &&
            this.dataEntregaValida == false &&
            this.datafaturamento != null
          "
          style="color: red"
        >
          Data de Entrega digitada é menor que a data de faturamento do pedido!
        </p>
      </div>

      <div class="item-corpo">
        <!-- Botão SUBMIT -->
        <button type="submit" :class="classButton">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      tipo: "transportadora",
      tipoMotoboy: "",
      numeronf: "",
      datafaturamento: null,
      dataSaida: "",
      dataEntrega: "",
      horarioSaida: "",
      horarioEntrega: "",
      empresa: "",
      distancia: "",
      nfs: [
        {
          nf: "353535",
          data: new Date("January 17, 2022"),
        },
        {
          nf: "363636",
          data: new Date("January 13, 2022"),
        },
      ],
    };
  },
  computed: {
    dataEntregaValida() {
      if (this.dataEntrega.length == 10) {
        if (this.datafaturamento != null) {
          if (this.dataEntregaObj >= this.datafaturamento) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    },

    dataEntregaObj() {
      return new Date(
        `${this.dataEntrega.split("/")[1]}/${this.dataEntrega.split("/")[0]}/${
          this.dataEntrega.split("/")[2]
        }`
      );
    },
    classButton() {
      return this.submit
        ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        : "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
    },
    submit() {
      if (this.tipo == "transportadora") {
        return (
          this.empresa &&
          this.numeronf &&
          this.tipoMotoboy &&
          this.dataSaida.length == 10 &&
          this.horarioSaida.length == 5 &&
          this.dataEntrega.length == 10 &&
          this.horarioEntrega.length == 5 &&
          this.distancia
        );
      } else if (this.tipo == "entrega") {
        return (
          this.empresa &&
          this.numeronf &&
          this.dataEntrega.length == 10 &&
          this.dataEntregaValida
        );
      } else {
        return false;
      }
    },
  },
  watch: {
    numeronf() {
      this.datafaturamento = null;
      this.nfs.forEach((element) => {
        if (element.nf == this.numeronf) {
          this.datafaturamento = element.data;
        }
      });
      if (this.datafaturamento != null) console.log(this.datafaturamento);
      return this.numeronf;
    },
  },
};
</script>

<style>
.topo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-left: 20px;
}

.corpo {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.item-corpo {
  margin: 0.5em 0;
}

button {
  margin-top: 10px;
}

.datetime-container {
  display: flex;
}

.space {
  width: 20px;
}

.datetime-container .item-corpo {
  flex-grow: 1;
}

.radio-group {
  display: flex !important;
  flex-direction: row !important;
}

.form-check {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-faturamento {
  margin-top: 10px;
}
</style>
