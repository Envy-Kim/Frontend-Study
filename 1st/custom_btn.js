/**
 * Custom Elements를 이해하기 위한 간단한 custom button
 */

/**
 * HTMLButtonElemnt를 상속 받아 만들면 Shadow DOM 동작하지 않음.
 * 무엇이 문제일까?
 *
 * class SimpleBtn extends HTMLButtonElement() {}
 * customElements.define('simple-btn', SimpleBtn, {extends: 'button'});
 *
 * ==> Autonomous custom elements와 Customized built-in elements 차이
 *
 * Autonomous custom elements : 사용자가 요소 하나하나를 설정
 * Customized built-in elements : 기존 사용하던 태그를 상속 받아 그 태그를 커스텀
 */

/** Autonomous custom elements */
class AutonomousCustomBtn extends HTMLElement {

    constructor() {
        super();

        /** Create a shadow root */
        this.attachShadow({mode: "open"});

        this.eventType = 'alert';

        const slot = document.createElement('slot');
        slot.setAttribute('name', 'btn_text');

        const btn = document.createElement('button');
        btn.setAttribute('class', 'custom-btn');
        btn.appendChild(slot);

        // attach the created elements to the shadow DOM
        this.shadowRoot.append(btn);
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        /** custom element 에서 바인딩한 속성을 주입 */
        if (this.getAttribute('id'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('id', this.getAttribute('id'));

        if (this.getAttribute('class'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('class', this.getAttribute('class'));

        if (this.getAttribute('name'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('name', this.getAttribute('name'));

        if (this.getAttribute('value'))
            this.shadowRoot.querySelector('.custom-btn').setAttribute('value', this.getAttribute('value'));

        this.eventType = (this.getAttribute('eventType')) ? this.getAttribute('eventType') : this.eventType;

        this.addEventListener('click',
            () => (this.eventType === 'console') ? console.log("This is Autonomous custom elements!") : alert("This is Autonomous custom elements!")
        )
    }

    /**
     * 가상 트리가 document 에서 연결 해제 된 후 콜백
     */
    disconnectedCallback() {
        //
    }

}
customElements.define('autonomous-custom-btn', AutonomousCustomBtn);


/** Customized built-in elements */
class builtinCustomBtn extends HTMLButtonElement {
    /** Always call super first in constructor */
    constructor() {
        super();

        this.eventType = 'alert';

        /** write element functionality in here */
        //this.addEventListener('click', () => alert("This is Customized built-in elements!"));
    }

    connectedCallback() {
        this.eventType = (this.getAttribute('eventType')) ? this.getAttribute('eventType') : this.eventType;

        this.addEventListener('click',
            () => (this.eventType == 'console') ? console.log("This is Customized built-in elements!") : alert("This is Customized built-in elements!")
        );
    }
}
customElements.define('builtin-custom-btn', builtinCustomBtn, {extends: "button"});