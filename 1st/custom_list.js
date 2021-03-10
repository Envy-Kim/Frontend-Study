class SimpleList extends HTMLElement {
    constructor() {
        super();

        this.listType = 'vertical';
        this.bgColor = '#d4cced';
        this.activeColor = '#fff8d4';
        this.item = [];

        this.attachShadow({mode: "open"});

        /** Template */
        this.shadowRoot.innerHTML = `
            <div class="list-wrap">
                <ul class="list">
                    <slot name="item" class="itemSlot"></slot>
                </ul>
            </div>
 
            <style>
                .list-wrap {
                    padding: 36px;
                }

               .list-wrap .list ::slotted(li) {
                    list-style: none;
                    margin-right: 8px;
                    border: 2px solid;
                    padding: 4px;
                }

                .list.horizontal-list ::slotted(li){
                    float: left;
                }
                
                .list.horizontal-list:after {
                    content:"";
                    display: block;
                    clear: both;
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
        let list = this.shadowRoot.querySelector(".itemSlot");
        /**
         * list.assignedNodes() 사용시 빈배열 반환.
         *
         * => 선택한 .itemSlot에 매칭되는 slot 내용을 파싱하지 못한 상태
         * index.html에서 custom_list.js를 로드할 때 defer 옵션을 주어 해결
         */
        this.item = list.assignedNodes();


        for(let i=0; i < this.item.length; i++){
            this.item[i].style.backgroundColor = this.bgColor;
            this.item[i].addEventListener('click', ()=> this._setActiveBgColor(i));
        }

        if (this.getAttribute('id'))
            this.shadowRoot.querySelector('.list-wrap').setAttribute('id', this.getAttribute('id'));

        if (this.getAttribute('class'))
            this.shadowRoot.querySelector('.list').classList.add(this.getAttribute('class'));

        if (this.getAttribute('name'))
            this.shadowRoot.querySelector('.list').setAttribute('name', this.getAttribute('name'));
    }

    /**
     * 가상 트리가 document 에서 연결 해제 된 후 콜백
     */
    disconnectedCallback() {
        //
    }

    /** javascript 객체는 private 속성을 지정할 수 없기 때문에 _ 를 속성명에 붙이는 것으로 private으로 간주 */
    // 선택된 li만 색상을 변경
    _setActiveBgColor(index) {
        for(let i=0; i < this.item.length; i++){
            this.item[i].style.backgroundColor = this.bgColor;
        }
        this.item[index].style.backgroundColor = this.activeColor;
    }
}
customElements.define('simple-list', SimpleList);