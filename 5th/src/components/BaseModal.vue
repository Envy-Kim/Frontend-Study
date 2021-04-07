<template>
  <transition v-if="show" name="modal-fade">
    <!--
    모달 외부를 누르면 닫히도록 모달외부에 해당하는 부분에 @mousedown 을 이용하여 $emit('close') 해준다.
    @click 대신 @mousedown을 사용한 이유는 click의 경우 눌렀다가 뗀 위치가 modal-mask일 경우에도 동작하기 때문
    -->
    <div class="modal-mask" @mousedown="$emit('close')">
      <div class="modal-wrap">
        <!-- @mousedown.stop : 이벤트 수식어를 사용. 마우스 다운 이벤트에 대한 전파 중지. -->
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" @mousedown.stop>
          <div class="modal-content">
            <div class="modal-header">
              <slot name="modal-title"/>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')">&times;</button>
            </div>
            <div class="modal-body">
              <slot/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">닫기</button>
              <!-- <button type="button" class="btn btn-primary disabled">Understood</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.btn-close {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0px;
  right: 15px;
  border: none;
  font-size: 30px;
  background-color: transparent;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s;
}
.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}
</style>