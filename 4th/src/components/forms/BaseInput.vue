
<template>
  <div class="input-wrap">
    <label :for="_id" :style="customStyle">{{ label }}</label>
    <input :type="type"
           :id="_id"
           :name="name"
           :value="value"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           :required="required"
           :class="[(isErr === true) ? 'box-error' : '']"
           @input="change"/>
    <div v-if="isMessage"
         class="input-detail"
         :class="[(isErr === true) ? 'text-error' : '']">
      {{ message }}
    </div>
  </div>
</template>

<script>

export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    color: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    rules: {
      type: [String, Array],
    },
  },
  data() {
    return {
      isMessage: false,
      message: [],
      isErr: false,
    }
  },
  computed: {
    _id: function () {
      // 전달받은 id가 없으면 해당 컴포넌트의 uid로 id를 만듬.
      return (this.id) ? this.id : 'input-' + this._uid
    },
    customStyle: function () {
      let custom = '';
      if (this.color) custom += "color:" + this.color + ";";
      if (this.backgroundColor) custom += "background-color:" + this.backgroundColor + ";";
      return custom;
    }
  },
  methods: {
    change($event) {
      this.checkValue($event);

      // input의 변경된 값을 부모 컴포넌트로 전달
      this.$emit('input', $event.target.value);
    },
    checkValue($event) {
      if (this.required) {
        if (!this.value) {
          this.isMessage = true;
          this.isErr = true;
          this.message = "필수값입니다.";
          return false;
        } else {
          this.isMessage = false;
          this.message = '';
        }
      }

      // 입력받은 rules에 맞춰서 유효성 검사
      if (this.rules) {
        let checkVal = $event.target.value;
        let isMsg = false;
        let msg = [];

        this.rules.forEach(function (value) {
          let check = value(checkVal);
          if (check !== true) {
            isMsg = true;
            msg.push(check);
          }
        });

        this.isMessage = isMsg;
        this.isErr = isMsg;
        this.message = msg[0];
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input-wrap {
  label {
    margin-right: 10px;
  }

  .text-error {
    color: red;
  }

  .box-error {
    border: solid 1px red;
  }

  .text-primary {
    color: #96caf5;
  }
}
</style>