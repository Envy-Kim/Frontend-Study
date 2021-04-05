<template>
  <div class="input-wrap" :style="{ width: width + 'px', 'background-color': backgroundColor }">
    <div class="textarea-wrap">
      <label :for="id" :class="[(isErr === true) ? 'text-error' : '']">{{ label }}</label>
      <textarea :id="id"
                :rows="rows"
                :value="value"
                :placeholder="placeholder"
                :maxlength="maxlength"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :class="[(isErr === true) ? 'text-error' : '']"
                @input="change"></textarea>

    </div>
    <div class="textarea-detail"
         :class="[(isErr === true) ? 'text-error' : '']">
      <span class="detail-msg">{{ message }}</span>
      <span class="count">{{ value.length }} / {{ maxlength }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 5,
    },
    maxlength: {
      type: Number,
      default: 255,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 300,
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    rules: {
      type: [String, Array],
    },
  },
  data() {
    return {
      uid: null,
      message: '',
      isErr: false,
    }
  },
  computed: {
    id: function () {
      return 'textarea_' + this.uid;
    },
  },
  methods: {
    change($event) {
      // 변경된 값을 부모 컴포넌트로 전달
      this.$emit('input', $event.target.value);

      this.checkRules($event);
    },
    checkRules($event) {
      // 입력받은 rules에 맞춰서 유효성 검사
      if (this.rules) {
        let isErr = false;
        let msg = [];

        this.rules.forEach(function (value) {
          let check = value($event.target.value);
          if (check !== true) {
            isErr = true;
            msg.push(check);
          }
        });

        if ($event.target.value.length > this.maxlength) {
          isErr = true;
          msg.push(this.maxlength + '자까지 입력이 가능합니다.');
        }

        this.isErr = isErr;
        this.message = msg[0];
      }
    }
  },
  mounted() {
    // 고유한 uid
    this.uid = this._uid;
  },
}
</script>

<style lang="scss" scoped>
.input-wrap {
  align-items: flex-start;
  flex: 1 1 auto;
  font-size: 16px;
  letter-spacing: normal;
  max-width: 100%;
  text-align: left;

  .textarea-wrap {
    display: flex;
    flex: 1 1 auto;
    position: relative;

    textarea {
      align-self: stretch;
      flex: 1 1 auto;
      line-height: 1.75rem;
      max-width: 100%;
      min-height: 32px;
      outline: none;
      padding: 0;
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: solid 2px #555555;

      &:focus {
        outline: none;
        border-bottom: solid 3px #277dff;
      }

      &.text-error {
        border-bottom: solid 3px #ff1010;
      }
    }
  }

  label {
    top: -25px;
    left: 0px;
    right: auto;
    position: absolute;
    font-size: 18px;
    height: 20px;
    line-height: 20px;
    letter-spacing: normal;
  }

  .textarea-detail {
    flex: 1 1 auto;
    font-size: 12px;
    min-height: 14px;
    min-width: 1px;
    position: relative;

    .count {
      float: right;
    }

    &::after {
      display: block;
      clear: both;
    }
  }

  .text-error {
    color: #ff1010;
  }
}
</style>