
class SimpleList extends HTMLElement {
    constructor() {
        super();

        this.listType = 'vertical';
        this.bgColor = '#d4cced';
        this.activeColor = '#fff8d4';

        this.attachShadow({mode: "open"});

        /** Template */
        this.shadowRoot.innerHTML = `
            <div class="list-wrap">
                <ul class="list">
                    <li class="list-item"><slot name="item1"></slot></li>
                    <li class="list-item"><slot name="item2"></slot></li>
                    <li class="list-item"><slot name="item3"></slot></li>
                    <li class="list-item"><slot name="item4"></slot></li>
                </ul>
            </div>
 
            <style>
                .list-wrap {
                    padding: 36px;
                }

                .list-wrap .list li {
                    list-style: none;
                    margin-right: 8px;
                    border: 2px solid;
                    padding: 4px;
                }

                .list.horizontal-list li{
                    float: left;
                }
            </style>
        `;
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        /** custom element 에서 바인딩한 속성을 주입 */

        // 리스트 방향 설정
        this.listType = (this.getAttribute('listType')) ? this.getAttribute('listType') + "-list" : this.listType + "-list";
        this.shadowRoot.querySelector('.list').classList.add(this.listType);

        // 배경색과 선택항목 배경색 설정
        this.bgColor = (this.getAttribute('bgColor')) ? this.getAttribute('bgColor') : this.bgColor;
        this.activeColor = (this.getAttribute('activeColor')) ? this.getAttribute('activeColor') : this.activeColor;

        // li에 배경색 설정 및 이벤트 주입
        let item = this.shadowRoot.querySelectorAll(".list-item");
        for(let i=0; i < item.length; i++){
            item[i].style.backgroundColor = this.bgColor;
            item[i].addEventListener('click', ()=> this._setActiveBgColor(i));
        }

        if (this.getAttribute('id'))
            this.shadowRoot.querySelector('.list').setAttribute('id', this.getAttribute('id'));

        if (this.getAttribute('class'))
            this.shadowRoot.querySelector('.list').setAttribute('class', this.getAttribute('class'));

        if (this.getAttribute('name'))
            this.shadowRoot.querySelector('.list').setAttribute('name', this.getAttribute('name'));
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
    }

    /** javascript 객체는 private 속성을 지정할 수 없기 때문에 _ 를 속성명에 붙이는 것으로 private으로 간주 */
    // 선택된 li만 색상을 변경
    _setActiveBgColor(index) {
        let item = this.shadowRoot.querySelectorAll(".list-item");
        for(let i=0; i < item.length; i++){
            item[i].style.backgroundColor = this.bgColor;
        }
        item[index].style.backgroundColor = this.activeColor;
    }
}
customElements.define('simple-list', SimpleList);