# **ERPro**
### **SpringBoot/JPA Project**
### 주제 : ERP<br>
### 프로젝트 목적 : 제조/생산 업무에 대한 전반적인 흐름을 관리하고, 작업 효율을 높이는 ERP시스템개발<br>
#### 프로젝트 기간 : 2024. 1. 15 ~ 2024.02. 15<br>
#### 작업인원 : 3명<br>


#### 산출물: https://drive.google.com/drive/folders/1Vou1iD2J9DRyMfJkz0rWXiqd_fuTtbHZ?usp=drive_link<br>

## **개발환경**<br>
| 구분 | 내용 |
----|----|
**OS**|Windows 10|
**IDE**|Spring Tool Suite4 4.21.0.RELEASE|
**Front-end**|HTML<br>CSS<br>JavaScript<br>React 18.2.0<br> Antdisign|
**Back-end**|Java 17<br>Spring Boot 3.2.2<br>Spring Security 6.2.1<br>JWT 0.12.3<br>JPA<br>lombok 1.18.30|
**Database**|MySQL 8.0.22<br>MySQL Workbench CE 8.0|
<br>

## 🧑‍💻팀 소개
### 팀명 : 알바트로스
### **팀원별 업무 분담**<br>
|       | 이지홍(팀장)                                                                                                    | 김주원                                                                                         | 정유진                                                                             |
|-------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Front** | -메인 페이지 <br> -내 정보 페이지 <br> -입/출고 관리 <br> -재고 관리  <br> -생산지시 <br> -제품 검수 <br> -테이블, 탭 컴포넌트 | -로그인 <br> -비밀번호 찾기 <br> -거래처 목록 <br> -물품 목록 <br> -BOM 목록 <br> -사원대장 목록 | -네비게이션바 <br> -구매/판매 목록 <br> -견적서 목록 <br> -매입매출 전표 목록 <br> -정보 입력 모달창 |
| **Back**  | -내 정보 변경 <br> -입/출고 관리 <br> -재고 관리 <br> -생산지시 <br> -제품 검수 | -로그인, 로그아웃 <br> -비밀번호 찾기 <br> -인증, 인가 <br> -거래처 목록 <br> -물품 목록 <br> -BOM <br> -사원관리 | -구매/판매 주문서 <br> -견적서 <br> -매입/매출 전표
<br>
<br>

## **주요 기능**
### **로그인 : 아이디, 비밀번호 입력을 통한 로그인**
<br><img src="https://github.com/user-attachments/assets/1eb6e65a-3b22-4d67-a9be-cfacd23503e8" width="1000" border="1px solid"><br>
### **유저 정보 : 유저 정보 조회, 수정 등 관리**
<br><img src="https://github.com/user-attachments/assets/0c459795-ccc5-4fef-b418-d9b393dd6a82" width="1000" border="1px solid"><br>
### **회원 가입 : 관리자가 유저를 추가**
### **권한그룹 설정 : 유저의 권한 설정**
<br><img src="https://github.com/user-attachments/assets/1b97f945-3997-4186-84b7-78e9194892b1" width="1000" border="1px solid"><br>
### **입고/출고 관리 : 자재의 입고 / 제품의 출고 관리**
<br><img src="https://github.com/user-attachments/assets/e1027f36-1e92-4bbf-9c93-624fa31afca9" width="1000" border="1px solid"><br>
- 거래처 관리 : 거래처 정보, 거래 기록 등을 작성, 조회
- 구매/판매 관리 : 거래처로부터 구매 / 자사의 판매 관리
- 재고 관리 : 자재 / 제품의 재고 관리
- 전표 관리 : 입금/출금 내역을 기록하는 전표 작성 및 조회
- 생산 관리 : 생산 지시 작성, 단가 표시, 불량률 파악 등 생산 관련 기능 

## **잘한 점과 아쉬운 점**<br>

### **잘한 점**
- RESTful API를 설계했고, REST원칙 중 하나인 무상태성을 유지하기위해 인증 방식으로 JWT를 사용한 점.<br>
- 탭, 테이블, 모달 등의 컴포넌트를 재사용할 수 있게 구현한 점.<br>
- 상태 올리기 기법을 적절히 사용해 네비게이션바와 테이블에서 공유되는 상태를 관리해 메뉴에 대해 동기화된 상태를 유지한 점.<br>
<br>

### **아쉬운 점**
- DB설계가 중요한 주제였는데, 연관있는 데이터 사이의 관계표현과 데이터정규화 등 데이터 중복을 줄이고 일관성은 높이기 위한 공부가 부족했던 점.<br>
- 코드의 가독성을 향상시키고 구현의도를 쉽게 파악할 수 있게 하고자 Enum타입을 사용했으나, 사용이 미숙해 Enum을 사용해 얻을 수 있는 이점을 살리지 못한 점<br>.

## **어려웠던 것과 해결 방법**<br>
프로젝트를 빌드/배포하는 과정이 어려웠습니다. 로컬에서는 정상적인 코드가 AWS EC2 인스턴스상에서는 빌드되지 않는 문제와, 로컬에서 빌드 한 후 jar파일을 복사하는 방법으로 배포에 성공해도. 2~3일 뒤에 배포에 문제가 생기는 상황이었습니다. EC2인스턴스 프리티어의 메모리 용량 문제임을 발견하고 스왑 메모리를 할당해 해결했습니다.


