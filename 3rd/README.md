# 3주차
- Vuejs Project Configuration
- Vuejs Routing


## Create Vuejs Project

### vsCode 등의 터미널에서 yarn 실행 오류가 발생한 경우
1. 관리자 권한으로 power shell 실행
2. Get-ExecutionPolicy 명령어를 입력하여 권한 상태를 확인
- Restricted : PowerShell의 실행 권한 정책 중 기본적으로 적용되어있는 옵션. ps1 스크립트 파일을 로드하여 실행할 수 없는 정책
- AllSigned : 신뢰된 배포자에 의해 서명된 스크립트만 실행할 수 있는 정책
- RemotedSigned : 로컬 컴퓨터에서 본인이 생성한 스크립트만 실행 가능 또는 인터넷에서 다운받은 스크립트는 신뢰된 배포자에 의해 서명된 것만 실행 가능한 정책
- Unrestricted : 제한 없이 모든 스크립트를 실행할 수 있는 정책
- ByPass : 어떤 것도 차단하지 않고 경고 없이 실행 가능한 정책
- Undefined : 정책 적용 안함
3. RemoteSigned의 권한이 아니라면 Set-ExecutionPolicy RemoteSigned 명령어로 권한 변경

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 과제
라우터 기능을 이용한 메뉴 구현
git : https://github.com/Envy-Kim/vue-route-study