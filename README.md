# **ERPro**
### **SpringBoot/JPA Project**
### 주제 : ERP<br>
#### 🗓️개발 기간
#### 2024. 1. 15 ~ 2024.02. 15<br>

#### 배포: http://52.78.58.48:9999/<br>
(id: 1001/pw: 1111)

#### 산출물: https://drive.google.com/drive/folders/1Vou1iD2J9DRyMfJkz0rWXiqd_fuTtbHZ?usp=drive_link<br>

## 🧑‍💻팀 소개
### Team. 알바트로스
### 담당 업무
|       | 이지홍(팀장)                                                                                                    | 김주원                                                                                         | 정유진                                                                             |
|-------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Front** | -메인 페이지 <br> -내 정보 페이지 <br> -입/출고 관리 <br> -재고 관리  <br> -생산지시 <br> -제품 검수 <br> -테이블, 탭 컴포넌트 | -로그인 <br> -비밀번호 찾기 <br> -거래처 목록 <br> -물품 목록 <br> -BOM 목록 <br> -사원대장 목록 | -네비게이션바 <br> -구매/판매 목록 <br> -견적서 목록 <br> -매입매출 전표 목록 <br> -정보 입력 모달창 |
| **Back**  | -내 정보 변경 <br> -입/출고 관리 <br> -재고 관리 <br> -생산지시 <br> -제품 검수 | -로그인, 로그아웃 <br> -비밀번호 찾기 <br> -인증, 인가 <br> -거래처 목록 <br> -물품 목록 <br> -BOM <br> -사원관리 | -구매/판매 주문서 <br> -견적서 <br> -매입/매출 전표

<br>
<br>

## 🏷️개발 환경
| 구분 | 내용 |
----|----|
**OS**|Windows 10|
**IDE**|Spring Tool Suite4 4.21.0.RELEASE|
**Front-end**|HTML<br>CSS<br>JavaScript<br>React 18.2.0<br> Antdisign|
**Back-end**|Java 17<br>Spring Boot 3.2.2<br>Spring Security 6.2.1<br>JWT 0.12.3<br>JPA<br>lombok 1.18.30|
**Database**|MySQL 8.0.22<br>MySQL Workbench CE 8.0|
<br>


## 💻설계 배경
제조 생산 업무에 대한 전반적인 흐름 관리와 작업 효율 향상
<br>
<br>
<br>

## 📌설계 목적
업무 처리의 편의성과 신속성을 향상시켜 작업 효율 극대화
<br>
<br>
<br>

## ☀️기대효과
재고 및 생산 관리로 자재 낭비를 방지하고 자원 운용과 생산 업무 통합 관리로 작업자의 편의성 향상
<br>
<br>
<br>

## 📦서비스 대상
생산/물류 관리가 필요한 제조 회사
<br>
<br>
<br>

## 📝주요기능
- 로그인 : 아이디, 비밀번호 입력을 통한 로그인
<br><img src="https://github.com/user-attachments/assets/1eb6e65a-3b22-4d67-a9be-cfacd23503e8" width="1000" border="1px solid"><br>
- 유저 정보 : 유저 정보 조회, 수정 등 관리
<br><img src="https://github.com/user-attachments/assets/0c459795-ccc5-4fef-b418-d9b393dd6a82" width="1000" border="1px solid"><br>
- 회원 가입 : 관리자가 유저를 추가
- 권한그룹 설정 : 유저의 권한 설정
<br><img src="https://github.com/user-attachments/assets/1b97f945-3997-4186-84b7-78e9194892b1" width="1000" border="1px solid"><br>
- 거래처 관리 : 거래처 정보, 거래 기록 등을 작성, 조회
- 구매/판매 관리 : 거래처로부터 구매 / 자사의 판매 관리
- 입고/출고 관리 : 자재의 입고 / 제품의 출고 관리
<br><img src="https://github.com/user-attachments/assets/e1027f36-1e92-4bbf-9c93-624fa31afca9" width="1000" border="1px solid"><br>
- 재고 관리 : 자재 / 제품의 재고 관리
- 전표 관리 : 입금/출금 내역을 기록하는 전표 작성 및 조회
- 생산 관리 : 생산 지시 작성, 단가 표시, 불량률 파악 등 생산 관련 기능 

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
