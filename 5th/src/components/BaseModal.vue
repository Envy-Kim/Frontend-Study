<template>
  <transition v-if="show" name="modal-fade">
    <div class="modal-wrap">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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

.modal-wrap {
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
</style>