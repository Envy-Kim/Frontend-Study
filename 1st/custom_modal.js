/*
    커스텀 엘리먼트
    쉐도우돔
    슬롯 (or template)
    이용하여 Custom modal 작성
 */
class SimpleModal extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this._visible = false;

        this.shadowRoot.innerHTML = `
            <div class="modal-wrap">
                <div class="modal-box">
                    <span class="close">&times;</span>
                    <div class="modal-title">
                        <slot name="title"></slot>
                    </div>
                    <div class="modal-body">
                        <slot name="content">test</slot>
                    </div>
                </div>
            </div>
            
            <style>
                .modal-wrap {
                    display: none;
                    position: fixed;
                    background-color: rgb(0, 0, 0);
                    background-color: rgba(0, 0, 0, 0.4);
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                }
    
                .modal-box {
                    background-color: #efefef;
                    margin: 15% auto;
                    padding: 20px;
                    border: 1px solid #888;
                    width: 50%;
                    border-radius: 15px;
                    -webkit-animation-name: animatetop;
                    -webkit-animation-duration: 1s;
                    animation-name: animatetop;
                    animation-duration: 0.4s;
                }
    
                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }
    
                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
                
                @-webkit-keyframes animatetop {
                    from {top: -300px; opacity: 0}
                    to {top: 0; opacity: 1}
                }
                
                @keyframes animatetop {
                    from {top: -300px; opacity: 0}
                    to {top: 0; opacity: 1}
                }
            </style>
        `;
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        this._modal = this.shadowRoot.querySelector('.modal-wrap');
        this.shadowRoot.querySelector('.close').addEventListener('click', this._hide.bind(this));

        this.shadowRoot.querySelector('.modal-box').style.backgroundColor
            = this.getAttribute('bgcolor');
    }

    /**
     * 가상 트리가 document 에서 연결 해제 된 후 콜백
     */
    disconnectedCallback() {
        this.shadowRoot.querySelector('.close').removeEventListener('click', this._hide);
    }

    _hide() {
        this._visible = true;
        this._modal.style.display = 'none';
    }

    show() {
        this._visible = false;
        this._modal.style.display = 'block';
    }

    /**
     * 요소의 속성 중 하나가 어떤 식으로든 변경 될 때 마다 콜백이 실행
     *
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        /** todo: 요걸 사용해서 _hide(), show()를 바꿀 수 있지 않을까? */
        console.log('Custom square element attributes changed.');
    }
}

customElements.define('simple-modal', SimpleModal);
