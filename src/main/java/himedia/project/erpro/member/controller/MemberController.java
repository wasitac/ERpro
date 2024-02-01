package himedia.project.erpro.member.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.dto.Password;
import himedia.project.erpro.member.dto.Profile;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;
	
	// 사원 대장 - 김주원
	@GetMapping("/member")
	public ResponseEntity<Message> member() {
		List<Member> dataList = memberService.getMemberAll();
		Message returnData = new Message("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 상세 정보 조회
	@GetMapping("/member/{id}")
	public ResponseEntity<Message> detailMember(@PathVariable(value="id") Long id) {
		Optional<Member> data = memberService.getMemberById(id);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);	
	}
	
	// 사원 추가 - 김주원
	@PostMapping("/member")
	public ResponseEntity<Message> createMember(@RequestBody Member member) {
		String result = memberService.createMember(member);
		Message returnData = new Message<>("",result);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 대장 수정 - 김주원
	@PutMapping("/member")
	public ResponseEntity<Message> editMember(@RequestBody Member member) {
		Optional<Member> editData = memberService.updateMember(member);
		Message returnData = new Message("수정 성공", editData);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 삭제 - 김주원
	@DeleteMapping("/member")
	public ResponseEntity<Message> deleteMember(@RequestBody List<Long> idList) {
		boolean result = memberService.deleteMemberList(idList);
		Message returnData = new Message(Boolean.toString(result));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 회원정보 수정폼 - 이지홍
	@GetMapping("/profile/{memberId}")
	public ResponseEntity<Message> profile(@PathVariable Long memberId) {
		// 유저정보와 일치하는 유저데이터 받아오기
		Profile data = memberService.getMemberProfile(memberId);
		Message returnData = new Message("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}

	// 회원정보 수정 - 이지홍
	@PutMapping("/profile")
	public String putProfile(@RequestBody Profile profile) {
		// 첫번째 파라미터 memberid로 바꾸기
		memberService.updateProfile(1001l, profile);
		return "redirect:/profile";
	}

	// 비밀번호 수정 - 이지홍
	@PutMapping("/password")
	public String putPassword(@RequestBody Password password) {
		// 첫번째 파라미터 userid로 바꾸기
		memberService.updatePassword(1001l, password);
		return "redirect:/profile";
	}
}