## **프로젝트 후기**<br>
작업물을 합치기 위한 용도가 아닌 형상관리 도구로써 깃 허브를 사용하는 경험을 할 수 있어 좋았습니다. 에러가 생겼는데 언제부터 있던 에러인지 모르겠을 때, 팀원들의 작업물을 확인할 때 커밋 메시지를 읽어보기도 했고, 브랜치를 나눠서 실험적인 코드를 작성해 보고 성공적이면 머지하고, 방향이 틀렸다면 다시 돌아가는 식의 작업 방식이 흥미로웠습니다. 익숙하지 않은 기술을 사용해 프로젝트를 진행해 작업속도가 늦어지는 일도 있었지만, 새로 공부한 기술을 프로젝트에 적용하고, 팀원들과 공유하는 경험이 공부하는데 많은 도움이 됐습니다.
<br>

## **폴더 구조**<br>
```
+---frontend
|       \---...
+---java
|   \---himedia
|       \---project
|           \---erpro
|               |   ErproApplication.java
|               |   WebController.java
|               |
|               +---common
|               |       Message.java
|               |
|               +---config
|               |       CorsMvcConfig.java
|               |       SecurityConfig.java
|               |
|               +---email
|               |   +---dto
|               |   |       EmailDto.java
|               |   |
|               |   \---service
|               |           EmailService.java
|               |
|               +---inventory
|               |   +---controller
|               |   |       BomController.java
|               |   |       InventoryController.java
|               |   |       ItemController.java
|               |   |       StoreController.java
|               |   |
|               |   +---dto
|               |   |       BomDetailDto.java
|               |   |       BomDto.java
|               |   |       InventoryDto.java
|               |   |       ItemDto.java
|               |   |       StoreDto.java
|               |   |       StoreItemDto.java
|               |   |
|               |   +---entity
|               |   |       Bom.java
|               |   |       Inventory.java
|               |   |       Item.java
|               |   |       Store.java
|               |   |       StoreItem.java
|               |   |
|               |   +---enums
|               |   |       StoreSort.java
|               |   |
|               |   +---repository
|               |   |       BomRepository.java
|               |   |       InventoryRepository.java
|               |   |       ItemRepository.java
|               |   |       StoreItemRepository.java
|               |   |       StoreRepository.java
|               |   |
|               |   \---service
|               |           BomService.java
|               |           InventoryService.java
|               |           ItemService.java
|               |           StoreService.java
|               |
|               +---jwt
|               |       JWTFilter.java
|               |       JWTUtil.java
|               |       LoginFilter.java
|               |
|               +---member
|               |   +---controller
|               |   |       LoginController.java
|               |   |       MemberController.java
|               |   |       ProfileController.java
|               |   |
|               |   +---dto
|               |   |       CustomMemberDetails.java
|               |   |       MemberDto.java
|               |   |       PasswordFormDto.java
|               |   |       ProfileFormDto.java
|               |   |
|               |   +---entity
|               |   |       Member.java
|               |   |
|               |   +---enums
|               |   |       Department.java
|               |   |       MemberRank.java
|               |   |       OrderType.java
|               |   |       Role.java
|               |   |
|               |   +---repository
|               |   |       MemberRepository.java
|               |   |
|               |   \---service
|               |           CustomMemberDetailService.java
|               |           LoginService.java
|               |           MemberService.java
|               |           ProfileService.java
|               |
|               +---order
|               |   +---controller
|               |   |       EstimateController.java
|               |   |       InvoiceController.java
|               |   |       OrdersController.java
|               |   |
|               |   +---dto
|               |   |       EstimateDto.java
|               |   |       EstimateItemDto.java
|               |   |       InvoiceDto.java
|               |   |       InvoiceItemDto.java
|               |   |       OrdersDto.java
|               |   |       OrdersItemDto.java
|               |   |
|               |   +---entity
|               |   |       Estimate.java
|               |   |       EstimateItem.java
|               |   |       Invoice.java
|               |   |       InvoiceItem.java
|               |   |       Orders.java
|               |   |       OrdersItem.java
|               |   |
|               |   +---enums
|               |   |       OrdersType.java
|               |   |       SortType.java
|               |   |
|               |   +---repository
|               |   |       EstimateItemRepository.java
|               |   |       EstimateRepository.java
|               |   |       InvoiceItemRepository.java
|               |   |       InvoiceRepository.java
|               |   |       OrdersItemRepository.java
|               |   |       OrdersRepository.java
|               |   |
|               |   \---service
|               |           EstimateService.java
|               |           InvoiceService.java
|               |           OrdersService.java
|               |
|               +---production
|               |   +---controller
|               |   |       InspectionController.java
|               |   |       ProductionController.java
|               |   |
|               |   +---dto
|               |   |       InspectionDto.java
|               |   |       ProductionDto.java
|               |   |
|               |   +---entity
|               |   |       Inspection.java
|               |   |       Production.java
|               |   |
|               |   +---enums
|               |   +---repository
|               |   |       InspectionRepository.java
|               |   |       ProductionRepository.java
|               |   |
|               |   \---service
|               |           InspectionService.java
|               |           ProductionService.java
|               |
|               \---trade
|                   +---controller
|                   |       AccountController.java
|                   |
|                   +---dto
|                   |       AccountDto.java
|                   |
|                   +---entity
|                   |       Account.java
|                   |
|                   +---enums
|                   +---repository
|                   |       AccountRepository.java
|                   |
|                   \---service
|                           AccountService.java
|
\---resources
    +---database
    +---META-INF
    +---static
    |   \---static
    |       +---css
    |       +---js
    |       \---media
    \---templates
```
