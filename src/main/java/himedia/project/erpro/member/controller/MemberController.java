package himedia.project.erpro.member.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.dto.MemberDto;
import himedia.project.erpro.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;
	
	// 사원 대장 - 김주원
	@GetMapping("/api/member")
	public ResponseEntity<Message<List<MemberDto>>> member() {
		List<MemberDto> dataList = memberService.getMemberAll();
		Message<List<MemberDto>> returnData = new Message<>("", dataList);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 상세 정보 조회
	@GetMapping("/api/member/{id}")
	public ResponseEntity<Message<MemberDto>> detailMember(@PathVariable(value="id") Long id) {
		MemberDto data = memberService.getMemberById(id);
		Message<MemberDto> returnData = new Message<>("", data);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 추가 - 김주원
	@PostMapping("/api/member")
	public ResponseEntity<Message<String>> createMember(@RequestBody MemberDto memberDto) {
		String result = memberService.createMember(memberDto);
		Message<String> returnData = new Message<>("",result);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 대장 수정 - 김주원
	@PutMapping("/api/member")
	public ResponseEntity<Message<Optional<MemberDto>>> editMember(@RequestBody MemberDto memberDto) {
		Optional<MemberDto> editData = memberService.updateMember(memberDto);
		Message<Optional<MemberDto>> returnData = new Message<>("수정 성공", editData);
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	
	// 사원 삭제 - 김주원
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/api/member")
	public ResponseEntity<Message<Boolean>> deleteMember(@RequestBody List<Long> idList) {
		boolean result = memberService.deleteMemberList(idList);
		Message<Boolean> returnData = new Message<>(Boolean.toString(result));
		return new ResponseEntity<>(returnData, HttpStatus.OK);
	}
	

}
