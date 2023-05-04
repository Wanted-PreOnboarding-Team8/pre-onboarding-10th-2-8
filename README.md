# Week2 - 기업과제 1

## 💡 목표

> **검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현**

## ⚙️ 실행 방법

```
npm install
npm start
```

## 🔗 [배포 링크](https://pre-onboarding-10th-1-8.vercel.app/)

## 목차

- [Week2](#Week2)
  - [💡 목표](#-💡-목표)
  - [⚙️ 실행 방법](#️-실행-방법)
  - [🔗 배포 링크](#-배포-링크)
  - [목차](#목차)
  - [🛠️ 기술 스택](#️-기술-스택)
  - [📖 기능 구현](#-📖-기능-구현)
  - [✏️ 팀 규칙](#️-팀-규칙)
    - [1️⃣ 커밋 컨벤션](#1️⃣-커밋-컨벤션)
    - [2️⃣ 폴더 구조](#2️⃣-폴더-구조)

## 🛠️ 기술 스택

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg)
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)
![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![vercel](https://user-images.githubusercontent.com/123078739/235159384-253eb589-03dd-4f4e-97f0-eb07a6c928dd.svg)

## 📖 기능 구현

### 1️⃣ API 호출별로 로컬 캐싱 구현

- localStorage vs sessionStorage
- setInterval

### 2️⃣입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- Debounce vs Throttle
- Debounce 는 입력이 끝날때까지 무한적으로 기다리지만, Throttle 는 입력이 시작되면 일정 주기로 계속 실행한다.
- Dobounce 의 성능과 Throttle의 사용자 측면 중, 과제의 호출 횟수를 줄이는 전략을 수립하기 위해 Debounce 사용

### 3️⃣ 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## ✏️ 팀 규칙

### 1️⃣ 커밋 컨벤션

```
- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Env : 개발 환경 관련 설정
- Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
- Refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
- Design : CSS 등 디자인 추가/수정iE
- Comment : 주석 추가/수정
- Docs : 내부 문서 추가/수정
- Test : 테스트 추가/수정
- Chore : 빌드 관련 코드 수정
- Rename : 파일 및 폴더명 수정
- Remove : 파일 삭제
```

e.g. Feat: 검색 기능 수정

### 2️⃣ 폴더 구조

```
📦 src
├── 📂 api
├── 📂 assets
├── 📂 components
│ ├── 📄 HeaderTitle
│ ├── 📄 SearchBar
│ ├── 📄 SearchButton
│ ├── 📄 SearchSuggestionListItem
│ ├── 📄 SearchSuggestionModal
├── 📂 hooks
├── 📂 pages
├── 📂 styles
├── 📂 utils
├── 📄 App
└── 📄 index
```
