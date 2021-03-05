
class CustomModal extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this._visible = false;

        /** CustomModal의 Template */
        this.shadowRoot.innerHTML = `
            <div class="modal">
                <div class="modal-box">
                    <div class="modal-head">
                        <p>
                            <slot name="title" />
                        </p>
                        <span class="modal-close">&times;</span>
                    </div>
                    <div class="modal-content">
                        <p class="modal-subtit">
                            <slot name="sub-title" />
                        </p>
                        <slot name="content" />
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        /** custom element 에서 바인딩한 속성을 주입 */
        if (this.getAttribute('id'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('id', this.getAttribute('id'));

        if (this.getAttribute('class'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('id', this.getAttribute('class'));

        if (this.getAttribute('name'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('id', this.getAttribute('name'));

        if (this.getAttribute('value'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('id', this.getAttribute('value'));
    }

    /**
     * 가상 트리가 document 에서 연결 해제 된 후 콜백
     */
    disconnectedCallback() {
    }

    /**
     * 요소의 속성 중 하나가 어떤 식으로든 변경 될 때 마다 콜백이 실행
     *
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        updateStyle(this);
    }

    /** javascript 객체는 private 속성을 지정할 수 없기 때문에 _ 를 속성명에 붙이는 것으로 private으로 간주 */
}

customElements.define('custom-modal', CustomModal);