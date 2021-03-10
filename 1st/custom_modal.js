class SimpleModal extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this._visible = false;

        this.shadowRoot.innerHTML = `
            <div class="modal-wrap">
                <div class="modal-box">
                    <div class="modal-title">
                        <p>
                            <slot name="title"></slot>
                        </p>
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <slot name="content"></slot>
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
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto;
                }

                .modal-box {
                    position: relative;
                    margin: 15% auto;
                    padding: 20px;
                    width: 640px;
                    -webkit-animation-name: animatetop;
                    -webkit-animation-duration: 1s;
                    animation-name: animatetop;
                    animation-duration: 0.4s;
                }
                
                .modal-box .modal-title {
                    position: relative;
                    height: 90px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px 30px 0 0;
                }
                
                .modal-box .modal-title p {
                    font-size: 42px;
                }
                
                .modal-box .modal-body {
                    background-color: #fff;
                    border-radius: 0 0 30px 30px;
                    padding: 35px 40px 50px 40px;
                }
                .modal-box .modal-body p {
                    text-align: center;
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 30px;
                }

                .close {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 0;
                    bottom: 0;
                    right: 30px;
                    font-size: 42px;
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
        this.shadowRoot.querySelector('.close').addEventListener('click', ()=> this.setAttribute('visible', 'false'));

        this.shadowRoot.querySelector('.modal-title').style.backgroundColor
            = this.getAttribute('bgcolor');
    }

    /**
     * 가상 트리가 document 에서 연결 해제 된 후 콜백
     */
    disconnectedCallback() {
        this.shadowRoot.querySelector('.close').removeEventListener('click', this._hide);
    }

    _hide() {
        this._modal.style.display = 'none';
    }

    _show() {
        this._modal.style.display = 'block';
    }

    /**
     * Specify observed attributes so that attributeChangedCallback will work
     * 관찰할 속성을 지정하여, 해당 속성이 변경되었을 때 attributeChangedCallback() 이 동작
     */
    static get observedAttributes() {
        return ['visible'];
    }

    /**
     * 요소의 속성 중 하나가 어떤 식으로든 변경 될 때 마다 콜백이 실행
     *
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom element attributes changed.');
        console.log('logging... :: ' + name + ' | ' + oldValue + ' | ' + newValue);
        // ex) custom_modal.js:145 logging... :: visible | null | true

        if(name === 'visible') {
            this._visible = (newValue === 'true');
            this._visible ? this._show() : this._hide();
        }
    }
}

customElements.define('simple-modal', SimpleModal);

function showModal(id) {
    const visible = document.querySelector('#'+id);
    visible.setAttribute('visible', 'true');
}
