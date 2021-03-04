/**
 * HTMLButtonElemnt를 상속 받아 만들면 Shadow DOM 동작하지 않음.
 * 무엇이 문제일까?
 *
 * class SimpleBtn extends HTMLButtonElement() {}
 * customElements.define('simple-btn', SimpleBtn, {extends: 'button'});
 */
class CustomBtn extends HTMLElement {

    constructor() {
        super();

        const slot = document.createElement('slot');
        slot.setAttribute('name', 'btn_text');

        const btn = document.createElement('button');
        btn.setAttribute('class', 'custom-btn');
        btn.appendChild(slot);


        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(btn);
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

}

customElements.define('custom-btn', CustomBtn);